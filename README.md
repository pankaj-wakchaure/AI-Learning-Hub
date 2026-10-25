# AI Learning Hub

A local-first learning workspace for an experienced C#/.NET developer moving into Python, machine learning, generative AI, RAG, and AI architecture. It requires no backend, account, API key, LLM service, or telemetry.

## Run locally

Requirements: Node.js 20+ and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Other commands:

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

## What is included

- `/` dashboard with progress-derived metrics and continue learning.
- `/roadmap` flexible 2026–2031 stages, first 90 days, weekly plan, and trackable evidence.
- `/glossary` local search, category filter, definitions, examples, and related terms (55 entries).
- `/learn` searchable lesson library (18 starter lessons) with progress, bookmark, confidence, review flag, and personal lesson notes.
- `/paths` AI Architect Journey and `/projects` Mutual Fund Research Assistant milestones.
- `/resources` searchable references and personal resource CRUD.
- `/notes` personal note CRUD and search.
- `/progress` completion by topic, saved lessons, and review queue.
- `/settings` JSON backup export/import, merge/replace, reset confirmation, and privacy guidance.

## Content authoring

Starter lessons are authored in `src/content/lessons.ts` as typed records with stable IDs. Each record includes objectives, prerequisites, readable Markdown content, code examples, recap, a self-check, and reference links. Add a new record to the `entries` list and preserve the tuple order documented by the type. Glossary terms live in `src/content/glossary.ts`; add concise definitions, category, level, useful example, and tags. Curated references live in `src/content/resources.ts`; validate the URL before adding it. The React Markdown renderer does not enable raw HTML, so authored markup is not executed.

## Data and privacy

Authored learning content is separate from local user state. Progress, bookmarks, confidence, review flags, lesson notes, personal notes, user resources, activity, and roadmap checks are stored under `ai-learning-hub.data` in this browser's localStorage. Browser data clearing can remove it, so export backups regularly. Export downloads a versioned JSON file; import validates schema version and required sections, then offers merge (safe default) or confirmed replace. Schema version is `1`; future migrations should be added before changing the stored shape.

## Limitations

The project path is a learning guide; it does not ingest actual documents or call a model. User resources are local browser records. Lesson and glossary content are a practical starter corpus and should be expanded with your own experiments. Search is client-side and local. No cloud sync is provided.
