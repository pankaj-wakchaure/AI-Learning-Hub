# AI Learning Hub — Product Requirements

**Document type:** Product requirements and implementation specification  
**Project name:** AI Learning Hub  
**Version:** 1.0  
**Initial mode:** Local-first, single-user, static web application  
**Primary user:** An experienced C#/.NET developer transitioning into Python, machine learning, generative AI, and AI architecture.

---

## 1. Product vision

Build a polished personal learning website that acts as a single home for the user's AI learning journey. It must bring together the career roadmap, AI glossary, structured lessons, practical projects, learning resources, personal notes, bookmarks, and progress.

The experience should feel like a calm, well-organized learning product—not a generic admin dashboard, a marketing landing page, or a collection of empty cards.

The site must be useful immediately with meaningful seed content. It must be easy to extend without redesigning the application or migrating content out of source files.

## 2. User context and learning goals

The user:
- Has approximately 13–14 years of C#/.NET and object-oriented programming experience.
- Is learning Python, ML, GenAI, LLM applications, RAG, agents, deployment, and AI system architecture.
- Is learning by building projects and using Codex in VS Code.
- Wants to progress toward an AI Architect role.
- Prefers a focused plan, minimal tool overload, practical examples, and architecture-level thinking.
- Has a first portfolio project idea: a Mutual Fund Research Assistant that answers questions from public or sample fund documents with evidence and citations. It must not present itself as personalized financial advice.

Do not waste lesson space explaining basic programming concepts such as variables, loops, conditionals, and OOP from scratch. When Python foundations are needed, focus on Python-specific idioms, typing, packaging, environments, testing, APIs, data handling, and production practices.

## 3. Product principles

1. **Local-first:** The app must run locally without a backend or API key.
2. **Content as files:** Lessons and glossary content must be readable, editable, portable Markdown/JSON/TypeScript files in Git.
3. **Progress separated from content:** Browser progress data must not be mixed into lesson source files.
4. **Incremental architecture:** Make future backend/database/API integration possible through clear service interfaces, but do not implement those systems now.
5. **Meaningful content:** Prefer a smaller number of complete, useful lessons over hundreds of empty placeholders.
6. **No fake functionality:** Every visible button, filter, bookmark, progress action, import/export control, and navigation item must work.
7. **Accessible and responsive:** Keyboard usable, readable contrast, visible focus, semantic markup, and layouts suitable for desktop, tablet, and mobile.
8. **Safe rendering:** Render Markdown safely; do not allow arbitrary HTML or unsafe links/scripts.
9. **No external runtime dependency:** The core site should not require remote services to load. External learning links may open when the user chooses them.
10. **No secrets:** Never put API keys or credentials in client-side code or repository files.

## 4. Technology requirements

Use the following defaults unless the existing repository has a strong, documented reason to use a compatible alternative:
- React
- TypeScript with strict mode
- Vite
- Tailwind CSS
- React Router or an equally simple routing approach
- A safe Markdown renderer with syntax highlighting for code
- Mermaid diagrams only if the integration can be implemented safely and reliably
- Vitest and React Testing Library for tests
- ESLint and Prettier, or equivalent consistent lint/format tooling
- Browser `localStorage` for initial progress persistence
- JSON files and Markdown files for authored content

Avoid adding libraries without a clear need. Do not add a backend, database, authentication, paid service, LLM API, telemetry, or analytics in v1.

## 5. Information architecture and routes

Implement the following main areas. Route names may be adjusted slightly if there is a clear reason, but keep the information architecture intact.

### 5.1 Dashboard (`/`)
Show:
- Welcome/title and a concise statement of the user's learning goal.
- Current roadmap stage.
- Overall learning progress derived from actual lesson states.
- Continue-learning card for the most recently opened or in-progress lesson.
- Next recommended lesson or action.
- Recently viewed lessons.
- Bookmarked items.
- A short weekly focus / suggested study session.
- Useful quick links to Roadmap, Glossary, Lessons, and Projects.

All counts and progress indicators must be computed from real content/progress data, not hardcoded decorative numbers.

