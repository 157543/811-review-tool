# 华工 811 复习工具

当前工程已实现 Phase 1 功能闭环，并发布305道项目所有者授权的 reviewed 学习题。章节数量为30 / 45 / 65 / 85 / 80，题型数量为58 / 65 / 62 / 120。题目审核状态、来源核验状态与题库级发布授权分别保存，不伪造 `verified`。

现有功能包括今日 3/2/3/2 抽题、章节/题型/错因/掌握状态筛选、family 去重与安全降级、即时及轮末判题、错因记录、错题筛选和重做、固定会话恢复、Markdown/CSV/JSON 错题导出，以及完整 JSON 备份恢复。

## 环境与命令

- Node.js 22.18 或更高版本（校验脚本使用 Node 原生 TypeScript 类型剥离）
- pnpm（使用仓库内 `pnpm-lock.yaml`）

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm test:production-smoke
```

常用独立检查：

```bash
pnpm validate:schemas
pnpm validate:blueprint
pnpm validate:bank
pnpm validate:release
pnpm check:katex
pnpm build
```

`validate:release` 和 `bundle:bank` 要求恰好305道独立母题、完整题库级发布授权，并逐格匹配 `data/blueprint/811_phase1_305_blueprint.csv`。普通 Release 仍默认只接受 `verified`；当前 Phase 1 学习版通过显式授权接纳 `reviewed`，同时原样保留 `source.verification`。

题库 JSON / CSV 导入始终写入 `data/questions/draft/`，导入脚本会强制设置 `review.status=draft`。人工审核流程完成后才能由独立操作移入 `verified/`。

## 私有来源边界

`private_sources/`、`source_notes/`、所有 PDF 与内部测试 fixture 均被 `.gitignore` 排除。生产构建后还会扫描文件名、文本内容和 PDF 文件头；发现私有路径、资料名、fixture 标识或 PDF 会使构建失败。
