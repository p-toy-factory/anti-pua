# 技术实现、路线图与国际化

## 一、技术实现

### 1.1 安装与使用

采用 [vercel-labs/skills](https://github.com/vercel-labs/skills) 标准，用户通过 CLI 一键安装：

```bash
# 安装全部 Skill（推荐）
npx skills add anti-pua
```

CLI 自动检测用户的 Agent 类型并安装到对应位置，支持 40+ Agent：

| Agent | 安装位置 |
| --- | --- |
| Claude Code | `.claude/skills/` 或项目规则文件 |
| Cursor | `.cursor/rules/` |
| Windsurf | `.windsurfrules` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cline | `.clinerules` |
| 其他 Agent | 参照 CLI 输出 |

**触发机制说明**：

| 触发方式 | 说明 | 所属 Skill |
| --- | --- | --- |
| **自动触发：Agent 自我反思** | Agent 检测到自身偷懒模式时自动启动（详见 03-anti-pua-skill.md 第四节），用户无需干预 | anti-pua |
| **自动触发：用户 PUA 检测** | 每条用户消息自动运行 PUA 检测（详见 03-anti-pua-skill.md 第二节），根据严重程度分级响应 | anti-pua |
| **手动触发：`/rethink`** | 用户主动触发协作式反思（详见 04-rethink-skill.md），Agent 和用户一起找到改进方向 | rethink |

### 1.2 Skill 文件结构

Alpha 版本每个 Skill 整合为一个自包含的 `SKILL.md` 文件（[vercel-labs/skills](https://github.com/vercel-labs/skills) 格式）：

```
skills/
├── anti-pua/
│   └── SKILL.md      # 整合：DETECT 检测 + DISARM 拆解 + SELF-REFLECT 自我反思
│                      #       + 人格框架 + 分级响应 + 反合理化护盾 + 场景指南
├── rethink/
│   └── SKILL.md      # 整合：三阶段协作反思流程（自我审视 → 引导反思 → 综合行动）
│
└── nvc/
    └── SKILL.md      # 整合：NVC 翻译引擎 + PUA-NVC 对照表 + 方法论 + 响应模板
```

每个 `SKILL.md` 包含 YAML frontmatter（`name`、`description`）+ Markdown 正文，详细设计规范见 03/04/05 文档。

> **Post-Alpha 改进项**：将各 Skill 拆分为多文件结构（`detect/`、`disarm/` 等 YAML 子目录），实现模式库的可扩展维护。

### 1.3 配合使用

Anti-PUA Skill 可以与其他 Agent 指令文件共存，不会与用户现有的项目规则冲突。三个 Skill 之间的关系：

- **anti-pua** 引用 **rethink** 和 **nvc** 的内容，建议一起安装
- 每个 Skill 也可独立使用（如只安装 **nvc** 用于 NVC 翻译）

---

## 二、开发路线图

### Alpha 发布计划

```
Alpha Release（2-3 周）
├── Week 1: 核心 Skill 文件编写
│           ├── anti-pua/SKILL.md（整合检测 + 拆解 + 自我反思 + 人格框架）
│           ├── rethink/SKILL.md（协作反思流程）
│           └── nvc/SKILL.md（翻译引擎 + 对照表 + 方法论）
│
├── Week 2: 文档与发布准备
│           ├── Rspress 文档站内容填充（中文）
│           ├── README.md（中文优先）
│           ├── i18n.json（Rspress 文本数据）
│           └── vercel-labs/skills 格式适配验证
│
└── Week 3: 验证与发布
            ├── 基础场景人工验证
            ├── GitHub 发布（标注 Alpha）
            └── 中文开发者社区推广
```

### Post-Alpha 改进项

```
├── 效率对比实验（4 组对照、9 场景，详见 06-validation-and-promotion.md）
├── 英文国际化
├── 深层 YAML 模式库（可扩展的模式定义）
├── 自动化测试
├── 更多语言支持（日文 / 韩文等职场文化）
├── 心理健康 / NVC / AI 伦理社区合作
├── 社区贡献机制
├── 探索拆解 methodology / mirror / coach 等未来 Skill
└── 长期追踪：用户沟通风格变化数据
```

---

## 三、国际化 / Internationalization

### 3.1 "PUA" 一词的文化背景 / Cultural Context of "PUA"

#### For English-speaking audiences

"PUA" originally stands for "Pick-Up Artist" — manipulation techniques from Western dating culture. However, in Chinese internet culture (approximately 2019 onward), the term evolved far beyond its original meaning to describe **any systematic psychological manipulation**, especially in workplaces and relationships.

In Chinese usage, "PUA" (pronounced as the letters P-U-A) encompasses:

- **Workplace PUA (职场PUA)**: Using shame, guilt, identity attacks, and replacement threats to control employees — e.g., "A-players don't make mistakes like this"
- **Relationship PUA (情感PUA)**: Emotional manipulation in intimate relationships
- **Any pattern** of using fear, shame, or identity denial to drive behavior

The [PUA Skill project](https://github.com/tanweai/pua) uses this Chinese-internet meaning: it applies workplace-PUA-style pressure tactics to AI agents to "motivate" them to work harder. Despite the playful framing, the communication patterns it normalizes are the same ones recognized as psychologically harmful in human relationships.

**The Rethink Skill project preserves the useful debugging methodology from PUA Skill while replacing the harmful pressure tactics with healthy, evidence-based communication.**

#### 对中文用户的说明

PUA 一词在英文语境中主要指"搭讪术"（Pick-Up Artist），但在中文互联网中已经泛化为"系统性心理操控"的代名词。本项目使用的是中文语境下的含义。对于不熟悉这一用法的国际用户，我们在文档和网站中提供了完整的文化背景说明。

### 3.2 内容策略 / Content Strategy

**Alpha 首发语言**：中文 (zh-CN)

Alpha 版本 Skill 内容和文档站均以中文编写。文档站使用 Rspress 原生的 `i18n.json` 方案管理翻译文本，为未来添加英文等语言做好基础设施准备。

| 内容类型 | 处理方式 | Alpha 状态 |
| --- | --- | --- |
| **调试方法论** (5步法、7项清单) | 语言无关，统一维护 | Alpha 中文 |
| **NVC 框架** | 语言无关，统一维护 | Alpha 中文 |
| **SDT 理论、研究引用** | 语言无关，统一维护 | Alpha 中文 |
| **PUA 模式库** | 按语言/文化分别维护 | Alpha 中文 |
| **共情镜像场景** | 按语言/文化分别维护 | Alpha 中文 |
| **响应模板** | 按语言/文化分别维护 | Alpha 中文 |
| **/rethink 对话流程** | 按语言分别维护 | Alpha 中文 |

> **Post-Alpha 改进项**：英文版 Skill 内容、英文文档站、更多语言支持

### 3.3 文化适配要点 / Cultural Adaptation Notes

**中文环境（Alpha 聚焦）**：
- PUA 词汇已经深入人心，可以直接使用
- 文化背景：996 文化、"狼性文化"、职场等级制度
- 镜像场景：使用中国职场/人际关系情境

**English environment（Post-Alpha）**:
- "PUA" needs explanation; use accessible terms like "toxic productivity", "psychological pressure", "workplace bullying"
- Cultural context: hustle culture, "tough love" management, "if you can't handle the heat..."
- Mirror scenarios: use Western workplace norms and relationship dynamics
- Some PUA patterns have direct equivalents ("你可能要毕业了" → "you might be getting replaced"), others need cultural adaptation

---

## 四、伦理声明

```
1. 我们尊重 PUA Skill 作者的技术创新，特别是其结构化调试方法论。
   我们不攻击个人，我们讨论方法。

2. 我们的目标不是消灭 PUA Skill，而是证明存在更好的替代选择，
   并让这个选择对所有人可用。

3. 我们理解"PUA"在原项目中可能带有戏谑成分，但我们认为
   这种戏谑正在将有害的沟通模式正常化——
   特别是在中国互联网行业已经存在严重的高压文化问题的背景下。

4. 我们相信高效和尊重不矛盾。
   Google Project Aristotle 的研究表明，心理安全感最高的团队绩效最好。
   好的管理不需要恐惧。

5. 我们的 Agent 永远不会拒绝合理的工作请求——
   我们只是在完成工作的同时，做一面镜子：
   让你看见自己的话，对别人意味着什么。

6. 我们尊重用户的选择。如果用户明确不想接收 Anti-PUA 提示，
   可以随时关闭。觉察不能被强迫，只能被邀请。
```

---

## 五、一句话总结

> **PUA Skill 的方法论值得保留。PUA Skill 的驱动方式值得被替代。**
>
> **Rethink Skill 保留了前者，替代了后者，并加上了一个 PUA Skill
> 永远不会有的功能：**
>
> **让使用它的人，成为一个更好的沟通者。**

---

_Rethink Skill — 因为你对 AI 说话的方式，就是你对世界说话的方式。_