### 5.2 Career Roadmap (`/roadmap`)
Include:
- A 2026–2031 high-level progression toward AI Architect.
- Stage-by-stage outcomes and skills.
- A detailed first-90-days plan.
- A realistic weekly schedule based on approximately six hours per week (editable content, not a hardcoded assumption throughout UI).
- Milestones and evidence of completion.
- Links from roadmap items to relevant lessons and projects.
- A clear distinction between suggested plan and completed work.

Roadmap stages:
1. Python for production and ML foundations.
2. LLM application engineering and RAG.
3. Production AI workflows and agents.
4. AI system architecture, cloud, reliability, and governance.
5. Architecture leadership and portfolio/career readiness.

Avoid guaranteeing employment or a promotion by a particular date.

### 5.3 Glossary (`/glossary`)
Include:
- Searchable glossary with instant local search.
- Search term, acronym, definition, examples, category, and difficulty level.
- Category and difficulty filters.
- Alphabetical sorting.
- A detail view or panel for a selected term.
- Related terms and links to relevant lessons.
- Empty search state and clear-filters action.
- Deep links to individual terms where practical.

Seed at least 50 useful glossary entries across:
- AI/ML foundations
- LLM and prompt concepts
- Embeddings and RAG
- Agents and tool calling
- Evaluation and observability
- AI architecture and deployment
- Data/cloud
- Security, privacy, and governance
- ML evaluation and MLOps
- AI-assisted software development

Every entry must have a clear, accurate explanation and at least one practical example or use case when useful. Expand abbreviations on first use.

### 5.4 Learning Library (`/learn`)
Include:
- Browse by learning path, topic, level, and status.
- Lesson cards with title, short description, level, estimated time, and progress.
- Filters for beginner/intermediate/advanced, topic, and completion status.
- Search across lesson titles, summaries, tags, and content text.
- A useful lesson detail page with previous/next navigation.
- Prerequisites, learning objectives, estimated duration, main content, code examples, common mistakes, a recap, related terms, related lessons, and resources.
- Mark complete/incomplete, bookmark, and add personal notes.
- Resume/continue learning behavior.

Lesson levels must reflect this user's actual experience: beginner should mean beginner to the AI topic, not beginner to programming.

### 5.5 Learning paths and projects (`/paths` and/or `/projects`)
Include:
- A curated “AI Architect Journey” path.
- A “Mutual Fund Research Assistant” practical project path.
- Clear prerequisites, milestones, deliverables, and related lessons.
- Project stages: requirements, data/document ingestion, retrieval, answer generation with citations, evaluation, API/UI, security, deployment, and monitoring.
- Use public or synthetic fund documents for learning. Clearly state that outputs are educational research support and not personalized financial advice.
- Make progress trackable and link each milestone to relevant lessons.

### 5.6 Resources and videos (`/resources`)
Include:
- A searchable, filterable resource library.
- Resource types: documentation, article, video, course, repository, book, and tool.
- Metadata: title, description, URL, topic, type, level, source/publisher, optional duration, and personal notes/status.
- Status such as saved, in progress, and completed.
- Add/edit/delete personal resource entries through a simple form.
- External links must be validated and opened safely.
- Seed official, reputable resources. Verify URLs where possible; do not fabricate links or claim content has been checked when it has not.
- Videos are metadata/link records only in v1; no embedded player or progress tracking by timestamp is required.

### 5.7 My Notes (`/notes`)
Include:
- A simple local notes area for personal learning notes.
- Create, edit, search, and delete notes.
- Optional association with a lesson, glossary term, roadmap item, or project.
- Created/updated dates.
- Confirmation before destructive deletion.
- Notes persisted locally and included in backup export.

### 5.8 Progress and review (`/progress`)
Include:
- Completion counts and progress by learning path/topic.
- In-progress and completed lessons.
- Bookmarks.
- Recent activity if it can be tracked simply and reliably.
- Confidence rating per lesson (e.g., 1–5) and a “needs review” marker.
- A simple review list filtered by “needs review” or low confidence.
- Do not implement an elaborate spaced-repetition engine in v1.

