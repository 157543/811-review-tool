import { useEffect, useMemo, useRef, useState } from 'react';
import type { Attempt, BankChannel, ErrorReason, FullBackup, GradingMode, MasteryStatus, Mistake, OptionId, Question, Session, StudyFilters, StudyMode } from './domain/models';
import { EMPTY_FILTERS } from './domain/models';
import { db } from './data/database';
import { advanceImmediateSession, advanceReview, getRecoverableSession, installBank, savePending, startSession, submitAnswer } from './data/study-service';
import { annotateReason } from './data/reason-service';
import { createFullBackup, restoreFullBackup } from './data/backup';
import { createMistakeExport, downloadText, exportMistakesCsv, exportMistakesJson, exportMistakesMarkdown } from './data/export-service';
import { loadMistakeRows, type MistakeRow } from './data/mistake-service';
import { sampleQuestions } from './domain/sampling';
import { buildLearningDashboard, getDueState } from './domain/progress';
import release from '../data/questions/release.json';
import reasons from '../data/registries/error-reasons.json';
import { MathText } from './components/MathText';
import { FilterPanel } from './components/FilterPanel';
import { activatePwaUpdate, PWA_EVENTS } from './pwa';
import './styles.css';

type Screen='home'|'quiz'|'review'|'mistakes'|'done';
const releaseData=release as {bank_version:string;channel?:'release';publication?:{status:string;scope:string;required_review_status:string};questions:Question[]};
const cards:Array<{mode:StudyMode;eyebrow:string;title:string;description:string}>= [
  {mode:'today',eyebrow:'DAILY',title:'今日 10 题',description:'3 近期错题 · 2 薄弱点 · 3 当前章 · 2 旧章节'},
  {mode:'formula_pairs',eyebrow:'FORMULA',title:'公式与变换对',description:'集中识别性质、系数和常见变换对'},
  {mode:'error_focus',eyebrow:'FOCUS',title:'易错专项',description:'针对符号、尺度、2π 与条件陷阱'},
  {mode:'chapter',eyebrow:'CHAPTER',title:'按章节复习',description:'选择一章或多章，保留其他筛选条件'},
  {mode:'mistakes',eyebrow:'REVIEW',title:'错题本',description:'筛选、统计、重做并导出错题'},
];
const optionLabels:OptionId[]=['A','B','C','D'];
const masteryLabels:Record<MasteryStatus,string>={WEAK:'待巩固',LEARNING:'巩固中',MASTERED:'已掌握'};
type SessionSummary={total:number;correct:number;wrong:number;uncertain:number};

function testQuestions():Question[] {
  if(import.meta.env.MODE!=='test') return [];
  try { return JSON.parse(localStorage.getItem('__811_TEST_QUESTIONS__')??'[]') as Question[]; } catch { return []; }
}

function needReason(attempt:Attempt|null) { return Boolean(attempt?.grading&&(!attempt.grading.is_correct||attempt.uncertain)); }

