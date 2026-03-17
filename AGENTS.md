# Anti-PUA Skill

Educational documentation site + AI agent skill definitions that replace PUA (Pick-Up Artist-style manipulation) communication patterns with healthy alternatives based on NVC (Nonviolent Communication) and Self-Determination Theory.

- **Live site**: https://anti-pua.vercel.app/
- **Status**: Alpha (most content is AI-generated; community contributions welcome)
- **Content language**: Chinese (中文)
- **License**: MIT

## Setup

```sh
pnpm install        # Install dependencies
pnpm run dev        # Start Rspress dev server at http://localhost:3000/
pnpm run build      # Production build (output: doc_build/)
pnpm run preview    # Preview production build locally
```

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Rspress v2 (static site generator, React-based) |
| Language | TypeScript + React 19 |
| Styling | Tailwind CSS v4 (PostCSS plugin) |
| Linter / Formatter | Biome |
| Package manager | pnpm |
| Deployment | Vercel (automatic from `main` branch) |

## Directory Structure

```
anti-pua/
├── docs/                    # Rspress page sources (Chinese content)
│   ├── index.md             # Landing page
│   ├── guide/               # User-facing guides
│   ├── skills/              # Skill introduction pages
│   └── theory/              # Theory docs (PUA patterns, NVC, etc.)
├── skills/                  # Skill definition files (vercel-labs/skills format)
│   ├── anti-pua/SKILL.md    # Core skill: PUA detection + healthy responses
│   ├── nvc/SKILL.md         # NVC translation engine
│   └── rethink/SKILL.md     # Collaborative reflection (/rethink command)
├── theme/                   # Rspress custom theme overrides
│   ├── index.tsx            # Layout wrapper
│   └── components/
│       └── HomeContent.tsx  # Landing page custom sections
├── dev-docs/                # Internal development docs (not published)
│   ├── KANBAN.md            # Progress tracking
│   ├── team.md              # Team role design
│   └── planning/            # Project planning docs (7 files)
├── rspress.config.ts        # Rspress configuration
├── biome.json               # Biome linter/formatter configuration
├── tailwind.css             # Tailwind entry point
├── postcss.config.mjs       # PostCSS config
└── tsconfig.json            # TypeScript configuration
```

## Code Style

- **Quotes**: Single quotes (enforced by Biome)
- **Indentation**: Spaces (enforced by Biome)
- **Imports**: Auto-organized by Biome
- **Bindings**: Prefer `const` over `let`; no `var`
- **Components**: Functional components only; Tailwind utility classes in JSX
- **File naming**: kebab-case for docs/config, PascalCase for React components
- **Markdown**: Site content in Chinese; SKILL.md files follow the [vercel-labs/skills](https://github.com/vercel-labs/skills) format

## Git

- Use [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages (e.g., `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `ci:`)

## Tools

### Biome

- Run `pnpm run check` to lint and auto-fix your code
- Run `pnpm run format` to format your code

### Chrome DevTools MCP

- If Chrome DevTools MCP is available in the current environment, use it to open http://localhost:3000/ to self-verify newly developed content
- If the opened page has no content, ask the user whether the dev server is running before proceeding

## Content Sync Rules

- Every time `skills/` or `docs/theory/` content is updated, check whether `theme/components/HomeContent.tsx` and `docs/index.md` need corresponding updates
- The landing page is the user's first impression -- key changes in skills and theory docs must be reflected there

## Team

> This section uses Claude Code-specific features (Agent tool, team spawning). Other AI coding agents can ignore it.

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

## Maintenance

When code changes cause descriptions in this file (commands, directory structure,
conventions, etc.) to become inaccurate, update AGENTS.md to stay consistent.