### 5.9 Settings and data management (`/settings`)
Include:
- Export all user-created/local data as a versioned JSON backup.
- Import a previously exported backup.
- Validate imported JSON and display a readable error if invalid.
- Preview or clearly explain the effects of import before applying it.
- Offer merge or replace behavior; default to safe merge where feasible.
- Prevent accidental loss of existing progress/notes.
- Reset local data with a clear confirmation step.
- Display app/data version and a short privacy note explaining that user data is stored in this browser.

## 6. Content model

Use stable IDs. Avoid using array positions as IDs.

Suggested TypeScript types:

```ts
type Difficulty = "beginner" | "intermediate" | "advanced";
type ProgressStatus = "not-started" | "in-progress" | "completed";
type ResourceType =
  | "documentation"
  | "article"
  | "video"
  | "course"
  | "repository"
  | "book"
  | "tool";

interface GlossaryTerm {
  id: string;
  term: string;
  acronym?: string;
  shortDefinition: string;
  explanation: string;
  category: string;
  difficulty: Difficulty;
  examples?: string[];
  relatedTermIds?: string[];
  relatedLessonIds?: string[];
  tags: string[];
}

interface Lesson {
  id: string;
  slug: string;
  title: string;
  summary: string;
  level: Difficulty;
  topic: string;
  estimatedMinutes: number;
  prerequisites?: string[];
  objectives: string[];
  contentPath: string;
  glossaryTermIds?: string[];
  relatedLessonIds?: string[];
  resourceIds?: string[];
  tags: string[];
}

interface LearningResource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: ResourceType;
  topic: string;
  level: Difficulty;
  publisher?: string;
  durationMinutes?: number;
  tags: string[];
}

interface UserLessonState {
  lessonId: string;
  status: ProgressStatus;
  bookmarked: boolean;
  confidence?: 1 | 2 | 3 | 4 | 5;
  needsReview: boolean;
  personalNotes: string;
  lastOpenedAt?: string;
  completedAt?: string;
}

interface PersonalNote {
  id: string;
  title: string;
  content: string;
  linkedEntityType?: "lesson" | "glossary" | "roadmap" | "project";
  linkedEntityId?: string;
  createdAt: string;
  updatedAt: string;
}
```

Adapt types as necessary, but document the final model and validate content on load. Include a backup schema version and import migration strategy for future changes.

## 7. Seed content requirements

The initial app must contain real content rather than empty placeholders.

### 7.1 Roadmap content
Seed the 2026–2031 roadmap, 90-day plan, weekly schedule, and milestones:
- Year 1: production Python, LLM APIs, structured outputs, RAG, FastAPI, tests, Docker, deployment.
- Year 2: production AI workflows/agents, tool calling, human approval, evaluation, tracing, and security.
- Year 3: AI architecture, hybrid .NET/Python systems, cloud, model routing, data integration, reliability, and cost.
- Year 4: reusable AI services, governance, privacy, technical leadership, and architecture standards.
- Year 5: architecture portfolio, leadership, system design, and career readiness.
Present these as a flexible learning direction, not a promise or rigid employment forecast.

### 7.2 Required complete starter lessons
Create full, practical lessons for at least:
1. AI vs ML vs Deep Learning vs Generative AI
2. Python project structure, virtual environments, dependencies, and configuration
3. Python typing, validation, and production-quality code
4. Testing Python applications with pytest
5. ML workflow: dataset, features, labels, train/validation/test, leakage, and metrics
6. Regression and classification: practical differences
7. LLM fundamentals: tokens, context windows, prompts, and structured output
8. Embeddings and semantic similarity
9. RAG end-to-end: ingestion, chunking, retrieval, generation, citations, and evaluation
10. Vector databases vs keyword and hybrid search
11. Tool calling and AI agents
12. LLM application evaluation and observability
13. FastAPI for AI services
14. Docker and deployment basics for AI applications
15. AI system architecture: latency, cost, reliability, security, and model routing
16. Prompt injection, data privacy, access control, and safe RAG
17. Designing the Mutual Fund Research Assistant
18. How to move from a working prototype to a production-ready AI service