export default function App() {
  const initialized=useRef(false); const restoreInput=useRef<HTMLInputElement>(null);
  const pendingRef=useRef<{selection:OptionId|null;uncertain:boolean}>({selection:null,uncertain:false});
  const [questions,setQuestions]=useState<Question[]>([]); const [screen,setScreen]=useState<Screen>('home');
  const [count,setCount]=useState(10); const [gradingMode,setGradingMode]=useState<GradingMode>('immediate'); const [filters,setFilters]=useState<StudyFilters>(structuredClone(EMPTY_FILTERS));
  const [session,setSession]=useState<Session|null>(null); const [current,setCurrent]=useState<Question|null>(null); const [attempt,setAttempt]=useState<Attempt|null>(null);
  const [selected,setSelected]=useState<OptionId|null>(null); const [uncertain,setUncertain]=useState(false); const [mistakeRows,setMistakeRows]=useState<MistakeRow[]>([]);
  const [allMistakes,setAllMistakes]=useState<Mistake[]>([]); const [allAttempts,setAllAttempts]=useState<Attempt[]>([]); const [allSessions,setAllSessions]=useState<Session[]>([]); const [notice,setNotice]=useState(''); const [error,setError]=useState(''); const [busy,setBusy]=useState(false);
  const [online,setOnline]=useState(()=>navigator.onLine); const [offlineReady,setOfflineReady]=useState(false); const [updateRegistration,setUpdateRegistration]=useState<ServiceWorkerRegistration|null>(null);
  const [chapterPrompt,setChapterPrompt]=useState(false); const [replaceRequest,setReplaceRequest]=useState<{mode:StudyMode;override?:Question[];filters?:StudyFilters}|null>(null);
  const [pendingBackup,setPendingBackup]=useState<{bundle:FullBackup;name:string}|null>(null); const [sessionSummary,setSessionSummary]=useState<SessionSummary|null>(null);
  const injectedQuestions=useMemo(testQuestions,[]);
  const activeChannel:BankChannel=injectedQuestions.length?'test-fixture':'release';
  const authorizedLearningRelease=!injectedQuestions.length&&releaseData.publication?.status==='authorized'&&releaseData.publication.scope==='phase1-learning-release'&&releaseData.publication.required_review_status==='reviewed';
  const bankVersion=injectedQuestions.length?'test-fixture':releaseData.bank_version;
  const dashboard=useMemo(()=>buildLearningDashboard(questions,allMistakes,allAttempts,allSessions),[questions,allMistakes,allAttempts,allSessions]);

  useEffect(()=>{if(initialized.current)return;initialized.current=true;void initialize();},[]);
  useEffect(()=>{if(screen==='mistakes'&&questions.length) void refreshMistakes();},[screen,filters,questions]);
  useEffect(()=>{if(screen!=='done'||!session){setSessionSummary(null);return;}void db.attempts.where('session_id').equals(session.id).toArray().then(attempts=>setSessionSummary({total:attempts.length,correct:attempts.filter(item=>item.grading?.is_correct).length,wrong:attempts.filter(item=>item.grading&&!item.grading.is_correct).length,uncertain:attempts.filter(item=>item.uncertain).length}));},[screen,session?.id]);
  useEffect(()=>{if(!attempt?.grading)return;requestAnimationFrame(()=>document.querySelector('.feedback')?.scrollIntoView({behavior:'smooth',block:'start'}));},[attempt?.id]);
  useEffect(()=>{
    const wentOnline=()=>setOnline(true);const wentOffline=()=>setOnline(false);
    const ready=()=>setOfflineReady(true);
    const update=(event:Event)=>setUpdateRegistration((event as CustomEvent<ServiceWorkerRegistration>).detail);
    window.addEventListener('online',wentOnline);window.addEventListener('offline',wentOffline);
    window.addEventListener(PWA_EVENTS.offlineReady,ready);window.addEventListener(PWA_EVENTS.updateReady,update);
    return()=>{window.removeEventListener('online',wentOnline);window.removeEventListener('offline',wentOffline);window.removeEventListener(PWA_EVENTS.offlineReady,ready);window.removeEventListener(PWA_EVENTS.updateReady,update);};
  },[]);

  async function initialize() {
    setBusy(true); try {
      const bank=injectedQuestions.length?injectedQuestions:releaseData.questions; await installBank(bank,activeChannel,authorizedLearningRelease); setQuestions(bank);
      const settings=await db.settings.get('primary'); if(settings) setGradingMode(settings.grading_mode);
      await refreshLearningData();
      const recovered=await getRecoverableSession(); if(recovered) { setNotice('已恢复上次未完成的会话，题目顺序和进度保持不变。'); await openSession(recovered); }
    } catch(cause){setError((cause as Error).message);} finally {setBusy(false);}
  }

  async function openSession(next:Session) {
    setSession(next);setCurrent(null);pendingRef.current={selection:null,uncertain:false};setSelected(null);setUncertain(false);setAttempt(null);
    if(next.completed_at&&next.grading_mode==='end_of_session'&&!next.review_completed_at) { await loadReviewItem(next);setScreen('review');return; }
    if(next.completed_at) {setScreen('done');setCurrent(null);return;}
    await loadQuizItem(next);setScreen('quiz');
  }

  async function loadQuizItem(next:Session) {
    const item=next.queue[next.current_index]; if(!item){setScreen('done');return;}
    const snapshot=await db.snapshots.get(item.question_snapshot_id); if(!snapshot) throw new Error('题目快照不存在');
    setCurrent(snapshot.content);
    if(item.attempt_id) { const saved=await db.attempts.get(item.attempt_id);const selection=saved?.selected_option_id??null;const pendingUncertain=saved?.uncertain??false;pendingRef.current={selection,uncertain:pendingUncertain};setAttempt(saved??null);setSelected(selection);setUncertain(pendingUncertain); }
    else {pendingRef.current={selection:next.pending_selection,uncertain:next.pending_uncertain};setAttempt(null);setSelected(next.pending_selection);setUncertain(next.pending_uncertain);}
  }

  async function loadReviewItem(next:Session) {
    const item=next.queue[next.review_index]; if(!item){setScreen('done');return;}
    const [snapshot,saved]=await Promise.all([db.snapshots.get(item.question_snapshot_id),item.attempt_id?db.attempts.get(item.attempt_id):undefined]);
    if(!snapshot||!saved?.grading) throw new Error('轮末结果缺少题目快照或判分记录');
    setCurrent(snapshot.content);setAttempt(saved);setSelected(saved.selected_option_id);setUncertain(saved.uncertain);
  }

  const hasRecoverableSession=(value:Session|null)=>Boolean(value&&(value.completed_at===null||(value.grading_mode==='end_of_session'&&value.review_completed_at===null)));

  async function requestBegin(mode:StudyMode,override?:Question[],filterOverride?:StudyFilters) {
    const effectiveFilters=filterOverride??filters;
    if(mode==='chapter'&&!effectiveFilters.chapters.length){setChapterPrompt(true);setNotice('请先选择至少一个章节。');return;}
    if(hasRecoverableSession(session)){setReplaceRequest({mode,override,filters:filterOverride});if(screen!=='home')setScreen('home');return;}
    await begin(mode,override,filterOverride);
  }

  async function begin(mode:StudyMode,override?:Question[],filterOverride?:StudyFilters) {
    setBusy(true);setError('');setNotice(''); try {
      const settings=await db.settings.get('primary'); if(!settings) throw new Error('学习设置尚未初始化');
      const [mistakes,attempts,annotations]=await Promise.all([db.mistakes.toArray(),db.attempts.toArray(),db.reasonAnnotations.toArray()]);
      const effectiveFilters=filterOverride??filters;
      const sampled=override?{questions:override,shortage:0}:sampleQuestions({questions,mistakes,attempts,reasonAnnotations:annotations,settings,filters:effectiveFilters,mode,count});
      if(!sampled.questions.length) throw new Error(mode==='mistakes'?'当前筛选下没有可重做的错题':'当前筛选下没有可用题目');
      if(sampled.shortage>0) setNotice(`符合条件的题目不足，本轮调整为 ${sampled.questions.length} 题，且不会出现同组重复题。`);
      const next=await startSession(sampled.questions,mode,gradingMode,bankVersion,effectiveFilters);setAllSessions(await db.sessions.toArray());await openSession(next);
    } catch(cause){setError((cause as Error).message);} finally {setBusy(false);}
  }

  async function persistSelection(value:OptionId|null,nextUncertain=uncertain) {
    pendingRef.current={selection:value,uncertain:nextUncertain};setSelected(value); if(session) await savePending(session.id,value,nextUncertain);
  }
  async function persistUncertain(value:boolean) {const selection=pendingRef.current.selection;pendingRef.current={selection,uncertain:value};setUncertain(value);if(session)await savePending(session.id,selection,value);}

  async function answer() {
    if(!selected||!session||attempt)return;setBusy(true);setError('');try {
      const result=await submitAnswer(session.id,selected,uncertain);setSession(result.session);
      if(session.grading_mode==='immediate') setAttempt(result.attempt);
      else if(result.session.completed_at) {setScreen('review');await loadReviewItem(result.session);}
      else await loadQuizItem(result.session);
      await refreshLearningData();
    } catch(cause){setError((cause as Error).message);}finally{setBusy(false);}
  }

  async function saveReason(reason:ErrorReason) {
    if(!attempt||!session)return;setBusy(true);try{await annotateReason(attempt.id,reason);const updated=await db.sessions.get(session.id);if(updated)setSession(updated);await refreshLearningData();}catch(cause){setError((cause as Error).message);}finally{setBusy(false);}
  }

  async function nextImmediate() {
    if(!session||!attempt)return;if(needReason(attempt)&&session.pending_reason_attempt_ids.includes(attempt.id)){setError('请先点选本题错因。');return;}
    const next=await advanceImmediateSession(session.id);if(next.completed_at){setSession(next);setAllSessions(await db.sessions.toArray());setScreen('done');setCurrent(null);setAttempt(null);}else await openSession(next);
  }

  async function nextReview() {
    if(!session||!attempt)return;if(needReason(attempt)&&session.pending_reason_attempt_ids.includes(attempt.id)){setError('请先点选本题错因。');return;}
    const next=await advanceReview(session.id);
    if(next.review_completed_at){const sessions=await db.sessions.toArray();setSession(next);setAllSessions(sessions);setScreen('done');setCurrent(null);setAttempt(null);}
    else {setSession(next);await loadReviewItem(next);}
  }

  async function refreshLearningData() {const [mistakes,attempts,sessions]=await Promise.all([db.mistakes.toArray(),db.attempts.toArray(),db.sessions.toArray()]);setAllMistakes(mistakes);setAllAttempts(attempts);setAllSessions(sessions);}
  async function refreshMistakes() {setMistakeRows(await loadMistakeRows(filters));await refreshLearningData();}

  async function exportMistakes(kind:'md'|'csv'|'json') {
    setBusy(true);try{const bundle=await createMistakeExport(filters);const stamp=new Date().toISOString().slice(0,10);if(kind==='md')downloadText(`811-mistakes-${stamp}.md`,'text/markdown;charset=utf-8',exportMistakesMarkdown(bundle));if(kind==='csv')downloadText(`811-mistakes-${stamp}.csv`,'text/csv;charset=utf-8',exportMistakesCsv(bundle));if(kind==='json')downloadText(`811-mistakes-${stamp}.json`,'application/json;charset=utf-8',exportMistakesJson(bundle));setNotice(`已导出 ${bundle.items.length} 道错题。`);}catch(cause){setError((cause as Error).message);}finally{setBusy(false);}
  }

  async function exportBackup() {const backup=await createFullBackup();downloadText(`811-backup-${new Date().toISOString().slice(0,10)}.json`,'application/json;charset=utf-8',JSON.stringify(backup,null,2)+'\n');setNotice('完整 JSON 备份已生成。');}
  async function prepareBackup(file:File) {setError('');try{const bundle=JSON.parse(await file.text()) as FullBackup;if(bundle.scope?.kind!=='full_backup'||!Array.isArray(bundle.attempts)||!Array.isArray(bundle.mistakes))throw new Error('这不是完整的 811 JSON 备份。');setPendingBackup({bundle,name:file.name});}catch(cause){setError((cause as Error).message);}finally{if(restoreInput.current)restoreInput.current.value='';}}
  async function importBackup(bundle:FullBackup) {setBusy(true);try{await restoreFullBackup(bundle);await installBank(questions,activeChannel,authorizedLearningRelease);await refreshLearningData();setPendingBackup(null);setNotice('备份恢复完成。');const recovered=await getRecoverableSession();if(recovered)await openSession(recovered);else setScreen('home');}catch(cause){setError((cause as Error).message);}finally{setBusy(false);}}

  const answeredCount=session?.queue.filter(item=>item.attempt_id).length??0;
  const pendingReason=Boolean(attempt&&session?.pending_reason_attempt_ids.includes(attempt.id));
  const resumeProgress=session?(session.completed_at&&session.grading_mode==='end_of_session'?session.review_index:Math.min(answeredCount,session.queue.length)):0;
  const orderedOptions=useMemo(()=>current&&session?(session.queue[screen==='review'?session.review_index:session.current_index]?.option_order??optionLabels).map(id=>current.options.find(option=>option.id===id)!).filter(Boolean):[],[current,session,screen]);
  const dueMistakeRows=useMemo(()=>mistakeRows.filter(row=>getDueState(row.mistake)==='due'),[mistakeRows]);
  const currentMistake=current?allMistakes.find(item=>item.question_id===current.id):undefined;
  const scheduleNote=attempt?.grading&&attempt.grading.is_correct&&!attempt.uncertain&&currentMistake?.latest_attempt_id===attempt.id&&currentMistake.last_qualifying_review_at!==attempt.grading.graded_at
    ? '本次正确已保存，但距离有效复习时间不足 24 小时，不计入连续有效正确。'
    : '';

  if(screen==='home') return <main className="shell">
    <header className="masthead"><span className="brand-mark">811</span><div><p className="kicker">SIGNALS · SYSTEMS · REVIEW</p><h1>把公式认准，<br/>把陷阱看穿。</h1><p className="lede">从抽题、判题、错因到间隔重做，全部记录在本机。</p></div><aside><span>{injectedQuestions.length?'隔离测试题库':'正式题库'}</span><strong>{questions.length}<small> / 305</small></strong><p>{injectedQuestions.length?'仅供自动化测试':'五章信号与系统选择题'}</p></aside></header>
    {!hasRecoverableSession(session)&&<button className="mobile-quick-start" disabled={busy} onClick={()=>void requestBegin('today')}>立即开始 {count} 题 <span>→</span></button>}
    {hasRecoverableSession(session)&&<section className="resume-card"><div><span>未完成的练习</span><strong>{session?.grading_mode==='end_of_session'&&session.completed_at?'继续逐题复盘':`${session?.mode==='today'?`今日 ${session.queue.length} 题`:cards.find(card=>card.mode===session?.mode)?.title??'练习'} · ${resumeProgress}/${session?.queue.length}`}</strong><small>题目顺序、答案和当前位置都已保存在本机</small></div><button className="primary" onClick={()=>session&&void openSession(session)}>继续本轮</button></section>}
    {replaceRequest&&<section className="replace-prompt" role="alert"><div><strong>当前还有未完成的练习</strong><span>开始新练习会结束当前这一轮，已保存的答题记录仍会保留。</span></div><button onClick={()=>{const request=replaceRequest;setReplaceRequest(null);void begin(request.mode,request.override,request.filters);}}>结束旧轮并开始</button><button onClick={()=>setReplaceRequest(null)}>取消</button></section>}
    <section className="learning-dashboard" aria-label="今日学习概况"><button className="due-card" onClick={()=>dashboard.dueToday?void requestBegin('mistakes',questions.filter(question=>allMistakes.some(mistake=>mistake.question_id===question.id&&getDueState(mistake)==='due')).slice(0,count)):void requestBegin('today')}><span>今日到期</span><strong>{dashboard.dueToday}</strong><small>{dashboard.dueToday?'优先完成间隔复习':'暂无到期题，练习薄弱点和新题'} →</small></button><div className="recent-card"><span>最近一次练习</span>{dashboard.recent?<><strong>{dashboard.recent.correct} / {dashboard.recent.total} 答对</strong><small>{new Date(dashboard.recent.completedAt).toLocaleString('zh-CN')} · 答错 {dashboard.recent.wrong} · 不确定 {dashboard.recent.uncertain}</small></>:<><strong>还没有记录</strong><small>完成一轮后在这里查看结果</small></>}</div><div className="due-overview"><span>接下来</span><strong>明日到期 {dashboard.dueTomorrow} 题</strong><small>已练 {dashboard.practiced} / {questions.length} 题</small></div></section>
    <section className="chapter-progress"><header><div><span>章节学习进度</span><strong>点击章节直接开始练习</strong></div></header><div>{dashboard.chapters.map(item=><button key={item.chapter} onClick={()=>{const nextFilters={...structuredClone(EMPTY_FILTERS),chapters:[item.chapter]};setFilters(nextFilters);void requestBegin('chapter',undefined,nextFilters);}}><span>第 {item.chapter} 章</span><b>{item.masteryPercent}%</b><i><em style={{width:`${item.masteryPercent}%`}}/></i><small>已练 {item.practiced}/{item.total} · 待巩固 {item.weak} · 巩固中 {item.learning} · 已掌握 {item.mastered}</small></button>)}</div></section>
    <section className="controls" aria-label="练习设置"><div><span>本轮题量</span>{[5,10,20].map(value=><button aria-pressed={count===value} className={count===value?'active':''} key={value} onClick={()=>setCount(value)}>{value}</button>)}</div><label><span>判题方式</span><select value={gradingMode} onChange={event=>{const value=event.target.value as GradingMode;setGradingMode(value);void db.settings.update('primary',{grading_mode:value});}}><option value="immediate">答完立即判题</option><option value="end_of_session">本轮统一判题</option></select></label></section>
    <FilterPanel filters={filters} onChange={value=>{setFilters(value);setChapterPrompt(false);}} questions={questions} forceOpen={chapterPrompt}/>
    {!injectedQuestions.length&&<><section className="pwa-state" aria-live="polite"><span className={online?'online':'offline'}><i/>{online?'当前联网':'当前离线'}</span>{offlineReady&&<span>已可离线使用</span>}{!offlineReady&&online&&<small>正在准备离线资源…</small>}{updateRegistration&&<button onClick={()=>activatePwaUpdate(updateRegistration)}>更新到新版</button>}</section><details className="offline-help"><summary>如何安装到手机或电脑</summary><p>iPhone/iPad：Safari 的“共享”→“添加到主屏幕”；Android 或电脑 Chrome/Edge：浏览器菜单中选择“安装应用”。首次看到“已可离线使用”后，断网也能继续刷题。</p></details></>}
    {notice&&<p className="notice success" role="status">{notice}</p>}{error&&<p className="notice" role="alert">{error}</p>}
    <section className="card-grid">{cards.map((card,index)=>{const title=card.mode==='today'?`今日 ${count} 题`:card.title;const description=card.mode==='today'?'优先安排近期错题、薄弱知识点和当前章节':card.description;return <button disabled={busy} className="mode-card" key={card.mode} onClick={()=>card.mode==='mistakes'?setScreen('mistakes'):void requestBegin(card.mode)}><span>{card.eyebrow}</span><b>0{index+1}</b><h2>{title}</h2><p>{description}</p><i>{card.mode==='mistakes'?`${allMistakes.length} 道记录`:'开始 →'}</i></button>;})}</section>
    <details className="settings-backup"><summary>设置与备份</summary><section className="data-actions"><div><strong>本地数据</strong><span>用于迁移或完整恢复当前学习记录</span></div><button onClick={()=>void exportBackup()}>导出完整备份</button><button onClick={()=>restoreInput.current?.click()}>恢复 JSON 备份</button><input ref={restoreInput} className="visually-hidden" type="file" accept="application/json,.json" onChange={event=>{const file=event.target.files?.[0];if(file)void prepareBackup(file);}}/></section></details>
    {pendingBackup&&<section className="backup-confirm" role="alert"><div><strong>准备恢复：{pendingBackup.name}</strong><span>备份于 {new Date(pendingBackup.bundle.exported_at).toLocaleString('zh-CN')}，包含 {pendingBackup.bundle.attempts.length} 次作答、{pendingBackup.bundle.mistakes.length} 道错题。确认后会覆盖当前本地学习记录。</span></div><button onClick={()=>void exportBackup()}>先备份当前记录</button><button className="danger" disabled={busy} onClick={()=>void importBackup(pendingBackup.bundle)}>确认覆盖并恢复</button><button onClick={()=>setPendingBackup(null)}>取消</button></section>}
    <footer>本地保存学习进度 · 支持离线使用 · 正式题库 {questions.length} / 305</footer>
  </main>;

  if(screen==='mistakes') return <main className="shell mistakes-screen"><header className="section-head"><button onClick={()=>setScreen('home')}>← 返回首页</button><div><p className="kicker">MISTAKE BOOK</p><h1>错题本</h1><p>共 {mistakeRows.length} 道记录，其中 {dueMistakeRows.length} 道今天到期</p></div></header><FilterPanel title="错题筛选" filters={filters} onChange={setFilters} questions={questions}/>{notice&&<p className="notice success" role="status">{notice}</p>}{error&&<p className="notice" role="alert">{error}</p>}<div className="export-bar"><button onClick={()=>void requestBegin('mistakes',dueMistakeRows.slice(0,count).map(row=>row.question))} disabled={!dueMistakeRows.length}>只重做今日到期题</button><button onClick={()=>void requestBegin('mistakes',mistakeRows.slice(0,count).map(row=>row.question))} disabled={!mistakeRows.length}>重做筛选结果</button></div><details className="advanced-tools"><summary>导出错题与备份</summary><div className="export-bar"><button onClick={()=>void exportMistakes('md')}>Markdown</button><button onClick={()=>void exportMistakes('csv')}>CSV</button><button onClick={()=>void exportMistakes('json')}>JSON</button><button onClick={()=>void exportBackup()}>完整备份</button></div></details><section className="mistake-list">{mistakeRows.map(({question,mistake})=><article key={question.id}><div><span>第 {question.chapter} 章 · {question.knowledge_point}</span><b>{masteryLabels[mistake.status]}</b></div><h2><MathText text={question.stem}/></h2><p className="due-label">{formatDue(mistake)}</p><dl><div><dt>答错</dt><dd>{mistake.mistake_count}</dd></div><div><dt>不确定</dt><dd>{mistake.uncertain_count}</dd></div><div><dt>连续有效正确</dt><dd>{mistake.spaced_correct_streak} / 3</dd></div></dl><MistakeDetails question={question} mistake={mistake} attempts={allAttempts}/><button onClick={()=>void requestBegin('mistakes',[question])}>重做此题</button></article>)}{!mistakeRows.length&&<p className="empty-state">当前筛选下没有错题。完成一次答错或“不确定”作答后会自动收纳。</p>}</section></main>;

  if(screen==='done') return <main className="shell done"><p className="kicker">SESSION COMPLETE</p><h1>本轮完成</h1>{sessionSummary?<section className="session-summary"><div><strong>{sessionSummary.correct}/{sessionSummary.total}</strong><span>答对</span></div><div><strong>{sessionSummary.wrong}</strong><span>答错</span></div><div><strong>{sessionSummary.uncertain}</strong><span>不确定</span></div></section>:<p>正在统计本轮结果…</p>}<p>{session?.grading_mode==='end_of_session'?'整轮已统一判分并完成逐题复盘。':'每次作答均已即时判定并保存。'}</p><div className="done-actions"><button onClick={()=>setScreen('mistakes')}>查看待巩固题</button><button className="primary" onClick={()=>{setScreen('home');setSession(null);setNotice('本轮记录已保存。');}}>返回首页</button></div></main>;

  if(!current||!session) return <main className="shell"><p>正在恢复会话…</p></main>;
  if(screen==='review'&&attempt?.grading) return <main className="quiz-shell review-shell"><header className="quiz-top"><button onClick={()=>setScreen('home')}>← 暂停复盘</button><div><span>轮末逐题结果</span><strong>{session.review_index+1} / {session.queue.length}</strong></div></header><div className="progress"><i style={{width:`${(session.review_index+1)/session.queue.length*100}%`}}/></div><article className="question-card"><div className="meta"><span>第 {current.chapter} 章</span><span>{current.knowledge_point}</span></div><h1><MathText text={current.stem}/></h1><ResultOptions question={current} order={session.queue[session.review_index].option_order} attempt={attempt}/><Feedback question={current} attempt={attempt} pendingReason={pendingReason} onReason={saveReason} scheduleNote={scheduleNote}/>{error&&<p className="notice" role="alert">{error}</p>}<div className="action-row"><button className="primary" disabled={pendingReason||busy} onClick={()=>void nextReview()}>{session.review_index+1===session.queue.length?'完成复盘':'下一条结果'}</button></div></article></main>;

  return <main className="quiz-shell"><header className="quiz-top"><button onClick={()=>setScreen('home')}>← 暂停</button><div><span>{cards.find(card=>card.mode===session.mode)?.title}</span><strong>{Math.min(session.current_index+1,session.queue.length)} / {session.queue.length}</strong></div></header><div className="progress"><i style={{width:`${Math.max(answeredCount,session.current_index)/session.queue.length*100}%`}}/></div>{notice&&<p className="notice success" role="status">{notice}</p>}<article className="question-card"><div className="meta"><span>第 {current.chapter} 章</span><span>{current.knowledge_point}</span></div><h1><MathText text={current.stem}/></h1><div className="options">{orderedOptions.map((option,index)=>{const chosen=selected===option.id;const reveal=attempt?.grading&&option.id===attempt.grading.correct_option_id;const wrong=attempt?.grading&&chosen&&!attempt.grading.is_correct;return <button aria-label={`选项 ${optionLabels[index]}`} key={option.id} disabled={Boolean(attempt)} className={[chosen?'selected':'',reveal?'correct':'',wrong?'wrong':''].join(' ')} onClick={()=>void persistSelection(option.id)}><b>{optionLabels[index]}</b><span><MathText text={option.content}/></span></button>;})}</div>{!attempt&&<label className="uncertain"><input type="checkbox" checked={uncertain} onChange={event=>void persistUncertain(event.target.checked)}/><span>我不确定</span><small>答对也会进入待巩固</small></label>}{attempt?.grading&&<Feedback question={current} attempt={attempt} pendingReason={pendingReason} onReason={saveReason} scheduleNote={scheduleNote}/>} {error&&<p className="notice" role="alert">{error}</p>}<div className="action-row">{!attempt?<button className="primary" disabled={!selected||busy} onClick={()=>void answer()}>提交答案</button>:<button className="primary" disabled={pendingReason||busy} onClick={()=>void nextImmediate()}>{session.current_index+1===session.queue.length?'完成本轮':'下一题'}</button>}</div></article></main>;
}

