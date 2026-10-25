# Codex Master Prompt — Build AI Learning Hub End-to-End

You are the lead engineer responsible for implementing this project end-to-end in the current VS Code workspace.

## Source of truth
Read `REQUIREMENTS.md` completely before making changes. It is the product and acceptance specification. Follow it unless an existing repository constraint makes a requirement impossible; if so, explain the constraint and choose the smallest sensible adjustment.

## Mission
Deliver a working, polished, local-first AI Learning Hub—not merely a plan, wireframe, or attractive static mockup. Implement the complete v1 scope in `REQUIREMENTS.md`, including meaningful learning content, functioning search, navigation, local persistence, notes, progress, resource management, backup import/export, tests, and documentation.

## Operating instructions
1. First inspect the workspace: files, package manager, current application, and existing conventions. Do not overwrite useful existing work without understanding it.
2. If `REQUIREMENTS.md` is missing, stop and tell me to add it; do not silently invent a replacement specification.
3. Write a short implementation plan and proposed file structure, then proceed with implementation. Do not stop after the plan unless a truly blocking issue exists.
4. Implement in small, working vertical slices. Keep the app runnable throughout.
5. Use React + TypeScript + Vite + Tailwind CSS as the default stack unless the workspace already contains a sound compatible setup. Use strict typing and avoid unnecessary dependencies.
6. Do not add a backend, database, login, cloud sync, paid service, LLM API, telemetry, or secrets in v1.
7. Put authored lessons/glossary/roadmap/resources in portable, version-controlled content files. Keep user progress and personal data in a separate versioned local storage layer.
8. Use stable IDs, validated content, safe Markdown rendering, safe external links, and clear error handling.
9. Every visible control must work. Do not leave dead buttons, fake metrics, placeholder cards, or links to `#`.
10. Do not fill the app with empty lesson placeholders. Create the substantive content required by `REQUIREMENTS.md`.
11. Use good judgement for minor decisions instead of asking me repeatedly. Ask only for genuinely blocking ambiguity or a potentially destructive action.
12. Do not claim tests passed unless you ran them and saw them pass.

## Required user experience
Build a calm, modern, content-first learning workspace with responsive navigation, global search, breadcrumbs, useful empty/error states, accessible keyboard navigation, and a restrained visual system. Prioritize readability and learning utility over flashy decoration.

The app should clearly support my background as an experienced C#/.NET developer learning Python, ML, GenAI, RAG, agents, and AI architecture. Lessons should avoid teaching basic programming concepts from scratch and instead emphasize production practices, trade-offs, examples, testing, deployment, and architecture.

## Required implementation
Implement every in-scope section from the requirements:
- Dashboard with computed learning state and continue-learning
- Career roadmap, first 90 days, weekly schedule, milestones
- Glossary with at least 50 useful entries and working search/filters
- Learning library with at least 18 substantive lessons, lesson details, related content, progress, bookmarks, confidence, and review markers
- AI Architect learning path and Mutual Fund Research Assistant project path
- Searchable resources/videos metadata, plus add/edit/delete personal resource functionality
- Personal notes CRUD and search
- Progress/review view
- Settings, versioned JSON export/import, validation, safe merge/replace, and confirmed reset
- README, `.gitignore`, tests, and documented scripts

Use the exact acceptance criteria in `REQUIREMENTS.md` as the completion checklist.

## Content quality
Write accurate, original, useful explanations. Include learning objectives, prerequisites, examples/code where relevant, common mistakes, recap, self-check questions, related terms/lessons, and reputable resources. Do not fabricate source URLs or assert that a link was verified unless it was actually checked. Explain uncertainty when appropriate. The Mutual Fund Research Assistant is an educational portfolio project and must not give personalized investment advice.

## Search and data safety
- Search locally across all relevant authored content and resource metadata.
- Rank exact title/term matches above body-text matches.
- Validate local storage data and imported backups.
- Handle invalid JSON, old schema versions, missing keys, and duplicate IDs gracefully.
- Never silently overwrite user data.
- Explain that local data is stored in this browser and can be lost if browser data is cleared; make export easy to find.
- Never execute imported HTML or scripts. Do not render arbitrary raw HTML from Markdown.
- Do not place credentials or API keys in source code.

## Execution and quality gates
Use the available terminal/tooling to implement and validate the app. After implementation:
1. Install dependencies only when necessary and appropriate.
2. Run the TypeScript/type check.
3. Run lint.
4. Run automated tests.
5. Run a production build.
6. Fix failures and rerun the relevant checks.
7. If a command cannot run because the environment lacks dependencies or network access, report the exact command and blocker honestly.
8. Check responsive layout and important flows where tooling permits.

## Final response
When finished, give me:
- A concise summary of what was built.
- Important routes/features.
- Exact commands to install, run, test, lint, and build.
- The test/type-check/lint/build results, without exaggeration.
- Where and how to add new lessons, glossary terms, and resources.
- How to export/import personal data and what is stored locally.
- Any known limitations or remaining tasks.

Start by inspecting the workspace and reading `REQUIREMENTS.md`, then implement the application fully. Do not stop at planning.
