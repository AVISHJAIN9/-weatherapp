import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'Competitive Programming & Algorithm Engine',
    description: 'Production Technical Documentation & System Design Guide in Vue.js Style',
    appearance: 'dark',
    base: '/',
    themeConfig: {
      nav: [
        { text: 'Guide', link: '/00-project-type' },
        { text: 'Features', link: '/01-features' },
        { text: 'System Design', link: '/system-design/' },
        { text: 'API Reference', link: '/03-api-reference' },
        { text: 'Comparisons', link: '/04-tech-comparisons' },
        { text: 'Interview Q&A', link: '/09-interview-qa' }
      ],
      sidebar: [
        {
          text: 'Project Overview',
          items: [
            { text: '00. Project Type & Track', link: '/00-project-type' },
            { text: '00a. Full Project Analysis', link: '/00a-project-analysis' },
            { text: '00b. Project Pitch (30s & 2m)', link: '/00b-project-pitch' },
            { text: '00. Project Map & File Tree', link: '/00-project-map' }
          ]
        },
        {
          text: 'Feature Inventory',
          items: [
            { text: '01. Features Overview', link: '/01-features' },
            { text: 'F1: House Robber DP', link: '/features/F1-house-robber' },
            { text: 'F2: Dota2 Senate Simulation', link: '/features/F2-dota2-senate-simulation' },
            { text: 'F3: Count Above Median Debugger', link: '/features/F3-count-above-median-debugger' }
          ]
        },
        {
          text: 'Technical Foundations',
          items: [
            { text: '02. Build Order from Scratch', link: '/02-build-order' },
            { text: '03. API & Function Reference', link: '/03-api-reference' },
            { text: '04. Tech Choice Comparisons', link: '/04-tech-comparisons' },
            { text: '05. Architecture & Lifecycle', link: '/05-architecture' },
            { text: '06. Security Audit (OWASP)', link: '/06-security' },
            { text: '07. AI Integration & Evals', link: '/07-ai-integration' },
            { text: '08. Quality, Ops & Testing', link: '/08-quality-and-ops' }
          ]
        },
        {
          text: 'System Design Deep Dive',
          items: [
            { text: 'Overview & Index', link: '/system-design/index' },
            { text: '14.1 Requirements & Estimation', link: '/system-design/14.1-requirements-and-estimation' },
            { text: '14.2 Architecture Styles', link: '/system-design/14.2-architecture-styles' },
            { text: '14.3 Networking & Communication', link: '/system-design/14.3-networking-and-communication' },
            { text: '14.4 Load Balancing & Scaling', link: '/system-design/14.4-load-balancing-and-scaling' },
            { text: '14.5 Databases & Storage', link: '/system-design/14.5-databases-and-storage' },
            { text: '14.6 Caching Strategies', link: '/system-design/14.6-caching' },
            { text: '14.7 Messaging & Queues', link: '/system-design/14.7-messaging-and-queues' },
            { text: '14.8 Consistency & Concurrency', link: '/system-design/14.8-consistency-and-concurrency' },
            { text: '14.9 Reliability & Resilience', link: '/system-design/14.9-reliability-and-resilience' },
            { text: '14.10 API Design & Rate Limiting', link: '/system-design/14.10-api-design-and-rate-limiting' },
            { text: '14.11 Security Architecture', link: '/system-design/14.11-security-architecture' },
            { text: '14.12 Search & AI Architecture', link: '/system-design/14.12-search-and-ai-architecture' },
            { text: '14.13 Real-Time Systems', link: '/system-design/14.13-real-time-systems' },
            { text: '14.14 Observability & Operations', link: '/system-design/14.14-observability-and-operations' },
            { text: '14.15 Performance Engineering', link: '/system-design/14.15-performance-engineering' },
            { text: '14.16 Cost & Trade-offs', link: '/system-design/14.16-cost-and-tradeoffs' },
            { text: '14.17 Classic System Design Cases', link: '/system-design/14.17-classic-system-design' },
            { text: '14.18 Design Decisions Log', link: '/system-design/decisions' }
          ]
        },
        {
          text: 'Interview Mastery & Checklist',
          items: [
            { text: '09. 150+ Interview Q&A', link: '/09-interview-qa' },
            { text: '10. Gaps & Improvements', link: '/10-gaps-and-improvements' },
            { text: '11. Technical Glossary', link: '/11-glossary' },
            { text: '12. Confirm with Developer List', link: '/12-confirm-list' },
            { text: '13. Master Checklist (275 Items)', link: '/13-master-checklist' },
            { text: '14. Say It Out Loud Scripts', link: '/14-say-it-out-loud' }
          ]
        }
      ],
      search: {
        provider: 'local'
      },
      outline: [2, 3],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/AVISHJAIN9/-weatherapp' }
      ]
    },
    mermaid: {
      theme: 'dark'
    },
    vite: {
      optimizeDeps: {
        include: [
          'mermaid',
          'fastdom',
          'fastdom/extensions/fastdom-promised.js'
        ]
      },
      ssr: {
        noExternal: ['mermaid', 'vitepress-plugin-mermaid', 'fastdom']
      }
    }
  })
)
