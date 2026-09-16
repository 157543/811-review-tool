import type { Citation, Question, SourceType } from '../../src/domain/models.ts';

const textbookCitation=(location_text:string,pdf_page:number,printed_page:string,section:string,item:string|null=null):Citation=>({
  source_id:'OPPENHEIM-2E-LIU-01',location_text,pdf_page,printed_page,section,item,year:null,original_exam_code:null
});
const textbook=(type:SourceType,reference:string,citations:Citation[]):Question['source']=>({
  type,reference,parent_id:null,parent_knowledge_point:null,citations,verification:'verified'
});
const keyExercise=(exercise:string,topic:string,exercisePdf:number,exercisePrinted:string,body:Citation):Question['source']=>({
  type:'KEY_EXERCISE',
  reference:`重点习题${exercise}直接训练${topic}；同时由教材正文定义或性质核对。`,
  parent_id:null,parent_knowledge_point:null,
  citations:[
    {source_id:'SCUT811-KEY-EXERCISE-LIST-01',location_text:'第1章重点课后题列表',pdf_page:4,printed_page:null,section:'第1章',item:exercise,year:null,original_exam_code:null},
    textbookCitation(`习题${exercise}`,exercisePdf,exercisePrinted,'第1章 信号与系统',exercise),
    body
  ],
  verification:'verified'
});

export const chapter1ReviewedSources:Record<string,Question['source']>={
  'scut811-p1-q0025':textbook('TEXTBOOK_DEFINITION','教材第1.2.3节给出偶信号定义与偶部表达式。',[
    textbookCitation('第1.2.3节 偶信号与奇信号，式(1.14)',32,'9','第1章 1.2.3 偶信号与奇信号')
  ]),
  'scut811-p1-q0026':textbook('TEXTBOOK_PROPERTY','教材由连续时间复指数周期条件推出正弦的基本周期。',[
    textbookCitation('第1.3.1节 周期复指数和正弦信号，式(1.24)～(1.25)',34,'11','第1章 1.3.1 连续时间复指数信号与正弦信号')
  ]),
  'scut811-p1-q0027':keyExercise('1.26','离散信号周期性',63,'40',
    textbookCitation('第1.3.3节 离散时间复指数序列的周期性质，式(1.53)～(1.55)',40,'17','第1章 1.3.3 离散时间复指数序列的周期性质')),
  'scut811-p1-q0028':keyExercise('1.21','波形反转与偶部构造',62,'39',
    textbookCitation('第1.2.3节 偶信号与奇信号，式(1.18)～(1.19)',32,'9','第1章 1.2.3 偶信号与奇信号')),
  'scut811-p1-q0030':keyExercise('1.21','波形时移与时间反转',62,'39',
    textbookCitation('第1.2.1节 自变量变换举例：时移与时间反转',29,'6','第1章 1.2.1 自变量变换举例')),
  'scut811-p1-q0032':textbook('TEXTBOOK_DEFINITION','教材一般复指数定义明确指出实部控制包络、虚部控制振荡。',[
    textbookCitation('第1.3.1节 一般复指数信号，式(1.42)～(1.43)及图1.23',37,'14','第1章 1.3.1 连续时间复指数信号与正弦信号')
  ]),
  'scut811-p1-q0033':keyExercise('1.9','连续及离散复指数周期条件',60,'37',
    textbookCitation('第1.3.3节 离散频率相差2π的复指数完全相同，式(1.51)',39,'16','第1章 1.3.3 离散时间复指数序列的周期性质')),
  'scut811-p1-q0034':textbook('TEXTBOOK_DEFINITION','教材用欧拉关系把实正弦展开为共轭的正、负频率复指数项。',[
    textbookCitation('第1.3.1节 欧拉关系及正弦的复指数表示，式(1.26)～(1.29)',35,'12','第1章 1.3.1 连续时间复指数信号与正弦信号')
  ]),
  'scut811-p1-q0040':textbook('TEXTBOOK_PROPERTY','教材第1.6.6节给出线性、齐次性及零输入必须产生零输出的直接推论。',[
    textbookCitation('第1.6.6节 线性：叠加性质与零输入响应，式(1.121)～(1.125)',57,'34','第1章 1.6.6 线性')
  ]),
  'scut811-p1-q0041':textbook('TEXTBOOK_DEFINITION','教材第1.6.1节定义无记忆系统：当前输出仅依赖当前输入。',[
    textbookCitation('第1.6.1节 记忆系统与无记忆系统',51,'28','第1章 1.6.1 记忆系统与无记忆系统')
  ]),
  'scut811-p1-q0042':textbook('TEXTBOOK_PROPERTY','依据教材对记忆、因果、时不变和线性的定义逐项判定固定延时线性组合。',[
    textbookCitation('第1.6.1节 记忆系统与无记忆系统',51,'28','第1章 1.6.1 记忆系统与无记忆系统'),
    textbookCitation('第1.6.3节 因果性',53,'30','第1章 1.6.3 因果性'),
    textbookCitation('第1.6.5节 时不变性',55,'32','第1章 1.6.5 时不变性'),
    textbookCitation('第1.6.6节 线性',57,'34','第1章 1.6.6 线性')
  ]),
  'scut811-p1-q0043':textbook('TEXTBOOK_DEFINITION','教材第1.6.3节定义因果系统不能依赖未来输入。',[
    textbookCitation('第1.6.3节 因果性及未来输入反例，式(1.102)～(1.103)',53,'30','第1章 1.6.3 因果性')
  ]),
  'scut811-p1-q0045':textbook('TEXTBOOK_EXAMPLE','教材例1.15直接以 y[n]=nx[n] 说明显式时变增益构成时变系统。',[
    textbookCitation('例1.15：y[n]=nx[n] 的时变性，式(1.119)',56,'33','第1章 1.6.5 时不变性','例1.15')
  ]),
  'scut811-p1-q0047':textbook('TEXTBOOK_PROPERTY','教材以 y[n]=x[-n] 说明非因果性，并结合记忆、时不变和线性定义完成性质判定。',[
    textbookCitation('第1.6.3节 例1.12：y[n]=x[-n] 的非因果性，式(1.105)',53,'30','第1章 1.6.3 因果性','例1.12'),
    textbookCitation('第1.6.1节 记忆系统与无记忆系统',51,'28','第1章 1.6.1 记忆系统与无记忆系统'),
    textbookCitation('第1.6.5节 时不变性',55,'32','第1章 1.6.5 时不变性'),
    textbookCitation('第1.6.6节 线性',57,'34','第1章 1.6.6 线性')
  ])
};
