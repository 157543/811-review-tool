# 华工 811 第一阶段设计评审稿

日期：2026-09-14。状态：待用户确认的设计草案，不是已实施功能。

本轮仅整理设计与 Schema；未生成任何题目，未初始化应用、安装项目依赖或修改 PRD / CSV。后续批量录入 305 题必须取得用户明确确认。175 道思路排序题及其判分、界面均不在本轮范围内。

## 1. 产品理解

这是面向个人的「高速识别型 811 复习器」。围绕奥本海姆第二版第 1–5 章，把定义、公式性质、变换对和典型误区压缩为 5–20 秒可判断的四选一题。核心闭环是：选模式或章节 → 点选答案 → 判题与短解析 → 点选错因 → 自动收纳 → 间隔重做 → 导出。

每道题只有一个正确选项；全程不要求键盘输入。首页保留今日 10 题、公式与变换对、易错专项、按章节、错题本五个入口，以及 5 / 10 / 20 题快捷题量。阶段一按 PRD 保留即时判题和轮末判题两种模式，默认即时；若需要缩减轮末模式，应作为需求变更单独确认。

当前学习章节采用 PRD 的第 5 章，旧恢复摘要只作为历史背景和已记录易错点的线索。个人真实错因和系统推测必须区分，不能用选项机器标签替用户填写错因。

建议阶段一正式题集发布恰好 305 个独立母题，各母题只有一个在用版本；额外变式暂不发布。母题身份与题目修订版本分开，单纯改数字不增加母题数。这是对 PRD 母题口径的建议解释，仍须确认。

### 蓝图核算

CSV 共 33 个小节组；逐行四类之和均等于 total。章节、类型、总量全部匹配 PRD 总表：

| 章节 | 概念 | 公式性质 | 变换对 | 易错辨析 | 合计 |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1 | 18 | 2 | 0 | 10 | 30 |
| 2 | 12 | 8 | 0 | 25 | 45 |
| 3 | 10 | 17 | 13 | 25 | 65 |
| 4 | 8 | 20 | 27 | 30 | 85 |
| 5 | 10 | 18 | 22 | 30 | 80 |
| 合计 | 58 | 65 | 62 | 120 | 305 |

5.7 / 5.8 题型冲突已于 2026-09-15 冻结采用方案 A：CSV 是唯一机器配额真源，PRD 第 4.5 节文字已同步，配额总量不变：

| 小节 | PRD 第 4.5 节 | CSV |
| --- | --- | --- |
| 5.7 | 概念 1、易错 1 | 概念 1、易错 1 |
| 5.8 | 概念 1、公式 1 | 概念 1、公式 1 |

实施按「blueprint_section × subtype」逐格验收，不能只验总量。方案 A 仅修正 PRD 文字与 CSV 一致：5.7 为概念 1、易错 1；5.8 为概念 1、公式 1。

## 2. 私有资料检查

首次设计检查记录（2026-09-14）：已检查全部 15 个文件的目录，阅读恢复摘要和大纲图片、教学重点图片 1–9；对 4 个 PDF 读取页数、抽样检查文本层，并渲染查看下列页面。本轮不是对 1,234 页 PDF 的逐页内容审核，不能据此宣称所有年份齐全、所有答案正确。

| 资料 | 数量 / 页数 | 本轮检查及用途 |
| --- | --- | --- |
| 华南理工811考试大纲.JPG | 1 图 | 全图阅读；含时域、FS、FT，以及超出本阶段的拉普拉斯、z、采样滤波等。图片未明确考试年度，不标成已核验的最新官方版本 |
| 课本教学重点介绍1–9.png | 9 图 | 全部查看；1–5 主要对应当前范围，5 下部已含第 6 章，6–9 为后续章节。它们是带第三方整理标识的备考资料，不能等同官方大纲 |
| 奥本教材高清 PDF | 628 页 | 查看 PDF 第 2、8、9、14、15 页，核对第二版、章节组织及符号说明。样本多为扫描页；可正常渲染，解析器报告加密标志并未阻止本次阅读 |
| 00–24 年华工811真题 PDF | 170 页 | 查看 PDF 第 1、2、3、10、170 页；包含转载的「2022 年官方版」大纲、试题和图形，PDF 页码与印刷页码不一致，不能用固定偏移或文件名推断所有年份 |
| 05–20、24 年真题解析 PDF | 147 页 | 查看 PDF 第 1–2 页，卷面有 2005 年及历史科目代码 424；第 2 页解析明确注明某选择题原选项有误。需登记勘误并回对原题，不能直接把答案键当权威 |
| 宋琪、陆三兰《信号与系统学习与考研指导》 | 289 页 | 查看 PDF 第 1、5 页，核对为奥本第二版配套教辅，目录小节编号与奥本主教材不同，不能直接替代教材 section |
| 华工811_项目恢复摘要.md | 1 文本 | 记录旧进度为 4.0–4.2；与 PRD 当前第 5 章不同，按 PRD 更新。可追踪卷积平移、谐波下标、DTFS 模 N、sinc 等已记录提醒，但不是逐次真实作答记录 |
| 华南理工大学章节及课后习题划重点(1).pdf（2026-09-15新增） | 5 页 | 全5页阅读；第4页列第1–5章82道重点课后题，数量20/13/15/20/14。逐题回看奥本教材题号、题干和图形，建立印刷页/PDF页及蓝图小节映射；未核对答案，未生成题目 |

