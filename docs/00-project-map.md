# Project Map & Repository File Tree

This document provides a comprehensive structural manifest of the entire workspace, detailing every file, its operational responsibility, tech stack dependencies, and execution entry points.

---

## 1. Complete Folder Hierarchy & Manifest

```text
57-weatherapp-client/
├── 1stquestion               # [Feature 1] House Robber DP solution (O(N) time, O(1) space)
├── 2ndquestion               # [Feature 2] Dota2 Senate simulation using collections.deque
├── 3rdquestion               # [Feature 3] Debugged median partition counter with CLI driver
├── README.md                 # Sprint challenge overview & contribution guidelines from BMSCE IEEE CS
├── task1.md                  # Problem specification, constraints & examples for House Robber
├── task2.md                  # Problem specification & algorithm rules for Dota2 Senate
├── task3.md                  # Problem specification & original buggy snippet for Median challenge
├── package.json              # NPM manifest defining VitePress docs tooling and build scripts
├── package-lock.json         # Deterministic dependency lockfile for documentation tooling
└── docs/                     # Vue.js-style technical documentation & system design suite
    ├── 00-project-type.md    # Pre-check classification & track adaptation analysis
    ├── 00a-project-analysis.md # Comprehensive trace, inventory counts, and Mermaid flows
    ├── 00b-project-pitch.md  # 30-second and 2-minute spoken interview pitch scripts
    ├── 00-project-map.md     # Full folder tree, manifest, and runtime configurations
    ├── 01-features.md        # Feature inventory summary across all algorithmic modules
    ├── 02-build-order.md     # Step-by-step rebuild order from scratch with code explanations
    ├── 03-api-reference.md   # Function signatures, parameters, return types, and constraints
    ├── 04-tech-comparisons.md# Exhaustive tech trade-off tables vs industry alternatives
    ├── 05-architecture.md    # Memory model, execution lifecycle, and scaling blueprints
    ├── 06-security.md        # Sandboxing, resource exhaustion defense, and OWASP audit
    ├── 07-ai-integration.md  # LLM test-case generation, automated grading & eval pipelines
    ├── 08-quality-and-ops.md # Testing benchmarks, profiling, and CI/CD automation
    ├── 09-interview-qa.md    # 150+ in-depth technical interview questions and answers
    ├── 10-gaps-and-improvements.md # Ranked technical debt, missing features, and action plans
    ├── 11-glossary.md        # Technical glossary defining 50+ algorithm & systems concepts
    ├── 12-confirm-list.md    # Developer verification items [CONFIRM WITH DEVELOPER]
    ├── 13-master-checklist.md# Complete audit of all 275 industry evaluation points
    ├── 14-say-it-out-loud.md # Consolidated spoken interview rehearsal scripts & checklist
    ├── index.md              # VitePress landing homepage with feature cards
    ├── README.md             # VitePress documentation index & reading guide
    ├── features/             # Granular feature write-ups
    │   ├── F1-house-robber.md
    │   ├── F2-dota2-senate-simulation.md
    │   └── F3-count-above-median-debugger.md
    ├── system-design/        # Distributed Code Judge System Design Deep Dive (18 Chapters)
    │   ├── index.md
    │   ├── 14.1-requirements-and-estimation.md
    │   ├── 14.2-architecture-styles.md
    │   ├── 14.3-networking-and-communication.md
    │   ├── 14.4-load-balancing-and-scaling.md
    │   ├── 14.5-databases-and-storage.md
    │   ├── 14.6-caching.md
    │   ├── 14.7-messaging-and-queues.md
    │   ├── 14.8-consistency-and-concurrency.md
    │   ├── 14.9-reliability-and-resilience.md
    │   ├── 14.10-api-design-and-rate-limiting.md
    │   ├── 14.11-security-architecture.md
    │   ├── 14.12-search-and-ai-architecture.md
    │   ├── 14.13-real-time-systems.md
    │   ├── 14.14-observability-and-operations.md
    │   ├── 14.15-performance-engineering.md
    │   ├── 14.16-cost-and-tradeoffs.md
    │   ├── 14.17-classic-system-design.md
    │   └── decisions.md
    └── .vitepress/           # VitePress build configuration & custom theme
        ├── config.mjs        # Navigation, sidebar, search, and Mermaid plugin setup
        └── theme/
            ├── index.js      # Custom theme entry extending DefaultTheme
            └── custom.css    # Pure black (#000000) high-contrast theme styling
```

---

## 2. Tech Stack & Environment Specifications

| Component | Technology | Exact Version | Justification |
| :--- | :--- | :--- | :--- |
| **Algorithm Language** | Python | `3.10+` / `3.12` | Standard for algorithmic interviews and CP; clean syntax and rich standard library. |
| **Queue Primitives** | `collections.deque` | Standard Library | Implemented in C as a doubly linked list of blocks, providing $O(1)$ amortized push/pop. |
| **Array Sorting** | CPython Timsort | Standard Library | Highly adaptive $O(N \log N)$ worst-case and $O(N)$ best-case stable hybrid sort. |
| **Documentation Engine** | VitePress | `^1.6.4` | Ultra-fast static site generator built on Vite and Vue 3; Vue.js documentation standard. |
| **Diagramming Plugin** | Mermaid.js | `^11.17.2` | Declarative markdown diagram rendering for architecture, sequence, and state diagrams. |
| **VitePress Plugin** | `vitepress-plugin-mermaid` | `^2.0.17` | Seamless integration of Mermaid within VitePress markdown processing. |
| **Runtime Environment** | Node.js | `v22.23.2` | Local build and preview execution environment for VitePress documentation. |
| **Package Manager** | npm | `10.9.8` | Manages documentation dependencies and reproducible lockfile resolution. |

---

## 3. Environment Variables & External Dependencies

- **Environment Variables**: None required. All algorithmic components execute purely in-memory using standard POSIX stdin/stdout or function parameters.
- **Third-Party SaaS APIs**: None integrated directly. (In Track E, the codebase is completely self-contained with no network dependencies).
- **Execution Entry Points**:
  - `3rdquestion`: CLI entry via standard input: `python3 3rdquestion`
  - Algorithmic import: `from 1stquestion import house_robber; from 2ndquestion import predict_senate_winner`
  - Documentation Dev Server: `npm run docs:dev`
  - Documentation Static Build: `npm run docs:build`
  - Documentation Local Preview: `npm run docs:preview`