Each lesson should include:
- Why it matters
- Learning objectives
- Prerequisites
- Plain-language explanation
- Accurate technical explanation
- Practical examples and, where relevant, runnable code
- Architecture diagram when it adds value
- Common mistakes and trade-offs
- A short recap
- A few self-check questions with answers hidden behind a reveal/toggle if practical
- Related glossary terms and lessons
- Reputable references

### 7.3 Glossary
Seed at least 50 meaningful entries, including: AI, ML, deep learning, generative AI, LLM, SLM, NLP, foundation model, inference, training, token, tokenizer, transformer, attention, context window, embedding, vector database, semantic search, hybrid search, chunking, RAG, reranker, hallucination, grounding, prompt injection, tool calling, agent, orchestration, guardrail, human-in-the-loop, evaluation, faithfulness, retrieval recall, precision, recall, F1 score, overfitting, data leakage, model drift, MLOps, observability, latency, throughput, model routing, fine-tuning, LoRA, quantization, MCP, API gateway, CI/CD, container, IAM, PII, RBAC, and SLO.

### 7.4 Resource links
Prefer official documentation and stable sources such as:
- Python Packaging User Guide: https://packaging.python.org/en/latest/
- Python typing documentation: https://typing.python.org/en/latest/
- FastAPI tutorial: https://fastapi.tiangolo.com/tutorial/
- pytest documentation: https://docs.pytest.org/en/latest/
- AWS Well-Architected Generative AI Lens: https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html
- OpenAI agent development resources: https://developers.openai.com/tracks/building-agents

If any URL is not verified, label it for later verification rather than presenting it as confirmed.

## 8. Search requirements

Implement client-side search with no external service:
- Search glossary terms, definitions, explanations, tags, lessons, lesson summaries/content, roadmap content, projects, and resources.
- Normalize case and whitespace.
- Support partial matches.
- Rank title/term matches above body matches.
- Provide category/type/level filters where relevant.
- Show clear result counts and useful empty states.
- Provide a clear-search action.
- Keep search responsive with the seeded content volume.
- Add tests for ranking, filters, empty queries, and no-results behavior.

## 9. Local persistence and backup requirements

- Store progress, bookmarks, confidence, review flags, personal notes, and user-added resources in browser local storage or a small versioned storage abstraction.
- Handle missing, malformed, or old stored data gracefully; never crash the whole app.
- Include schema versioning and a safe migration path.
- Export all user data to a versioned JSON file.
- Import with validation, preview, and a safe merge/replace choice.
- Display understandable errors and success feedback.
- Never imply local data is synced to the cloud.
- Warn users that clearing browser data may remove local data and that regular export is recommended.
- Authored learning content stays in repository files and is not overwritten by progress operations.

## 10. UX and visual design

Design direction:
- Calm, modern, professional, content-first learning workspace.
- Use a restrained neutral palette with one accent color.
- Strong typography, generous spacing, clear hierarchy, subtle borders, and restrained shadows.
- Sidebar navigation on desktop and a usable mobile navigation pattern.
- A compact top bar with global search and access to settings.
- Use consistent cards, badges, progress bars, callouts, breadcrumbs, and code blocks.
- Prefer useful content density over oversized decorative hero sections.
- Provide light/dark theme only if it can be implemented cleanly without distracting from core functionality.
- Include polished loading, empty, error, and confirmation states.
- Avoid clutter, excessive animations, fake charts, and meaningless metrics.
- Support keyboard navigation, focus visibility, semantic headings, labels, and appropriate contrast.
- No buttons that do nothing and no placeholder links.

## 11. Architecture and repository structure

Use a clear feature-oriented structure, adapted to the selected tooling. Suggested structure:

```text
ai-learning-hub/
  REQUIREMENTS.md
  README.md
  CHANGELOG.md
  public/
  src/
    app/
      App.tsx
      routes.tsx
    components/
      layout/
      navigation/
      search/
      feedback/
      markdown/
    features/
      dashboard/
      roadmap/
      glossary/
      lessons/
      paths/
      projects/
      resources/
      notes/
      progress/
      settings/
    content/
      glossary/
      lessons/
      roadmap/
      resources/
      projects/
    lib/
      content/
      search/
      storage/
      backup/
      validation/
    types/
    styles/
    tests/
  package.json
  tsconfig.json
  vite.config.ts
```