缺项与可信度边界：

- **划重点原件缺项已解决（2026-09-15）**：新增《华南理工大学章节及课后习题划重点(1).pdf》已登记到 [来源manifest](../../source_notes/manifest.local.json)，当前资料目录为16个文件、5个PDF共1,239页；这不是对全部PDF内容的审核。KEY_EXERCISE从“缺清单而无法核验重点资格”更新为“82项清单资格、教材定位及主题映射已核对，可开展逐题审核”。[逐题索引](../../source_notes/index/key-exercises-phase1.md)保留原注和适用边界；答案审核仍未开展，没有任何正式题或Question审核状态变更。
- **新增来源差异只报告，不调配额**：个别目录笔误、习题号与小节号混淆、相关函数/希尔伯特变换等超出当前明确知识点、部分习题深度超出阶段一，见 [增量冲突报告](../../source_notes/conflicts/key-exercises-increment-2026-09-15.md)。305题配额和原有5.7/5.8题型待定事项均保持不变。3.4、4.7、5.7未从这82题获得直接主题映射，可继续使用已有教材正文等来源，不应删除配额。
- 未发现完整个人错题原始记录或对应截图；恢复摘要只能支持「摘要记载的易错点」，不能捏造原作答、日期或错误次数。
- 教学重点图片提到 2025 / 2026 年试题，现有真题文件名到 2024 年。本轮未核实这些新年份原卷，不能据此创建带具体新年份题号的真题来源。
- 大纲图片所列奥本出版时间为 2020.8，真题合集所转载大纲写 1998.3，均称第二版；需要登记所用文件与版本，不能混用印刷页码，也不能据此自行认定理论冲突。
- 教学重点图 5 将 5.5 描述为较低频，而 PRD 仍给 8 题；这是「考点权重」与「教学覆盖」的区别，保留冻结配额并在索引说明，不擅自减量。5.8 图中强调例 5.18，适合后续核对来源，不据此自动新增题。

题源治理继续遵循 PRD：大纲控制范围 → 教学重点控制权重 → 奥本核对定义公式 → 重点课后题 → 真题及解析 → 个人真实错误 → 受控变式。AI 只整理、转写、提出变式；它不是来源。

## 3. 技术栈与目录

建议响应式前端 SPA：React + TypeScript + Vite，CSS Modules 与共享设计变量，KaTeX 渲染数学，Dexie 封装 IndexedDB 持久化，JSON Schema Draft 2020-12 + Ajv2020 / ajv-formats 校验，Node.js + TypeScript 执行导入及题量校验。测试使用 Vitest（纯业务规则）和 Playwright（做题、刷新恢复、导出、移动布局）。依赖版本在实施时选兼容稳定版本并锁定 lockfile，本轮不安装。

305 题体量适合静态发布，第一阶段不需要账号、后端数据库或同步服务。React 管理视图与本轮交互，抽题 / 判题 / 掌握规则写成独立纯函数；IndexedDB 是已提交作答的事实存储。一次判题在事务内写入 Attempt、更新 Mistake 及 Session，避免重复点击或中断导致计数错位。数据库失败时保留当前作答并提示重试，不能静默显示已保存。

KaTeX 与字体随应用打包，统一正文中的数学定界符和 notation_profile。使用 trust=false，构建时启用公式错误检测；分段式和长式由内容编排成多行，不能认为 CSS 自动折行能解决任意公式。图题使用可追溯的静态 SVG / PNG 资产，包含替代文本，不把私有整页 PDF 当作前端资源。

