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
| `.claude/agents/pm-orchestrator.md` | PM / Project Orchestrator |
| `.claude/agents/psychology-advisor.md` | Psychology Advisor |
| `.claude/agents/core-engineer.md` | Core Engineer |
| `.claude/agents/content-designer.md` | Content Designer |
| `.claude/agents/qa-tester.md` | QA Tester |
| `.claude/agents/research-analyst.md` | Research Analyst |
| `.claude/agents/frontend-engineer.md` | Frontend Engineer |
| `.claude/agents/community-lead.md` | Community Lead |

- Full role design: `dev-docs/team.md`
- Spawn teammates on demand via `Agent` tool with `team_name: "anti-pua"`

## Project Plan

- **Kanban**: `dev-docs/KANBAN.md` (progress tracking)
- **Plan Overview**: `dev-docs/planning/index.md` (Alpha scope, deliverables, timeline)
- Background & Theory: `dev-docs/planning/01-background-and-theory.md`
- Architecture: `dev-docs/planning/02-architecture.md`
- Anti-PUA Skill Design: `dev-docs/planning/03-anti-pua-skill.md`
- Rethink Skill Design: `dev-docs/planning/04-rethink-skill.md`
- NVC Skill Design: `dev-docs/planning/05-nvc-skill.md`
- Validation & Promotion: `dev-docs/planning/06-validation-and-promotion.md`
- Implementation & Roadmap: `dev-docs/planning/07-implementation-and-roadmap.md`

All agents should read `dev-docs/planning/index.md` for Alpha scope and priorities.
