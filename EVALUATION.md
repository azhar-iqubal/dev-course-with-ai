Development Course Evaluation Framework

Purpose
- Establish objective, repeatable criteria to judge learner proficiency across phases.
- Emphasize applied skills, not rote theory; allow equivalent substitutions where sensible.

Scoring Model
- Each phase scored 0–3 per criterion: 0 (not met), 1 (partially), 2 (mostly), 3 (fully).
- Phase score = average of criteria. Course pass ≥ 2.2 overall and no phase < 1.5.
- Oral checks permitted to confirm understanding; demos preferred over descriptions.

Phase 0: Prerequisites
- Environment readiness
  - OS/Terminal/Git/IDE configured; can run scripts and clone repos
  - Shell basics: navigate, create/move files, permissions, history
- Version control hygiene
  - Git: init/clone/commit/push, branching basics, PR etiquette

Phase 1: Programming Fundamentals
- JavaScript fundamentals
  - Variables/types, functions, scope/closures, arrays/objects, control flow
  - Can read unfamiliar JS and explain what it does
- Code quality
  - Applies DRY/SOLID where appropriate; names and structure are clear
  - Refactors safely; small commits with meaningful messages
- Debugging
  - Uses breakpoints, console, and isolates defects systematically
- DSA basics
  - Chooses appropriate structure (array/map/set) and explains tradeoffs
- Testing mindset
  - Writes unit tests with assertions and simple mocks

Phase 2: Tools & Workflow
- Terminal proficiency
  - Uses package managers correctly; understands global vs local tools
  - Manages environment variables and shell rc files
- Git workflows
  - Clean history, resolves conflicts, uses .gitignore and README effectively
- IDE use
  - Formatter/linter configured; debugger used at least once in demo

Phase 3: Web & Networking Fundamentals
- Web platform
  - HTML semantics; CSS layout with flex/grid; responsive design
  - DOM understanding; event loop concept; async/await usage
- HTTP essentials
  - Methods/status codes; headers/cookies/sessions/JWT explained
  - CORS rationale; uses curl/Postman to inspect requests/responses
- Security & performance
  - TLS concept; can explain handshake and cert chain basics
  - Caching/compression/CDN at a high level; pagination/filter/sort rationale

Phase 4: Databases
- Modeling & tradeoffs
  - Distinguishes relational vs document; normalization vs denormalization
- Query performance
  - Adds appropriate indexes; avoids full scans; explains ACID
- Tooling
  - Uses an ORM or direct queries; demonstrates a migration safely

Phase 5: Frameworks (JS)
- NodeJS
  - Uses async I/O; avoids blocking; reads env; basic HTTP server
- Express.js
  - Routing/middleware; input parsing/validation; centralized error handling
- React + Tailwind
  - Component composition; hooks; forms; context where appropriate
  - Tailwind utilities used idiomatically; responsive classes applied
- TanStack Query
  - Defines stable query keys; caching/invalidation used correctly
- Vite
  - Runs dev server; config basics (aliases/env) understood
- React Native
  - Chooses Expo/CLI appropriately; navigation setup; basic native APIs
- Firebase
  - Auth flows; Firestore queries; Functions/Rules; cost-aware usage

Phase 6: Frameworks (Python)
- Jupyter/Pandas
  - Demonstrates notebook workflow; basic DataFrame transforms and aggregations
- Envs/Deps
  - Creates venv/pyenv; pins dependencies; explains reproducibility
- FastAPI/Flask
  - Builds minimal API; request parsing; returns proper status codes
- Testing
  - Uses pytest or unittest; fixtures or simple mocks applied

Phase 7: Advanced
- Delivery & runtime
  - Containerizes app; explains image layers and environment config
- Observability & performance
  - Configures logging; explains metrics/tracing at high level
  - Identifies a performance bottleneck and proposes a fix
- Security & networking
  - Explains common web vulns (XSS/CSRF/SQLi) and mitigations
  - Describes load balancing/reverse proxy role (nginx)
- System concepts
  - Explains processes vs threads; signals; basic IPC

Capstone Evaluation
- Functionality
  - Meets requirements; core flows implemented; handles errors gracefully
- Code quality
  - Readable structure; minimal duplication; sensible naming
- Tests
  - Key units covered; at least one integration/E2E path
- Performance
  - Avoids N+1 calls; reasonable bundle size; paginated endpoints
- Security
  - AuthZ/AuthN correctly applied; secrets not in repo; CORS configured
- Documentation
  - README with setup/run steps; brief architecture overview

Prerequisites & Skips
- Prerequisites
  - Phase 0–1 are required before later phases; exceptions only with proof
- Skipping topics
  - Allowed if equivalent experience is demonstrated with a live demo or code
  - If skipping databases, must show Firebase data modeling proficiency
  - If skipping React Native, must ship a responsive web alternative
  - If skipping tests, capstone must include integration tests to pass

Grading Rubric Summary (per phase)
- 0: Not demonstrable; missing artifacts
- 1: Partial; significant gaps; needs supervision
- 2: Mostly; minor gaps; works independently on common tasks
- 3: Solid; explains tradeoffs; anticipates edge cases