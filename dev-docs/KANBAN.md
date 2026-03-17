# Anti-PUA 工作看板

> 最后更新：2026-03-17

## Alpha 发布进度

### Week 1：核心 Skill 文件

| 工作项                     | 状态 | 备注                                                            |
| -------------------------- | ---- | --------------------------------------------------------------- |
| `skills/anti-pua/SKILL.md` | Done | DETECT（7 类 + 企业风味 + L1-L4）+ DISARM + SELF-REFLECT + 人格框架 + 分级响应 + 场景指南 + 反合理化护盾 |
| `skills/rethink/SKILL.md`  | Done | 三阶段协作反思流程 + 扩展命令                                   |
| `skills/nvc/SKILL.md`      | Done | NVC 翻译引擎 + PUA-NVC 对照表 + 调试方法论 + 方法论提取器 + 响应模板 |

### Week 2：文档与发布准备

| 工作项              | 状态        | 备注                                                  |
| ------------------- | ----------- | ----------------------------------------------------- |
| Rspress 文档站框架  | Done        | `rspress.config.ts` + 页面结构 + 导航                 |
| 文档 - 首页         | Done        | `docs/index.md` Hero 页 + 特性卡片                    |
| 文档 - 快速开始     | Done        | `docs/guide/index.md`                                 |
| 文档 - 使用场景     | Done        | `docs/guide/usage.md` 4 个场景演练                    |
| 文档 - 理论基础     | Done        | `docs/theory/index.md` + `nvc.md`                     |
| 文档 - PUA 模式详解 | Done        | `docs/theory/pua-patterns.md` 7 类 + 隐性 PUA + 企业风味 + 分级升级 |
| 文档 - Skill 介绍页 | Done        | `docs/skills/anti-pua.md` / `rethink.md` / `nvc.md`   |
| `README.md`         | Done        | 中文，含安装说明 + 开发指南                           |

### Week 3：验证与发布

| 工作项                          | 状态 | 备注                             |
| ------------------------------- | ---- | -------------------------------- |
| vercel-labs/skills 格式适配验证 | Todo | 确认 `npx skills add` 流程可用   |
| 基础场景人工验证                | Todo | 6 个核心场景手动测试（含企业风味、L1-L4、方法论提取等） |
| GitHub Alpha Release            | Todo | 打 Alpha tag，撰写 Release Notes |
| 中文开发者社区推广              | Todo |                                  |

---

## Post-Alpha 改进项

| 工作项                                       | 状态    | 分类 |
| -------------------------------------------- | ------- | ---- |
| 效率对比实验（4 组对照、9 场景）             | Backlog | 验证 |
| 英文国际化（Skill + 文档站）                 | Backlog | i18n |
| 深层 YAML 模式库                             | Backlog | 架构 |
| 自动化测试                                   | Backlog | 质量 |
| 更多语言支持（日文 / 韩文）                  | Backlog | i18n |
| 心理健康 / NVC / AI 伦理社区合作             | Backlog | 社区 |
| 社区贡献机制                                 | Backlog | 社区 |
| 探索 methodology / mirror / coach 等新 Skill | Backlog | 功能 |
| 长期追踪：用户沟通风格变化数据               | Backlog | 数据 |
