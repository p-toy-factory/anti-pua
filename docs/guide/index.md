# 快速开始

Anti-PUA Skill 用健康的沟通方式替代 PUA 话术，让 AI
成为沟通方式的镜子，而非恐惧的容器。

## 30 秒安装

使用 [vercel-labs/skills](https://github.com/vercel-labs/skills)
标准安装，自动适配你当前使用的 Agent：

```bash
npx skills add p-toy-factory/anti-pua
```

支持 Claude Code、Cursor、Windsurf、Cline 等 40+ Agent，无需手动配置。

## 三个核心 Skill

### anti-pua（自动触发）

- **PUA 检测**：自动识别 7 类 PUA 模式（身份攻击、替代威胁、内疚操控等）
- **拆解响应**：基于 NVC 四要素，翻译用户的真实需求，提供健康替代话术
- **Agent 自我反思**：检测到偷懒模式时，Agent 主动审视方法，而非等待羞辱

### rethink（手动 `/rethink`）

协作式反思工具：

1. Agent 自我审视当前工作质量
2. 引导用户反思沟通方式和真实需求
3. 综合双方反思，制定行动计划

### nvc（被 anti-pua 引用）

- NVC 翻译引擎：将攻击性表达翻译为观察 + 感受 + 需要 + 请求
- PUA-NVC 对照表：展示同样有效但更健康的沟通方式
- 去 PUA 版调试方法论：保留结构化调试清单，去掉羞辱话术