第一阶段浏览器可用不等于跨设备同步；是否要求断网可启动、安装到主屏幕，以及最低 Safari / iOS 版本仍待界定。可把 PWA 缓存作为后续明确需求，若实现则缓存按 bank_version 隔离并在轮次结束后切换题库版本。

下面是建议最终目录，并非本轮已创建全部内容：

```text
811-review-tool/
  PRD.md
  docs/design/                   # 本轮设计、Question Schema 草案
  schemas/                       # 确认后正式 Question / Attempt / Mistake / Export Schema
  data/
    blueprint/                   # 经确认的唯一配额输入
    registries/                  # 知识点、九类错因、机器标签、符号约定
    questions/
      draft/                     # 分章原始录入，保留reviewed状态
      verified/                  # 审核后发布输入，仍在构建期复检
    releases/                    # 发布清单：bank_version、305个ID和revision、内容hash
    assets/                      # 经审核的题目配图与资产登记
  source_notes/
    manifest.local.json          # 本地文件相对路径、SHA256、版次、来源身份
    index/                       # 大纲条目、教材页码、原题年份题号映射
    conflicts/                   # 冲突、勘误、处理依据
  private_sources/               # 原始资料，仅本地保存
  scripts/
    import-questions.ts          # JSON / 约定CSV → draft，不能自动升为verified
    validate-bank.ts            # Schema + 语义 + 逐小节配额 + 公式检查
    build-bank.ts               # 仅按发布清单输出可刷题集
    check-release-assets.ts     # 检查产物不带私有源文件及绝对路径
  src/
    app/                        # 路由、首页、全局样式
    features/{quiz,mistakes,exports,settings}/
    domain/{sampling,grading,mastery}/
    components/{MathText,OptionButton,Progress,QuestionFigure}/
    storage/                    # IndexedDB表、迁移、事务和快照
    data/                       # 发布题库加载、版本校验
  tests/
    fixtures/                   # 明确标为测试数据，不进入发布题库
    unit/                       # 抽题兜底、状态转换、统计、导出
    e2e/                        # 跨页面完整闭环
  public/                       # 仅明确允许公开的静态文件
  .gitignore
  package.json
  package-lock.json
```

实施时将 private_sources/、source_notes/manifest.local.json、私有摘录、tmp/、exports/ 加入忽略规则，并对发布包做允许清单检查。当前目录尚未发现 .git 或 .gitignore；仅加 .gitignore 不会防止应用构建意外携带源资料。

