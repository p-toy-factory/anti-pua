# Anti-PUA 多 Skill 架构企划书

### _让 AI 成为沟通方式的镜子，而非恐惧的容器_

> **好的结果不需要坏的方式。**

---

## Alpha 版本策略

当前项目优先发布 **Alpha 版本**，提供可用的核心 Skill 并快速上线。

- **交付格式**：采用 [vercel-labs/skills](https://github.com/vercel-labs/skills) 标准，每个 Skill 是一个 `SKILL.md` 文件，用户通过 `npx skills add` 安装，自动适配 Claude Code、Cursor、Windsurf 等 40+ Agent
- **语言**：Alpha 版本面向中国大陆用户，优先提供中文内容，英文国际化作为改进项
- **验证**：效率对比实验推迟至 Post-Alpha，Alpha 阶段以人工验证为主
- **声明**：当前 Alpha 版本大多数内容由 AI 生成，欢迎社区有兴趣的成员参与项目的建设

### Alpha 范围 vs 改进项

| 内容 | Alpha | 改进项（Post-Alpha） |
| --- | :---: | :---: |
| 3 个核心 Skill（anti-pua / rethink / nvc） | Yes | - |
| vercel-labs/skills 格式 + `npx skills add` 安装 | Yes | - |
| Rspress 文档站（中文） | Yes | - |
| 基础场景人工验证 | Yes | - |
| 英文国际化 | - | Yes |
| 效率对比实验（4 组对照、9 场景） | - | Yes |
| 深层 YAML 模式库（可扩展的模式定义） | - | Yes |
| 自动化测试 | - | Yes |
| 心理健康 / NVC / AI 伦理社区合作 | - | Yes |

---

## 目录

| 文件 | 内容 |
| --- | --- |
| [01-background-and-theory.md](./01-background-and-theory.md) | 项目背景与动机、NVC 与 SDT 理论基础 |
| [02-architecture.md](./02-architecture.md) | 跨 Agent 通用 Skill 架构、Skill 关系与职责、文件结构、目标用户 |
| [03-anti-pua-skill.md](./03-anti-pua-skill.md) | 主 Skill 详细设计：DETECT 检测引擎、DISARM 拆解引擎、SELF-REFLECT 自我反思、人格框架、分级响应、反合理化护盾、场景化沟通指南 |
| [04-rethink-skill.md](./04-rethink-skill.md) | `/rethink` 协作式反思 Skill：三阶段流程、使用示例、扩展命令、潜在未来 Skill |
| [05-nvc-skill.md](./05-nvc-skill.md) | NVC 引擎 Skill：翻译引擎、PUA-NVC 对照表、去 PUA 版调试方法论、NVC 响应模板 |
| [06-validation-and-promotion.md](./06-validation-and-promotion.md) | 推广策略、品牌文案、社区策略（效率对比实验推迟至 Post-Alpha） |
| [07-implementation-and-roadmap.md](./07-implementation-and-roadmap.md) | 技术实现、Alpha 发布路线图、国际化策略、伦理声明 |
