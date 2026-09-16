# Question Schema 说明

第一阶段正式契约位于 `schemas/`：Question、Attempt、Mistake、Session 与 Export 均使用 JSON Schema Draft 2020-12，版本为 `1.0.0`。本说明不包含题目，也不授权生成题库。

## 字段契约

除顶层 `figures` 可省略外，所有列出的字段均必填；可空字段必须显式写 `null`。

| 层级 | 字段 |
| --- | --- |
| 顶层 | `schema_version`, `id`, `revision`, `family_id`, `variant_role`, `chapter`, `section`, `blueprint_section`, `knowledge_point_id`, `knowledge_point`, `type`, `subtype`, `importance_811`, `syllabus`, `can_skip`, `notation_profile`, `stem`, `options`, `correct_option`, `explanation`, `source`, `review` |
| 每个 option | `id`, `content`, `error_tag`（可空） |
| figures（可选）中的每个 figure | `id`, `asset_id`, `alt`, `placement` |
| source | `type`, `reference`, `parent_id`（可空）, `parent_knowledge_point`（可空）, `citations`, `verification` |
| 每个 citation | `source_id`, `location_text`, `pdf_page`（可空）, `printed_page`（可空）, `section`（可空）, `item`（可空）, `year`（可空）, `original_exam_code`（可空） |
| review | `status`, `reviewer`（可空）, `reviewed_at`（可空）, `notes` |

`id` 表示稳定题目身份；`revision` 表示题目内容版本。后续 Attempt 和导出必须记录二者，并保留对应历史内容或不可变快照。`schema_version` 是数据格式版本，不能代替题目内容版本。

`family_id` 表示母题家族；`variant_role` 只允许 `base` 或 `variant`。第一阶段已冻结为正式发布恰好 305 道独立母题，不发布额外变式；发布校验要求 `variant_role=base`、`family_id=id` 且家族唯一。

`section` 是单一实际小节，如 `1.5`；`blueprint_section` 是 CSV 精确的 33 个配额桶，包括 `1.5-1.6` 和 `3.9-3.11`。跨知识点题仍需指定一个主归属，避免重复计数。`subtype` 使用 CSV 的四列英文名：`concept`、`formula`、`transform_pair`、`error_discrimination`。

选项 `A/B/C/D` 是稳定 ID，各出现一次；是否随机展示尚非 PRD 冻结决策。若启用随机化，界面的 A/B/C/D 显示标签不能反写为题目 ID；Attempt 保存 `option_order` 映射、稳定 `selected_option_id` 和题目版本。

`source.verification` 仅表示来源证据核验，允许 `unverified`、`verified`、`conflict`；`review.status` 表示整题审核，允许 `draft`、`reviewed`、`verified`。整题 `verified` 必须来源证据 `verified`、审核人和审核时间非空，但这些字符串本身不是实际审核已经完成的证明。

`source.citations` 通过 `source_id` 引用独立来源登记表。题目不得携带原始 PDF 本地绝对路径。原始文件路径和哈希应留在私有来源登记层；`location_text`、页码、小节、题号为可追溯定位。`pdf_page` 是从 1 开始的文件页序；`printed_page` 是纸面页码字符串，二者不能混用。

真题 citation 的 `year` 和 `original_exam_code` 保留原卷年份及原始科目代码，未知或不适用时为空，不能推测或统一改成 811。

可选 `figures` 支持波形图与框图，引用审核后的静态资产。每项 `placement` 为 `stem`、`explanation` 或稳定选项 ID `A/B/C/D`；`alt` 是非空图形文字说明。题目数据只接收 `asset_id`，不接收任意路径或 HTML。是否对图形及替代文字泄露答案需要内容复核。

数学文本统一使用 LaTeX，由 `notation_profile="oppenheim-2e-ct-dt-v1"` 标识约定版本。该常量不是公式已正确核验的声明。选项机器标签目前注册 PRD 第 571–578 行的八种；新增标签须先更新注册表、契约及映射。用户九类自报错因保留在 Attempt/Mistake 中，不能由机器标签自动填充成用户事实。

## Schema 已覆盖的结构校验

- 对象类型、必填字段、未知字段拒绝、非空文本、稳定 ID 字符范围。
- 仅四选一题型、四种 subtype、章节 1–5、33 个蓝图桶、正整数题目版本。
- 恰好四个选项，A/B/C/D 各一次，正确选项引用其一。
- 来源九类枚举、非空 citations、受控变式至少一个非空 parent。
- 正式审核状态依赖来源已核验、审核人非空和审核时间非空。
- 日期使用 `date-time` 格式；运行时校验器必须开启格式断言，不能只将 `format` 当注释。

## 业务校验与人工复核清单

JSON Schema 负责单条结构，脚本另行执行全库 ID、注册表、蓝图逐格配额、发布状态和 KaTeX 检查。以下仍有一部分必须在录题与审核阶段人工确认：

1. 题目 ID 全库唯一；同一 ID 的 revision 单调递增，历史版本不可静默覆盖。
2. `family_id` 母题取自身 ID；变式引用存在的母题家族；父题引用存在、无循环，parent 与知识点及来源关系一致。
3. 总数、章配额、四类配额及 CSV 33 行逐桶配额；按母题去重，禁止简单改数字凑母题。方案 A 已冻结，CSV 是唯一机器配额真源。
4. `chapter`、实际 `section`、`blueprint_section` 和知识点登记表彼此一致。
5. 正确选项的 `error_tag` 必须为 `null`；机器标签必须与干扰项错误机制相符。当前结构允许错误选项 `error_tag=null`，符合 PRD 第 617 行“若有标签”的条件。
6. 来源 ID 可解析，原始文件存在、哈希及版本匹配、页码在范围内、定位能够支持本题结论；自由文本不含原始 PDF 本地绝对路径。Schema 已禁止任意新增路径字段，但不宣称能从自由文本中识别所有路径。
7. 未解决来源冲突不得发布；审核人/时间是真实审查记录，题目状态升级需实际依据。测试 fixture 不得混入正式发布包或冒充已核验内容。
8. 数学答案恰好一个；四个选项无等价重复；题干条件完整、公式与符号约定正确；公式可渲染且移动端不溢出。图形 ID 在题内唯一，资产引用有效、已经审核，替代文字完整且不泄露答案。
9. 干扰项有依据，题干可快速识别，长度或格式不泄露答案。自动规则仅能提示，不等同内容审核。
10. 正式打包默认只包含 `review.status=verified`。Phase 1 学习版允许题库级显式授权的305道 `reviewed` 进入 release，授权元数据与每题来源核验状态分开保存；私有来源文件不得随前端发布。

## 仍需在内容审核中细化的字段语义

- `importance_811` 暂拟整数 1–5，PRD 只给出示例值 5，未明确定义量表；不得自行据此改变考试权重。
- `syllabus` 已冻结结构值域为 `explicit`、`derived`、`boundary`，但每个知识点落在哪一类仍要有来源依据。
- `can_skip` 与低频标记、用户抽题过滤之间的行为尚未定义，不能把它解释为允许跳过 305 题配额。
- 真实审核主体以及教材/真题证据定位颗粒度仍需在内容录入前落实。
