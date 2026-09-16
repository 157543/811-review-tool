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

GitHub Pages 通过 VITE_BASE_PATH=/811-review-tool/ 构建；部署工作流生成 404.html，深路径刷新会回到应用入口并由 IndexedDB 恢复未完成会话。

## 离线使用

生产站点是可安装的 PWA。首次联网打开后，等待首页出现“已可离线使用”，浏览器就已缓存应用、公式字体和完整 305 题题库。之后即使断网，也可以从浏览器、桌面图标或手机主屏幕打开，继续刷题、查看错题和恢复未完成会话；答题记录仍保存在本机 IndexedDB。

- iPhone / iPad：Safari 中点“共享”→“添加到主屏幕”。
- Android / Chrome：浏览器菜单中选择“安装应用”或“添加到主屏幕”。
- 桌面 Chrome / Edge：地址栏右侧选择“安装”。

清除该站点的浏览数据会同时删除离线缓存和本地学习记录。需要迁移或重装前，请先在首页导出完整 JSON 备份。
