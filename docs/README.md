# Competitive Programming & Algorithm Engine: Documentation Index

Welcome to the official technical documentation suite for the Competitive Programming and Algorithmic Problem Solving Engine. This documentation is structured in the clean, step-by-step style of the Vue.js documentation, designed to prepare software engineers to walk into any technical interview with total confidence.

---

## Complete Reading Order & Documentation Index

### 1. Project Foundations & Overview
- [**00. Project Type & Track Selection**](/00-project-type): Pre-check analysis classifying the workspace into Track E (Algorithmic Library) with evidence.
- [**00a. Full Project Analysis**](/00a-project-analysis): Comprehensive trace of all code paths, complexity profiles, mandatory Mermaid diagrams, and baseline inventory counts.
- [**00b. Project Pitch (30s & 2m)**](/00b-project-pitch): Verbatim spoken scripts for technical elevator pitches and deep-dive overviews.
- [**00. Project Map & File Tree**](/00-project-map): Complete directory hierarchy, dependencies, and execution entry points.

---

### 2. Feature Inventory
- [**01. Feature Inventory Overview**](/01-features): Master comparison matrix and interaction diagram for features F1, F2, and F3.
- [**F1: House Robber Dynamic Programming Engine**](/features/F1-house-robber): Recurrence relation $dp[i] = \max(dp[i-1], nums[i] + dp[i-2])$ with $O(1)$ space rolling registers.
- [**F2: Dota2 Senate Turn Simulation Engine**](/features/F2-dota2-senate-simulation): Mathematical proof of $O(N)$ double-ended queue simulation with circular $+n$ turn offsets.
- [**F3: Median Boundary Debugger & Strict Inequality Engine**](/features/F3-count-above-median-debugger): Comparative audit between junior developer buggy code and corrected production solution.

---

### 3. Technical Foundations & Analysis
- [**02. Build Order from Scratch**](/02-build-order): Step-by-step rebuild guide with annotated code snippets and line-by-line explanations.
- [**03. API & Function Reference**](/03-api-reference): Complete technical contracts for all internal functions, parameters, return types, and CLI stdin drivers.
- [**04. Tech Choice Comparisons & Trade-offs**](/04-tech-comparisons): Exhaustive comparison tables evaluating chosen tools vs all realistic industry alternatives.
- [**05. Architecture & Execution Lifecycle**](/05-architecture): High-level architecture, memory models, cache lines, and scaling bottlenecks.
- [**06. Security Audit & Threat Modeling (OWASP)**](/06-security): OWASP Top 10 vulnerability mapping, sandboxed execution, and memory safety defenses.
- [**07. AI Integration & Evaluation Blueprint**](/07-ai-integration): Verification of zero native AI dependencies with an architectural blueprint for LLM automated grading.
- [**08. Engineering Quality, Testing & Operations**](/08-quality-and-ops): 100% test coverage audit, git collaboration evidence, GitHub Actions CI/CD, and technical debt log.

---

### 4. Distributed Code Judge System Design (18 Deep-Dive Chapters)
- [**System Design Overview & Index**](/system-design/index)
- [**14.1 Requirements & Capacity Estimation**](/system-design/14.1-requirements-and-estimation)
- [**14.2 Architecture Styles: Monolith to Event-Driven Microservices**](/system-design/14.2-architecture-styles)
- [**14.3 Networking & Communication Protocols**](/system-design/14.3-networking-and-communication)
- [**14.4 Load Balancing & Autoscaling Architecture**](/system-design/14.4-load-balancing-and-scaling)
- [**14.5 Databases, Persistence & Multi-Tier Storage**](/system-design/14.5-databases-and-storage)
- [**14.6 Caching Strategies & Multi-Tier Invalidation**](/system-design/14.6-caching)
- [**14.7 Messaging, Asynchronous Queues & Event Streaming**](/system-design/14.7-messaging-and-queues)
- [**14.8 Consistency, Concurrency & Distributed Coordination**](/system-design/14.8-consistency-and-concurrency)
- [**14.9 Reliability, Fault Tolerance & Resilience Patterns**](/system-design/14.9-reliability-and-resilience)
- [**14.10 API Design, Versioning & Rate Limiting Algorithms**](/system-design/14.10-api-design-and-rate-limiting)
- [**14.11 Security Architecture & Sandboxed Code Execution**](/system-design/14.11-security-architecture)
- [**14.12 Search, Indexing & AI Mentor Architecture**](/system-design/14.12-search-and-ai-architecture)
- [**14.13 Real-Time Systems & WebSocket Scaling**](/system-design/14.13-real-time-systems)
- [**14.14 Observability, Telemetry & SRE Operations**](/system-design/14.14-observability-and-operations)
- [**14.15 Performance Engineering & Asymptotic Optimization**](/system-design/14.15-performance-engineering)
- [**14.16 Cost Engineering, Cloud Budgets & Build vs Buy**](/system-design/14.16-cost-and-tradeoffs)
- [**14.17 Classic System Design Cases Applied to This Platform**](/system-design/14.17-classic-system-design)
- [**14.18 Master Design Decisions Log (ADR Matrix)**](/system-design/decisions)

---

### 5. Interview Preparation & Verification
- [**09. 150+ Technical Interview Questions & Answers**](/09-interview-qa): Comprehensive question bank covering all technical dimensions.
- [**10. Gaps & Improvements (Ranked Action Plan)**](/10-gaps-and-improvements): Ranked technical debt and future implementation roadmap.
- [**11. Technical Glossary**](/11-glossary): Definitions for 35+ algorithms and systems engineering terms.
- [**12. Confirm with Developer List**](/12-confirm-list): All inferred design choices marked `[CONFIRM WITH DEVELOPER]`.
- [**13. Master 275-Point Evaluation Checklist**](/13-master-checklist): Complete audit of all 275 industry evaluation points.
- [**14. Say It Out Loud (Consolidated Spoken Scripts)**](/14-say-it-out-loud): Spoken scripts for every feature and rehearsal tracker.

---

## How to Run & Deploy the Documentation Site

### Local Development
```bash
# Install dependencies (Node.js 20+ required)
npm install

# Start local documentation dev server
npm run docs:dev
```
Open your browser to `http://localhost:5173` to explore the interactive VitePress documentation.

### Production Static Build & Verification
```bash
# Build production bundle
npm run docs:build

# Preview static build locally
npm run docs:preview
```

### Hosting & Deployment
- **Cloudflare Pages / Vercel**:
  - Build command: `npm run docs:build`
  - Output directory: `docs/.vitepress/dist`
- **GitHub Pages**:
  - Deploy via GitHub Actions workflow deploying `.vitepress/dist` directly to the `gh-pages` branch.