技术依据：Vite 提供 React TypeScript 模板及静态构建（[Vite](https://vite.dev/guide/)）；Dexie 提供跨表事务（[Dexie](https://dexie.org/docs/Dexie/Dexie.transaction%28%29)）；KaTeX 的信任开关、异常和渲染行为见 [KaTeX](https://katex.org/docs/options)；Draft 2020-12 使用对应 Ajv 类（[Ajv](https://ajv.js.org/json-schema.html)）。这些是本方案的技术选择，不是 PRD 已冻结决定。

## 4. 数据设计

### 4.1 Question

完整可解析的草案在同目录 question.schema.json，业务约束说明在 schema-notes.md。它只包含结构定义，没有任何题目数据。

| 字段组 | 关键字段 | 语义 |
| --- | --- | --- |
| 身份 | schema_version, id, revision, family_id, variant_role | id跨修订稳定；revision递增；family_id用于母题去重，母题指向自身；base / variant不与来源类型混为一谈 |
| 配额 | chapter, section, blueprint_section, subtype | section是教材实际小节字符串，blueprint_section是CSV的33个配额桶之一；每题只消耗一个主类型配额 |
| 知识点 | knowledge_point_id, knowledge_point | ID用于统计和防同义词碎片化，名称用于展示；不依靠自由文本分组 |
| 范围与权重 | importance_811, syllabus, can_skip | importance为1–5；syllabus枚举与可略过语义需确认；值必须由资料索引支持，低频不等于考试范围之外 |
| 内容 | type=mcq, stem, options, correct_option, explanation, notation_profile, figures? | 4个稳定选项ID，且恰好1个正确答案；文字含LaTeX；配图可选并引用资产ID |
| 来源 | source.type, reference, citations, parent_id, parent_knowledge_point, verification | 保留PRD9类来源；citations记录文件身份和PDF/印刷页码等定位；受控变式有父依据且仍须可核验来源 |
| 审核 | review.status, reviewer, reviewed_at, notes | draft → reviewed → verified；来源核验和整题审核分别表示；审核人及时间不能由导入脚本伪造 |

题库进入正式发布默认要求整题 verified、来源已核验且无未解决冲突。本次 Phase 1 学习版由项目所有者明确授权305道 reviewed 题发布，题库级授权不改变题目或来源核验状态。形式校验成功只能说明结构合格，不能证明答案数学正确或干扰项有效。

选项内部 ID A/B/C/D 永远代表原始选项身份，显示字母根据本轮 option_order 计算；本轮即使先不打乱，也保存顺序。判题比较稳定 ID，导出同时写显示字母和内容，不能只保存用户点了「B」。

source.citations 的 source_id 在本地来源登记表解析到文件、版本、hash；PDF 页号从 1 开始，printed_page 用字符串保留前言页码、罗马页码等。真题保留原年份、原题号和历史科目代码。用于前端和导出的引用不带本机绝对路径或整份原件。

### 4.2 Attempt：作答事实与关联标注

以下 TypeScript 是数据合同记法，尚未实现运行逻辑。整数计数非负；所有 timestamp 为 UTC ISO 8601（带Z）；timezone 单独保存为 IANA 名称。UUID 为随机设备本地生成的全局ID，导入时以ID去重。

```ts
type UUID = string;
type Timestamp = string;
type OptionId = 'A' | 'B' | 'C' | 'D';
type ErrorReason = 'CONCEPT' | 'FORMULA_PAIR' | 'CONDITION'
  | 'SIGN_COEFFICIENT' | 'METHOD_ENTRY' | 'STEP_ORDER'
  | 'CALCULATION' | 'READING_GRAPH' | 'GUESS';
type StudyMode = 'daily' | 'formula_pair' | 'error_focus' | 'chapter' | 'mistakes';

interface Attempt {
  schema_version: '1.0.0';
  id: UUID;
  session_id: UUID;
  question_id: string;
  question_revision: number;
  question_snapshot_id: string; // 引用不可变 QuestionSnapshot
  bank_version: string;
  family_id: string;
  mode: StudyMode;
  position: number;            // 本轮第几题，从1开始
  option_order: [OptionId, OptionId, OptionId, OptionId]; // 必须是无重复排列
  selected_option_id: OptionId;
  uncertain: boolean;
  started_at: Timestamp;
  submitted_at: Timestamp;
  active_duration_ms: number;  // 排除页面后台停留
  grading_mode: 'immediate' | 'end_of_session';
  grading: null | {
    graded_at: Timestamp;
    is_correct: boolean;
    correct_option_id: OptionId; // 与该revision快照一致
    machine_error_tag: string | null; // 从被选错项读取，不能代填自报错因
    grading_rule_version: string;
    schedule_policy_id: string;  // 引用当次实际使用的不可变调度配置
  };
}

interface ReasonAnnotation {
  id: UUID;
  attempt_id: UUID;
  recorded_at: Timestamp;
  state: 'selected' | 'skipped';
  reason: ErrorReason | null;  // selected必填；skipped必须null
}
```

提交即保存选择与不确定性，轮末判题时 grading 暂空。判题结果只填入一次，已提交选择不可再改；提交前的暂选放 Session。即时判题要在同一事务中保存答题结果、错题统计、进度，用户点错因是另一个可恢复步骤。ReasonAnnotation 追加保留修改历史；无标注表示待选或不适用，统计每次作答只计最新有效标注一次。

对「答错后是否允许跳过错因」PRD 未明确允许：默认按原要求点选后继续；结构保留 skipped 以支持未来确认的选择。退出页面或存储失败不能丢弃已提交答案，更不能自动把未选错因写成 GUESS。

### 4.3 Mistake：可由事实重建的错题视图

```ts
interface Mistake {
  schema_version: '1.0.0';
  question_id: string;          // 本地唯一键；不同revision不覆盖历史快照
  family_id: string;
  status: 'WEAK' | 'LEARNING' | 'MASTERED';
  first_collected_at: Timestamp;
  collection_reasons: Array<'WRONG' | 'UNCERTAIN'>;
  attempt_count: number;       // 全部已判分作答次数
  mistake_count: number;       // 实际答错次数
  uncertain_count: number;     // 所有标记不确定的已判分作答次数
  latest_attempt_id: UUID;      // 最近已判分作答
  last_wrong_attempt_id: UUID | null;
  last_uncertain_attempt_id: UUID | null;
  last_wrong_at: Timestamp | null;
  last_uncertain_at: Timestamp | null;
  last_attempt_at: Timestamp;
  error_reason_distribution: Record<ErrorReason, number>;
  unclassified_wrong_count: number;
  spaced_correct_streak: number;
  last_qualifying_review_at: Timestamp | null;
  next_due_at: Timestamp | null;
  mastered_at: Timestamp | null;
  schedule_rule_version: string;
  updated_at: Timestamp;
}
```

Mistake 不承担历史原件角色，可从 Attempt + ReasonAnnotation + 各次使用的 SchedulePolicy 重建。规则注册表保留历史算法版本与参数，不能只保留最新配置。错误次数仅计 is_correct=false；答对但不确定会入本，mistake_count 可以为 0，last_wrong_at 可以为 null。错因分布仅统计真正答错且由用户选过的九类错因，未填项单独计数；不确定性统计另存。必须满足 mistake_count = 九类错因计数之和 + unclassified_wrong_count。

聚合和阅读导出的 latest / last_wrong 均只在已判分作答中，按 submitted_at 排序（相同时间用 session_id、position、id打破平局）；轮末判题的 graded_at 不改变作答先后。未判分记录仍保存在 Attempt / Session，尚不触发错题状态；避免最新提交尚未判分时，强填一个正确性布尔值。

状态规则（已冻结）：

| 事件 | 结果 |
| --- | --- |
| 首次答错或答对但不确定 | 收纳为 WEAK；连续确定正确数清零 |
| 已收纳题答错 / 任何一次不确定 | WEAK；重置连续数，保留全部历史 |
| 后续首次正确且确定 | LEARNING；若间隔资格已满足，计为第1次 |
| 同轮、同日或未到期连续重做答对 | 可以巩固，不累加间隔正确次数 |
| 到期后正确且确定，连续达到3次 | MASTERED；包括进入LEARNING的第1次合资格正确 |
| MASTERED后再答错或不确定 | WEAK；开启新一轮巩固 |

进入 WEAK 后 1 天到期；合资格第 1 次正确后 3 天到期；第 2 次后 7 天到期；第 3 次合资格正确进入 MASTERED。以到期时间且距离上次计数至少 24 小时判定。过早答对不推迟已有 due，不计连续有效正确；答错或答对但不确定均重置连续数。保留策略版本号，使以后改变调度不悄悄改变过去事实。

### 4.4 Session、快照及设置

下面的 Question 指由 question.schema.json 对应生成的 TypeScript 类型，不维护另一份手写题目定义。

```ts
interface QuestionSnapshot {
  snapshot_id: string;
  question_id: string;
  revision: number;
  bank_version: string;
  content_hash: string; // canonical JSON的SHA256
  content: Question;
}

interface StudyFilters {
  chapters: number[];
  sections: string[];
  knowledge_point_ids: string[];
  subtypes: Array<Question['subtype']>;
  user_error_reasons: ErrorReason[];
  statuses: Array<Mistake['status']>;
  min_mistake_count: number | null;
  last_wrong_since: Timestamp | null;
  last_wrong_before: Timestamp | null;
}

interface Session {
  id: UUID;
  bank_version: string;
  mode: StudyMode;
  filters: StudyFilters;
  grading_mode: 'immediate' | 'end_of_session';
  queue: Array<{
    question_id: string;
    revision: number;
    question_snapshot_id: string;
    option_order: [OptionId, OptionId, OptionId, OptionId];
    attempt_id: UUID | null;
  }>;
  current_index: number; // 从0开始，completed时等于queue.length
  pending_selection: OptionId | null;
  pending_uncertain: boolean;
  pending_reason_attempt_ids: UUID[];
  started_at: Timestamp;
  completed_at: Timestamp | null;
}

interface Settings {
  current_chapter: number; // 初始5
  grading_mode: 'immediate' | 'end_of_session';
  timezone: string; // 初始Asia/Shanghai
  sampling_rule_version: string;
  schedule_rule_version: string;
  schedule_policy_id: string;
  review_intervals_days: number[];
  chapter_weights: Record<'1' | '2' | '3' | '4' | '5', number>;
  recent_window_days: number;
  family_cooldown_count: number;
}

interface SchedulePolicy {
  id: string;
  algorithm_version: 'simple-spaced-v1';
  review_intervals_days: [number, number, number]; // 已冻结[1,3,7]
  min_separation_ms: number; // 已冻结24小时
  required_correct_streak: number; // 初始3
  uncertain_resets_streak: boolean; // 初始true
}
```

筛选数组为空表示该维度不限制；维度内取并集、维度间取交集。Session 刷新后恢复原队列，不重新抽题，一次会话固定题库版本。统一判题会填入该轮所有待判 Attempt 的 grading 并更新相关 Mistake，然后按待反馈队列收集错因。

Session 建立时即保存整条队列所需 QuestionSnapshot，包括未答的题，以支持刷新和备份恢复；同一 id+revision 内容必须一致，导出必须带齐被引用的快照。修改题干、选项、答案或解析必须增 revision；错误答案更正不覆盖历史原判，必要时用独立勘误说明并安排重做。数据库 schema 版本、Question revision、bank_version、导出格式版本四者分开，不共用一个 version。Settings 的调度参数必须与它引用的 SchedulePolicy 一致；更改配置创建新的策略ID，不改旧策略，作答按当次判题时的策略存档。

### 4.5 导出合同

JSON 是完整、无损的逻辑数据格式；Markdown 是阅读格式；CSV 是一题一行统计格式。三者都包含 PRD 列出的最低信息。

```ts
interface AnswerView {
  attempt_id: UUID;
  question_revision: number;
  option_id: OptionId;
  displayed_label: OptionId;
  content: string;
  submitted_at: Timestamp;
  uncertain: boolean;
  is_correct: boolean;
}

interface ExportMistakeItem {
  question_id: string;
  question_revision: number; // 对应representative作答
  representative_attempt_id: UUID;
  user_answer_basis: 'last_wrong' | 'last_uncertain';
  chapter: number;
  section: string;
  blueprint_section: string;
  knowledge_point_id: string;
  knowledge_point: string;
  type: 'mcq';
  subtype: 'concept' | 'formula' | 'transform_pair' | 'error_discrimination';
  stem: string;
  options: Array<{ id: OptionId; content: string; error_tag: string | null }>;
  user_answer: AnswerView;
  correct_answer: { option_id: OptionId; displayed_label: OptionId; content: string };
  explanation: string;
  source: Question['source'];
  figures?: Question['figures'];
  mistake_count: number;
  uncertain_count: number;
  error_reason_distribution: Record<ErrorReason, number>;
  unclassified_wrong_count: number;
  status: 'WEAK' | 'LEARNING' | 'MASTERED';
  last_wrong_at: Timestamp | null;
  latest_attempt: AnswerView; // 最近已判分作答，可与代表错误的revision不同
}

interface SourceDescriptor {
  source_id: string;
  title: string;
  edition: string | null;
  file_sha256: string;
}

interface AssetDescriptor {
  asset_id: string;
  mime_type: 'image/svg+xml' | 'image/png';
  content_hash: string;
  width: number;
  height: number;
  source_ids: string[];
}

interface ExportBundle {
  export_schema_version: '1.0.0';
  export_id: UUID;
  exported_at: Timestamp;
  app_version: string;
  timezone: string;
  scope: {
    kind: 'mistakes_all' | 'mistakes_filtered' | 'full_backup';
    filters: StudyFilters;
    question_ids: string[];
  };
  bank_versions: string[];
  items: ExportMistakeItem[];
  question_snapshots: QuestionSnapshot[];
  attempts: Attempt[];
  reason_annotations: ReasonAnnotation[];
  schedule_policies: SchedulePolicy[]; // 包含全部作答和设置引用的策略
  mistakes: Mistake[];
  sessions: Session[];           // 全备份含恢复中的会话
  settings: Settings | null;     // 仅全备份需要
  source_descriptors: SourceDescriptor[]; // 不附原PDF或本机路径
  asset_descriptors: AssetDescriptor[];   // 无图时为空
}
```

选择性导出必须带齐选中题的作答、相关错因标注、使用的策略和依赖快照，不能包含未选题历史；sessions为空，不把包含其他题的完整轮次混入筛选导出。full_backup 保存所有历史及未完成会话的全队列快照，包括从未入错题本的题；完整 JSON 备份和恢复已冻结纳入阶段一。

代表答案规则：有答错历史时用最近一次答错；只有不确定记录时用最近一次不确定。题干、选项、正确答案、来源全部取该次快照，另列 latest_attempt，避免用户后来做对后，导出却把正确作答标为错误。导出中各快照和资源必须可解析；后续跨设备恢复若仍能取得对应发布题包，只需资产ID/hash；真正独立离线备份需要附带所需图资产的备份包，应与恢复功能一并定义。

Markdown 每题输出章节知识点、完整题干 / 选项、代表作答与正确内容、短解析、错误次数 / 不确定次数、用户错因分布及未分类错误次数、状态、最近错误时间和来源定位；保留 LaTeX，注明普通 Markdown 阅读器可能不渲染数学。只含不确定的条目明确显示「答对但不确定」。

CSV 使用 UTF-8 BOM、CRLF 和标准引号转义；至少列出以下列，九类分布拆为九个整数列，options 用 JSON 文本列保留完整内容：

```text
question_id,question_revision,chapter,section,blueprint_section,knowledge_point_id,
knowledge_point,type,subtype,stem,options_json,option_order_json,user_answer_basis,user_answer,
user_displayed_label,user_answer_content,correct_answer,correct_displayed_label,correct_answer_content,explanation,
mistake_count,uncertain_count,reason_CONCEPT,reason_FORMULA_PAIR,reason_CONDITION,
reason_SIGN_COEFFICIENT,reason_METHOD_ENTRY,reason_STEP_ORDER,reason_CALCULATION,
reason_READING_GRAPH,reason_GUESS,unclassified_wrong_count,status,last_wrong_at,source.type,source.reference
```

CSV 的 user_answer / correct_answer 保存稳定 OptionId，*_displayed_label 保存当次界面字母；option_order_json 保存代表作答的选项映射，options_json保留稳定ID。正文列在表格软件中可能被解释为公式，导出处理起始空白及 = / + / - / @ 等触发前缀；JSON 保留未改动原文用于无损交换，CSV 不作为备份恢复来源。PRD 的八列表头只是简表，不能据此丢失其随后列出的最低导出字段。

JSON / CSV 导入题库与导入用户备份是两种功能。题库 CSV 不是现有蓝图 CSV：采用每题一行，复杂字段 options / source / review 用明确 JSON 单元格，按同一 Question Schema 校验；不支持从蓝图计数直接「导入」出题。默认落 draft，题目审核另行处理。

## 5. 实施顺序与验收门槛

1. **冻结口径（已完成）**：方案 A、305 独立母题、间隔掌握、不确定重置、轮末模式及完整 JSON 备份恢复均已确认；CSV 为唯一机器配额真源。
2. **来源和工程基础**：建立来源登记与冲突索引、知识点ID、注册标签、正式Schema；初始化前端与忽略规则；先做蓝图自校验。来源索引按大纲 → 重点 → 教材 → 题源进行，缺来源只阻止相关条目审核。
3. **导入和校验先行**：建立 JSON / CSV 导入，结构校验、语义校验、逐小节配额报告、KaTeX渲染检查。开发预览允许题数不足但明确标识；正式发布检查必须恰好305且全部可追溯，不能通过宽松开发模式发布。
4. **少量样例闭环**：经单独确认后录入10–20道有真实来源且经过审核的样例，或在测试环境使用明确隔离的fixture。优先覆盖不同章节、四类内容、长公式和图题；本轮未生成样例。禁止用假来源的mock verified进入正式集合。
5. **答题与持久化**：首页、模式和题量、固定队列、大按钮、不确定开关、即时与轮末判题、短解析、错因；实现幂等保存与刷新恢复。
6. **错题与抽题**：状态转换、过滤、重做、统计；实现今日3/2/3/2、章节权重、母题去重及不足兜底，关键业务规则做单测。
7. **导出与功能验收**：Markdown / CSV / JSON，校对四选项、版本、日期、错误与不确定统计；端到端检验刷新、中断、重复点击、轮末判题、错题再错、iPhone/iPad布局及公式不溢出。
8. **用户明确确认后才批量建库**：先每章少量内容样本统一题干与解析风格，再逐章完成来源定位 → draft → reviewed → verified；每章核对配额与干扰项，不能生成后批量自动置 verified。
9. **正式305题验收**：仅发布清单内的305道母题当前版本；检查章节/小节/类型精确配额、唯一答案、引用证据、移动渲染和全功能；归档发布版本。阶段二不在本阶段排期内。

### Reviewed/Beta 题库通道

- Beta 构建只收录 `review.status = reviewed`，纯 `draft` 不可进入。正式 Release 默认只收录 `verified`；本次 Phase 1 学习版使用题库级项目所有者授权加载305道 `reviewed`，并保留每题真实的 `source.verification`。无该授权时守门逻辑仍拒绝 reviewed 进入 Release。
- `source.verification` 继续独立记录。题目通过内容审核后可进入 Beta，不因 source.type 或 machine error tag 的精细问题阻塞；这些问题仍可在最终 verified 核验前修订。
- 第3～5章进入 reviewed 的内容门槛为：正确答案正确；题干无实质歧义；无明显错误知识；无严重重复或低价值题。
- 当前 Beta 与正式学习版均为第1～5章305题（30/45/65/85/80）。正式 `release.json` 记录独立发布授权；题目仍保持 `reviewed`，未伪装为 `verified`。

抽题建议参数应配置化，以下为待确认默认值：近期=14天；薄弱知识点使用最近30次已判分作答统计，少于3次时仅按已收纳错题选取，不直接断言掌握程度。今日10题先按3/2/3/2桶去重选取，在桶内应用章节权重；候选重叠仅归入一次。短缺先补其他桶的合格题，再放宽「最近15题未出现」限制，仍坚持本轮母题唯一；不足目标题量时缩短本轮并说明可用数量，避免死循环和强凑重复。错题专项可放宽跨轮15题限制。当前章节和权重作为设置保存，不自动把恢复摘要中的历史进度覆盖进来。

## 6. 歧义与技术风险清单

| 定位 | 问题 | 建议处理 / 影响 |
| --- | --- | --- |
| PRD 4.5；CSV 33–34行 | 已采用方案 A | PRD 已同步为 5.7 概念1/易错1、5.8 概念1/公式1；CSV 不变 |
| PRD 4开头、13、14 | 已冻结为正式发布恰好305道独立母题 | 用family_id计数；阶段一正式发布不含额外变式 |
| PRD 16；private_sources | 划重点原件已补齐；个人作答证据仍缺失 | KEY_EXERCISE清单资格及教材定位已核对，答案/整题审核待做；不虚构PERSONAL_MISTAKE证据。增量差异见来源冲突报告 |
| PRD 1.1、6 | 官方范围、第三方预测、教材正文来源混用风险 | 依据用途分层；未知年度和未核实原卷不得宣称官方已验证 |
| PRD 6 | source.verification与review.status双状态 | 分别表示证据核验和整题审核；冲突来源阻断verified |
| PRD 6 | importance_811、syllabus、can_skip值域及含义不完整 | Schema给出草案，知识点登记表记录依据；can_skip只作为学习建议，不静默排除配额题 |
| PRD 6、10.2 | section含合并范围，parent_id可空且不等于题族 | 分离实际section / blueprint_section；family_id始终非空 |
| PRD 9 | 间隔、连续3次、不确定题状态缺定义 | 采用显式规则版本，确认前不视为冻结状态机 |
| PRD 8.2、8.3 | 轮末判题后的反馈、错因时机未写清 | 答完统一判分后逐题展示错题/不确定项并点错因；中途退出可恢复 |
| PRD 10 | 近期/薄弱指标、重叠桶、补题顺序、动态权重公式未定义 | 先确定性可测试规则，避免少量作答被过度解释为个人弱点 |
| PRD 9.2、12 | 历史永久保留与浏览器存储上限 | 应解释为应用不主动删除；本地数据会受清理、隐私模式、驱逐及设备丢失影响，不能承诺物理永久 |
| PRD 14多终端 | 可多设备打开不等于同步记录 | 第一阶段各设备独立；JSON备份/恢复或云同步必须另定范围 |
| PRD 11 | user_answer语义及CSV最小字段冲突 | 同时记录最近错误代表作答和最新作答；三个格式满足最低字段 |
| PRD 13 | 结构检验无法保证数学正确、唯一答案和干扰项质量 | 自动列风险提示，来源核对及内容复核负责结论；OCR只辅助转写 |
| PRD 5.4、14 | LaTeX语法正确仍可窄屏溢出 | 题干和选项实际渲染检查，分行排版；未知最低系统版本需明确支持矩阵 |
| PRD 5、14 | 5–20秒判断与10题3–5分钟口径 | 分开测量作答耗时和含解析/错因的总时长；不以速度替代严谨性 |
| PRD 17 | mock verified与正式来源审核冲突 | 测试数据物理隔离，不参与305题计数和生产发布 |
| private_sources解析PDF第2页 | 解析已标注原选项错误，扫描/合订页码不统一 | 保存冲突、原样引用与勘误依据；按每个来源精确定位，不批量照抄答案键 |

浏览器持久化的实际限制与本地数据驱逐机制见 [MDN Storage quotas and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)。因此「不主动删除历史」可实现，「永不丢失且自动跨设备」不能从现有 PRD 的本地存储要求推出。

设计确认与内容批量生产确认分开。确认技术方案不默认授权生成305题；后续必须显式进入批量建库步骤。