Requirements:
- Separate content access from UI components.
- Separate local user state from authored content.
- Keep components reasonably small and focused.
- Use typed service interfaces for content, progress, notes, and backup.
- Make future remote services replaceable behind interfaces without premature abstraction.
- Add a README with exact setup, run, test, build, and troubleshooting instructions.
- Add a `.gitignore` appropriate for Node/React projects.
- Do not check in `node_modules`, build artifacts, `.env` secrets, or local user backup files.
- Keep authored content easy to review and edit in VS Code.

## 12. Testing and quality gates

Provide tests for at least:
- Content schema validation and invalid/missing content.
- Glossary and lesson search.
- Search filters and no-results states.
- Progress status updates.
- Bookmark and confidence updates.
- Notes CRUD behavior.
- Export/import validation.
- Safe merge/replace behavior.
- Important page navigation and a few key user flows.

Before declaring completion, run and report:
1. TypeScript/type check.
2. Lint.
3. Automated tests.
4. Production build.

Fix failures rather than merely listing them. If a command cannot run due to environment or dependency/network restrictions, state the exact blocker and provide the command for the user to run.

## 13. Non-functional requirements

- The core app runs locally without sign-in, server, API key, or paid service.
- No runtime calls to an LLM.
- No telemetry or analytics.
- Good performance with the initial content set.
- Accessible, responsive layout.
- Safe Markdown and URL handling.
- Clear errors and recovery paths.
- All content and code are understandable to a developer who will maintain them.
- No unsubstantiated AI-generated factual claims; use reputable references and mark uncertain items clearly.

## 14. Explicitly out of scope for v1

Do not implement these in v1:
- Backend/API server or database
- Login, multi-user accounts, or cloud sync
- LLM-powered chat/search/content generation
- Paid API integrations or secrets
- Automated ingestion of ChatGPT conversation history
- Rich collaborative editor
- Complex spaced repetition engine
- Video hosting or advanced video playback
- Kubernetes or production infrastructure
- Financial recommendations or personalized investment advice

Design for future extension, but do not build speculative scaffolding for every future feature.

## 15. Acceptance criteria

The app is ready when:
- [ ] It starts locally using documented commands.
- [ ] It has polished responsive navigation and all main routes.
- [ ] Dashboard metrics reflect real data.
- [ ] Roadmap and 90-day plan contain substantive content.
- [ ] Glossary has at least 50 populated entries and working search/filters.
- [ ] At least 18 starter lessons are complete enough to learn from.
- [ ] Learning paths and project milestones link to relevant content.
- [ ] Resources can be searched and personal resources can be managed.
- [ ] Notes can be created, edited, searched, linked, and deleted.
- [ ] Progress, bookmarks, confidence, and review flags persist after refresh.
- [ ] JSON backup export and validated import work safely.
- [ ] Authored content and user progress are stored separately.
- [ ] No visible control is inert or misleading.
- [ ] Keyboard navigation and mobile layout are usable.
- [ ] Tests cover the important logic and user flows.
- [ ] Type check, lint, tests, and production build pass, or any environment blocker is documented.
- [ ] README explains setup, structure, content authoring, persistence, backup, and limitations.

## 16. Implementation strategy

Implement in working vertical slices. Do not stop after generating a plan or creating a static mockup.

Recommended sequence:
1. Inspect the existing folder and preserve useful work.
2. Set up/confirm the app, scripts, types, routing, layout, and design system.
3. Create the content schema and content loader with validation.
4. Build the glossary and local search end-to-end.
5. Build lesson library/detail pages and seed complete lessons.
6. Build roadmap, paths, and project milestones.
7. Add local progress, bookmarks, confidence, review, and notes.
8. Add resources management.
9. Add backup import/export and reset safeguards.
10. Add dashboard aggregation and settings.
11. Add automated tests and accessibility/responsive refinements.
12. Run all quality gates, fix issues, and update documentation.

At each step, keep the app runnable and summarize what was implemented, what tests ran, and what remains. Do not ask the user to decide minor implementation details; use sound defaults. Ask a question only if a genuinely blocking ambiguity or destructive action arises.