function ResultOptions({question,order,attempt}:{question:Question;order:OptionId[];attempt:Attempt}) {return <div className="options result-options">{order.map((id,index)=>{const option=question.options.find(candidate=>candidate.id===id)!;const chosen=attempt.selected_option_id===id;const correct=attempt.grading?.correct_option_id===id;return <div className={[chosen?'selected':'',correct?'correct':'',chosen&&!correct?'wrong':''].join(' ')} key={id}><b>{optionLabels[index]}</b><span><MathText text={option.content}/></span></div>;})}</div>;}

function Feedback({question,attempt,pendingReason,onReason,scheduleNote}:{question:Question;attempt:Attempt;pendingReason:boolean;onReason:(reason:ErrorReason)=>Promise<void>;scheduleNote?:string}) {
  if(!attempt.grading)return null;const needs=needReason(attempt);const explanation=splitExplanation(question.explanation);
  return <section className={`feedback ${attempt.grading.is_correct?'ok':'bad'}`}><p className="verdict">{attempt.grading.is_correct?(attempt.uncertain?'答对，但你标记了不确定':'回答正确'):'再看一眼'}</p>{scheduleNote&&<p className="schedule-note">{scheduleNote}</p>}<p className="correct-answer"><strong>正确答案：</strong><MathText text={question.options.find(option=>option.id===attempt.grading?.correct_option_id)?.content??''}/></p><div className="explanation"><strong>短解析</strong><p><MathText text={explanation.short}/></p></div>{explanation.pitfall&&<div className="pitfall"><strong>易错点</strong><p><MathText text={explanation.pitfall}/></p></div>}{needs&&pendingReason&&<div className="reasons"><span>{attempt.grading.is_correct?'不确定的原因是？':'这次错在哪里？'}</span>{reasons.items.map(reason=><button key={reason.id} onClick={()=>void onReason(reason.id as ErrorReason)}>{reason.label}</button>)}</div>}{needs&&!pendingReason&&<small>错因已记录</small>}</section>;
}

