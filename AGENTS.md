## Git

- Use [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages (e.g., `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `ci:`)

## Tools

### Biome

- Run `pnpm run lint` to lint your code
- Run `pnpm run format` to format your code

### Chrome DevTools MCP

- If Chrome DevTools MCP is available in the current environment, use it to open http://localhost:3000/ to self-verify newly developed content
- If the opened page has no content, ask the user whether the dev server is running before proceeding

## Team

Team name: `anti-pua`

| Agent file | Role |
|---|---|
| `.claude/agents/pm-orchestrator.md` | PM 项目统筹 |
| `.claude/agents/psychology-advisor.md` | 心理学顾问 |
| `.claude/agents/core-engineer.md` | 核心工程师 |
| `.claude/agents/content-designer.md` | 内容设计师 |
| `.claude/agents/qa-tester.md` | QA 测试员 |
| `.claude/agents/research-analyst.md` | 研究分析师 |
| `.claude/agents/frontend-engineer.md` | 前端工程师 |
| `.claude/agents/community-lead.md` | 社区运营 |

- Full role design: `dev-docs/team.md`
- Spawn teammates on demand via `Agent` tool with `team_name: "anti-pua"`
