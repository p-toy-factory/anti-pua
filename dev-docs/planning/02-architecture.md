# 跨 Agent 通用 Skill 架构

## 一、架构总览图

```
┌──────────────────────────────────────────────────────────────────┐
│                     anti-pua 仓库架构                             │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │              anti-pua（主 Skill，被动触发）                  │  │
│  │                                                            │  │
│  │   DETECT ─→ DISARM ─→ REPLACE                             │  │
│  │   PUA 检测    拆解      健康沟通替代                         │  │
│  │                                                            │  │
│  │   SELF-REFLECT（Agent 自我反思，自动触发）                   │  │
│  │   人格框架 / 分级响应 / 反合理化护盾                         │  │
│  │                                                            │  │
│  │         ┌──────────┐        ┌──────────┐                   │  │
│  │         │ 引用     │        │ 引用     │                   │  │
│  │         ▼          │        ▼          │                   │  │
│  │   ┌──────────┐     │  ┌──────────┐    │                   │  │
│  │   │ rethink  │     │  │   nvc    │    │                   │  │
│  │   │ Skill    │     │  │  Skill   │    │                   │  │
│  │   └──────────┘     │  └──────────┘    │                   │  │
│  └────────────────────┴──────────────────┴────────────────────┘  │
│                                                                  │
│  交付格式：vercel-labs/skills（SKILL.md）                         │
│  安装方式：npx skills add anti-pua                                │
│  支持 Agent：Claude Code / Cursor / Windsurf / Cline / 40+       │
│                                                                  │
│  共享理论基础：NVC / SDT（dev-docs/theory/）                      │
└──────────────────────────────────────────────────────────────────┘
```

## 二、Skill 关系与职责划分

每个 Skill 是一个独立的 `SKILL.md` 文件（[vercel-labs/skills](https://github.com/vercel-labs/skills) 格式），包含 YAML frontmatter + Markdown 正文。用户通过 `npx skills add` 安装，CLI 自动检测用户的 Agent 类型并安装到对应位置。

| Skill | 触发方式 | 核心职责 | 依赖 |
| --- | --- | --- | --- |
| **anti-pua** | 被动（always-on，每条消息自动检测） | PUA 检测 → 拆解 → 替代沟通；Agent 自我反思；人格框架；分级响应 | 引用 `rethink`、`nvc` |
| **rethink** | 主动（用户调用 `/rethink`） | 协作式反思：Agent 自我审视 → 引导用户反思 → 综合行动计划 | 无 |
| **nvc** | 被 anti-pua 引用 / 未来可独立调用 | NVC 翻译引擎；PUA-NVC 对照表；重构版调试方法论；NVC 响应模板 | 无 |

## 三、仓库文件结构

Alpha 版本采用扁平化结构，每个 Skill 整合为一个自包含的 `SKILL.md` 文件。

```
anti-pua/
├── skills/                          # Skill 文件（vercel-labs/skills 格式）
│   ├── anti-pua/
│   │   └── SKILL.md                 # 主 Skill（被动触发）
│   ├── rethink/
│   │   └── SKILL.md                 # 协作反思 Skill
│   └── nvc/
│       └── SKILL.md                 # NVC 引擎 Skill
│
├── docs/                            # Rspress 文档站（已就位）
│   ├── index.md
│   ├── guide/
│   └── public/
│
├── i18n.json                        # Rspress i18n 文本数据
│
├── dev-docs/                        # 开发文档（不对外发布）
│   ├── planning/                    # 企划书（本目录）
│   └── theory/                      # 共享理论基础
│       ├── nvc-foundation.md        # NVC 四要素
│       └── sdt-framework.md         # 自我决定理论
│
├── package.json
├── rspress.config.ts
└── biome.json
```

> **Post-Alpha 改进项**：深层 YAML 模式库（`detect/`、`disarm/` 等子目录）、`evidence/` 研究数据、`tests/` 自动化测试、英文国际化内容

## 四、目标用户

| 用户类型               | 场景                            | 我们提供的价值                                             |
| ---------------------- | ------------------------------- | ---------------------------------------------------------- |
| **PUA Skill 的使用者** | 习惯性使用高压话术驱动 AI       | 温和地镜像他们的沟通模式，提供同样有效但不伤害人的替代方式 |
| **跨 Agent 用户**      | 使用 Claude Code / Cursor / Windsurf 等各类 Agent | 通过 `npx skills add` 一键安装，无需手动配置 |
| **职场中被 PUA 的人**  | 向 Agent 描述自己的遭遇         | 帮助识别 PUA 模式，提供应对策略和心理资源                  |
| **团队管理者**         | 想提高效率但不想用高压手段      | 提供基于 NVC 的高效沟通模板                                |
| **AI Agent 开发者**    | 构建不接受也不传播 PUA 的 Agent | 集成 Anti-PUA 人格框架                                     |
| **任何正在沟通中的人** | 日常对话                        | 作为"沟通方式的镜子"，帮助觉察无意识的操控模式             |

## 五、Alpha vs 完整版范围

| 特性 | Alpha 版本 | 完整版（Post-Alpha） |
| --- | --- | --- |
| Skill 格式 | 单文件 `SKILL.md`（vercel-labs/skills） | 可扩展的多文件 YAML 模式库 |
| 安装方式 | `npx skills add` | 同上 |
| 语言 | 中文 | 中文 + 英文 + 更多语言 |
| 验证 | 人工场景验证 | 4 组对照实验、自动化测试 |
| 文档站 | Rspress 中文站 | 双语站 + 演示视频 |
| 理论基础 | dev-docs 内部参考 | 对外发布的研究数据 |
| 社区合作 | GitHub + 中文开发者社区 | 心理健康 / NVC / AI 伦理社区 |