function MistakeDetails({question,mistake,attempts}:{question:Question;mistake:Mistake;attempts:Attempt[]}) {
  const latest=attempts.find(item=>item.id===mistake.latest_attempt_id);const explanation=splitExplanation(question.explanation);
  const selected=latest?question.options.find(option=>option.id===latest.selected_option_id):undefined;
  const correct=question.options.find(option=>option.id===question.correct_option);
  const reasonLabels=new Map(reasons.items.map(item=>[item.id,item.label]));
  const usedReasons=Object.entries(mistake.error_reason_distribution).filter(([,value])=>value>0);
  return <details className="mistake-details"><summary>查看答案与解析</summary><div className="mistake-detail-body"><p><strong>最近答案：</strong>{latest?<><MathText text={selected?.content??''}/>{latest.uncertain&&<span>（不确定）</span>}</>:'暂无'}</p><p><strong>正确答案：</strong><MathText text={correct?.content??''}/></p><div><strong>短解析</strong><p><MathText text={explanation.short}/></p></div>{explanation.pitfall&&<div><strong>易错点</strong><p><MathText text={explanation.pitfall}/></p></div>}<div><strong>错因分布</strong><p>{usedReasons.length?usedReasons.map(([reason,value])=>`${reasonLabels.get(reason)??reason} ${value} 次`).join(' · '):'尚未标记错因'}</p></div><p><strong>下次有效复习：</strong>{formatExactDue(mistake)}</p></div></details>;
}

function splitExplanation(value:string) {
  const match=/易错(?:点|提醒)[：:]/.exec(value);
  if(!match||match.index===undefined) return {short:value.trim(),pitfall:''};
  return {short:value.slice(0,match.index).trim(),pitfall:value.slice(match.index+match[0].length).trim()};
}

function formatDue(mistake:Mistake) {
  const state=getDueState(mistake);
  if(state==='mastered') return '已掌握';
  if(state==='unscheduled') return '待安排复习';
  if(state==='due')return '今日到期';
  if(state==='tomorrow')return '明日到期';
  const days=Math.ceil((new Date(mistake.next_due_at!).getTime()-Date.now())/86_400_000);
  return `${days} 天后可进行有效复习`;
}

function formatExactDue(mistake:Mistake) {
  if(mistake.status==='MASTERED') return '已掌握，无需安排';
  if(!mistake.next_due_at) return '待安排';
  const prefix=getDueState(mistake)==='due'?'今日已到期':getDueState(mistake)==='tomorrow'?'明日到期':'计划时间';
  return `${prefix} · ${new Date(mistake.next_due_at).toLocaleString('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}`;
}
