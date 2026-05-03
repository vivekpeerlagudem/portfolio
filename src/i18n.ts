export const translations = {
  en: {
    greeting: 'who ships AI at scale',
    greetingRoles: ['Multi-Agent Systems Builder', 'Applied AI Operator', 'Open Source Builder', 'career-ops Creator'],
    pillLabels: ['Builder', 'Applied AI Operator'],
    email: 'peerlagudemvivek@gmail.com',
    role: '',
    story: {
      context: '+Wrote my first line of code.+ Never stopped.',
      reflections: ['Every problem a *puzzle.*', 'Every solution *shipped.*'],
      hookParagraphs: [
        ['What drives me doesn’t fit on a *transcript.*', 'Building +software that matters+.'],
        [
          'I don’t wait to be taught — I build, break, and figure things out.',
          'From frontend to backend to databases, I go *end-to-end* until it works.'
        ],
      ],
      why: 'I believe the best way to predict the future is to build it. I specialize in taking ambiguous ideas and turning them into scalable, functional systems.',
      seeking: [
        'This still feels like day one.',
        'Bigger problems. Real systems. End-to-end.',
        'Java · MERN · Full-Stack · +Ready for what’s next.+',
      ],
      nav: [
        { icon: 'briefcase', label: 'My path', href: '#experience' },
        { icon: 'folder', label: 'What I build', href: '#projects' },
        { icon: 'mail', label: "Let's talk", href: '#contact' },
      ],
      skills: [
        'AI Product Discovery',
        'Solution Architecture',
        'Agentic Workflows',
        'LLMOps',
        'Forward-Deployed',
        'Reliability & Ops',
      ],
      skipButton: 'Skip intro',
    },
    taglines: [] as readonly string[],
    location: 'Seville, ES · EU / USA remote',
    roles: [
      'AI Product Manager',
      'Solutions Architect (No / Low-Code & AI)',
      'AI Forward Deployed Engineer',
    ],
    summary: {
      title: 'Professional Summary',
      p1: 'Founder and product builder focused on',
      p1Highlight: 'AI-powered automation',
      p1End:
        'and no / low-code platforms. After scaling and selling my business (going-concern sale, 2025), I focus on roles where impact compounds: turning ambiguous business goals into secure, measurable, enterprise-ready products and workflows.',
      p2: 'End-to-end ownership across',
      p2Highlight: 'discovery → prioritization → delivery → adoption',
      p2End: ', collaborating closely with stakeholders and engineering.',
      cards: [
        {
          title: 'Builder Mindset',
          desc: 'Small experiments and early evaluation loops to de-risk decisions',
        },
        {
          title: 'Strengths',
          desc: 'Product sense under ambiguity, fast ramp-up (2-4 weeks to production)',
        },
        {
          title: 'Technical Fluency',
          desc: 'APIs, LLM / agent workflows, orchestration, and automation',
        },
      ],
    },
    coreCompetencies: {
      title: 'Core Competencies',
      items: [
        {
          title: 'AI Product Discovery',
          desc: 'Problem definition, AI PRDs, roadmap & prioritization',
        },
        {
          title: 'Enterprise Solution Architecture',
          desc: 'End-to-end system design across departments, APIs / webhooks, data flows, OpenAPI',
        },
        {
          title: 'Agentic Workflows',
          desc: 'LLM agents, tool use, HITL handoff, voice + messaging',
        },
        {
          title: 'LLMOps & AI Governance',
          desc: 'Observability, evals, error handling, retries, SOPs, cost / latency trade-offs, responsible AI',
        },
        {
          title: 'Forward-Deployed Delivery',
          desc: 'Stakeholder workshops, workflow mapping, rapid prototyping',
        },
        {
          title: 'AI Enablement & Thought Leadership',
          desc: 'AI adoption workshops, technical writing with real traction, Teaching Fellow at AI PM Bootcamp',
        },
      ],
    },
    techStack: {
      title: 'Tech Stack',
      categories: [
        {
          name: 'AI / LLM',
          items: [
            'OpenAI (custom GPTs, APIs, agents)',
            'Anthropic Claude (API, workflows)',
            'LangChain (RAG pipelines)',
            'Vercel AI SDK',
            'OpenRouter (multi-LLM routing)',
          ],
        },
        {
          name: 'Automation',
          items: [
            'Playwright (browser automation)',
            'Python scripting (workflow automation)',
            'REST API integrations',
            'Cron jobs / schedulers',
          ],
        },
        {
          name: 'Integrations',
          items: [
            'LinkedIn (automation bots)',
            'Naukri / Indeed (job automation)',
            'Exa Search API',
            'Firebase (auth / realtime)',
            'Third-party APIs',
          ],
        },
        {
          name: 'Dev',
          items: [
            'React.js / Next.js (frontend)',
            'Node.js / Express.js (backend)',
            'Python (AI + automation)',
            'Java (Spring Boot basics)',
            'TypeScript / JavaScript',
            'GraphQL',
          ],
        },
        {
          name: 'Databases',
          items: ['MongoDB', 'MySQL', 'SQLite', 'Firebase'],
        },
        {
          name: 'Infra',
          items: [
            'Vercel (deployment)',
            'Docker (basic usage)',
            'Git & GitHub',
          ],
        },
        {
          name: 'AI Engineering / LLMOps',
          items: [
            'RAG (Retrieval Augmented Generation)',
            'AI Agents (multi-step workflows)',
            'Prompt Engineering',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      githubLink: 'github.com/vivekpeerlagudem',
      viewCode: 'View code',
      viewPrototype: 'View prototype',
      items: [
        {
          title: 'CodeAlert',
          badge: 'Open Source',
          tag: 'Discord Bot',
          desc: 'A Discord bot that fetches live coding contests from an API and posts them in Discord channels using slash commands. Supports /24h, /7days, /mondaytosunday commands.',
          tech: ['Node.js', 'Discord.js', 'JavaScript', 'REST API'],
          link: 'https://github.com/vivekpeerlagudem/CodeAlert-main',
        },
        {
          title: 'Deep Research AI Agent',
          badge: 'Open Source',
          tag: 'AI Agent · Full-Stack',
          desc: 'A powerful deep research AI agent like Gemini or ChatGPT. Generates follow-up questions, crafts optimal search queries, and compiles comprehensive research reports using multiple LLMs.',
          tech: ['Next.js 15', 'TypeScript', 'Vercel AI SDK', 'Exa Search API', 'Tailwind CSS'],
          link: 'https://github.com/vivekpeerlagudem/deep-research-ai-agent',
        },
      ],
    },
    claudeCode: {
      title: 'Claude Code Power User',
      badge: 'High-Agency · AI-Fluency',
      desc: 'My daily workflow is a multi-agent orchestration lab. The problems I solve (context management, inter-agent communication, memory persistence) are the same ones enterprise customers face.',
      highlights: [
        'Multi-agent orchestration: 5+ specialized agents running in parallel via tmux, each with its own context, skills, and hooks',
        'Inter-agent IPC: async communication protocol between agents via JSON — they consult each other for cross-domain decisions',
        'Memory persistence: pre-compact hook that crystallizes knowledge with Haiku before each compaction — memory that survives sessions',
        'Reusable custom skills: automated deploy, tech translation, design systems, SEO, career consulting',
      ],
      certs: [
        { title: 'Building with the Claude API', url: 'https://verify.skilljar.com/c/s4bu5znz53vm' },
        { title: 'Advanced MCP Topics', url: 'https://verify.skilljar.com/c/eiovmq5qaeyd' },
        { title: 'Claude Code in Action', url: 'https://verify.skilljar.com/c/eijx7hwc2x89' },
        { title: 'Introduction to MCP', url: 'https://verify.skilljar.com/c/4pxam3irsioq' },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          company: 'InventiGlobe Pvt. Ltd.',
          logo: '/assets/inventiglobe-logo.avif',
          location: 'Hyderabad, India',
          role: 'Software Developer Intern (R&D)',
          period: '2025',
          desc: 'Building full-stack and AI-powered systems for engineering and business applications. Focused on automation, performance, and scalable backend systems.',
          website: 'https://www.inventiglobe.com',
          workProof: 'https://drive.google.com/file/d/1c3iU6bNK1yV6pt7_pQoUd32MsXD0CfL4/view',
          highlights: [
            'Built and deployed 3+ production web applications (React.js + Node.js)',
            'Improved application performance by ~30%',
            'Automated HR workflows using Python → saved 10+ hours/week',
            'Developed backend APIs and integrated systems end-to-end',
            'Contributed to engineering-focused solutions in automotive & manufacturing domains',
          ],
        },
        {
          company: 'Kinetic Merchandise',
          logo: '/assets/1681840496553.jpg',
          location: 'Hyderabad, India',
          role: 'Data & AI Analytics Intern',
          period: '2023',
          desc: 'Worked on AI-driven analytics and digital marketing systems. Focused on campaign optimization, automation, and data insights.',
          website: 'https://in.linkedin.com/company/kinetic-merchandise',
          workProof: 'https://drive.google.com/file/d/1pJkg33uvGKXJF_GWtzUE_rJqA_B3Te1M/view',
          highlights: [
            'Built AI-driven analytics pipelines improving engagement by ~25%',
            'Developed reporting systems for marketing and campaign analysis',
            'Researched AI, SEO, and Web3 trends for business strategy',
            'Worked on digital marketing automation and data insight systems',
          ],
        },
      ],
      caseStudy: {
        title: 'CASE STUDY BLOCK',
        subtitle: 'AI Systems & Automation',
        desc: 'Building real-world AI systems combining LLMs, automation, and full-stack engineering.',
        items: [
          {
            title: 'Multi-LLM Research Agent',
            tech: 'GPT-4o + Gemini + OpenRouter',
            highlights: [
              'Adaptive query generation and reasoning loops',
              'Auto-generated structured research reports',
              'Built using Next.js + Vercel AI SDK',
            ],
          },
        ],
      },
      learning: {
        title: 'LEARNING & ONLINE WORK',
        subtitle: 'AI & Generative AI Learning',
        desc: 'Completed advanced AI programs and actively building in public.',
        items: [
          'Google Generative AI Program',
          'CS50 AI (Harvard)',
          'ChatGPT Prompt Engineering',
          'Microsoft + LinkedIn GenAI Learning',
          'The Rundown AI Program',
        ],
        cta: 'Explore Activity',
        ctaUrl: 'https://www.linkedin.com/in/vivek-peerlagudem/recent-activity/all/',
        focus: 'LLMs • AI Agents • Prompt Engineering • Automation • Real-world systems',
      },
    },
    linkedinPosts: {
      title: 'Writing',
      cta: 'Read on LinkedIn',
      items: [
        {
          hook: 'Someone just tried to hack my chatbot. I found out in 3 seconds.',
          reactions: '300+',
          comments: '50+',
          url: 'https://www.linkedin.com/posts/vivekpeerlagudem_llmops-ai-observability-activity-7421984735024816128-Dpl_',
        },
        {
          hook: 'Your next business is in this chart. Hint: it\'s not the big bar.',
          reactions: '115+',
          comments: '10+',
          url: 'https://www.linkedin.com/feed/update/urn:li:share:7431057438880980992',
        },
        {
          hook: '3 weeks ago I shared an AI job search system on Reddit. People asked for the code. Yesterday I open sourced it.',
          reactions: '90+',
          comments: '15+',
          url: 'https://www.linkedin.com/feed/update/urn:li:activity:7446828799167520768/',
        },
        {
          hook: "I just sold my company, Vivek iRepair, after 16 years (no, I haven't lost it).",
          reactions: '65+',
          comments: '15+',
          url: 'https://www.linkedin.com/posts/vivekpeerlagudem_opentowork-solutionarchitecture-hyperautomation-activity-7376346077542768640-8brZ',
        },
      ],
    },
    xPost: {
      hook: 'Built this to find my own job. Open sourced it. 41.4K+ stars in two days.',
      hookLinkPrefix: 'Free: ',
      hookLinkUrl: 'career-ops.org',
      quoteAuthor: 'Garry Tan',
      quoteRole: 'CEO, Y Combinator',
      quoteHandle: '@garrytan',
      quoteText: 'Golden age of open source is here',
      quoteReplies: '111',
      quoteRetweets: '537',
      quoteLikes: '6.7K',
      quoteViews: '1.7M',
      quoteUrl: 'https://x.com/garrytan/status/2040891664617848993',
      replies: '100',
      retweets: '493',
      likes: '3.9K',
      views: '539.8K',
      cta: 'View on X',
      url: 'https://x.com/vivekpeerlagudem/status/2041403685696053741',
    },
    redditPosts: [
      {
        hook: 'I built an AI job search system with Claude Code that scored 740+ offers and landed me a job. Just open sourced it.',
        upvotes: '2793',
        comments: '246',
        subreddit: 'r/ClaudeAI',
        cta: 'Read on Reddit',
        url: 'https://www.reddit.com/r/ClaudeAI/comments/1sd2f37/i_built_an_ai_job_search_system_with_claude_code/',
      },
      {
        hook: 'I automated my job search with AI agents — 516 evaluations, 66 applications, zero manual screening.',
        upvotes: '572',
        comments: '359',
        subreddit: 'r/SideProject',
        cta: 'Read on Reddit',
        url: 'https://www.reddit.com/r/SideProject/comments/1rw1lg4/i_automated_my_job_search_with_ai_agents_516/',
      },
      {
        hook: 'I built a WhatsApp + voice AI agent in n8n that handles 90% of customer service. Sold the business, the buyer kept it running without me.',
        upvotes: '317',
        comments: '58',
        subreddit: 'r/n8n',
        cta: 'Read on Reddit',
        url: 'https://www.reddit.com/r/n8n/comments/1sc3i30/i_built_a_whatsapp_voice_ai_agent_in_n8n_that/',
      },
    ],
    speaking: {
      title: 'Sharing',
      slides: 'Slides',
      comingSoon: '',
      aiFluency: {
        title: 'AI Fluency Educator',
        badge: 'Change Management · AI Fluency',
        desc: 'Certified by Anthropic to teach teams and organizations how to adopt AI. The 4D framework: Delegation, Description, Discernment, Diligence — deciding what to delegate, communicating it well, evaluating outputs, and collaborating responsibly. Applied as Teaching Fellow at Maven\'s AI PM Bootcamp.',
        certs: [
          { title: 'Teaching AI Fluency', url: 'https://verify.skilljar.com/c/x3bzuoz99rq5' },
          { title: 'AI Fluency: Framework & Foundations', url: 'https://verify.skilljar.com/c/d6rhfox7ktq6' },
          { title: 'AI Fluency for Educators', url: 'https://verify.skilljar.com/c/2stz4dkso6ho' },
          { title: 'AI Fluency for Students', url: 'https://verify.skilljar.com/c/p9y69uiekbxd' },
        ],
      },
      items: [
        {
          year: '2026',
          event: 'Marily Nika AI PM Bootcamp',
          eventUrl: 'https://maven.com/marily-nika/ai-pm-bootcamp',
          title: 'Teaching Fellow',
          desc: 'Teaching AI product managers to build and ship — not just define.',
          pdf: '',
          featured: true,
        },
        {
          year: '2026',
          event: 'AI Product Academy',
          eventUrl: 'https://maven.com/p/52fc7d/masterclass-n8n-for-p-ms',
          title: 'n8n for Product Managers',
          desc: 'Lightning session on Maven about practical automation for PMs with n8n. From repetitive tasks to AI-powered workflows — no code required.',
          pdf: '',
          materialUrl: '/n8n-for-pms',
          materialLabel: 'Read the Guide',
          featured: false,
        },
        {
          year: '2025',
          event: 'Marily Nika AI PM Bootcamp',
          eventUrl: 'https://maven.com/marily-nika/ai-pm-bootcamp',
          title: "No-Code: The AI PM's Secret Weapon",
          desc: '1h community session on no-code (Zapier, Make, n8n, Airtable) as an AI PM superpower to validate and deliver faster.',
          pdf: '/slides/No-Code-The-AI-PMs-Secret-Weapon.pdf',
          featured: false,
        },
        {
          year: '2025',
          event: 'Local entrepreneurs · Seville',
          eventUrl: '',
          title: 'Hiperautomatiza tu Pyme',
          desc: 'Workshop on hyperautomation for SMEs: orchestration, RPA, AI and governance. Case study: Vivek iRepair.',
          pdf: '/slides/Hiperautomatiza tu Pyme (SFVA).pdf',
          featured: false,
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          year: '2021 – 2025',
          org: 'Vardhaman College of Engineering',
          title: 'Bachelor of Technology in Computer Science & Engineering',
          desc: 'Autonomous institution affiliated with JNTUH, Hyderabad. Relevant coursework: Data Structures, Operating Systems, DBMS, Software Engineering.',
          projectLink: 'vardhaman.org',
          projectLabel: 'View College',
        },
      ],
      achievements: {
        title: "Achievements",
        items: [
          {
            year: "2022",
            title: "3rd Rank — Vardhaman Scholarship Test",
            desc: "Recognised for outstanding academic excellence."
          },
          {
            year: "2023", 
            title: "Recognised Member — World Wide Ideathon",
            desc: "Acknowledged for innovative ideas at an international ideathon."
          },
          {
            year: "2024",
            title: "Consolation Prize — V-Hack",
            desc: "Awarded for Green Buildings sustainable concept."
          }
        ]
      }
    },
    certifications: {
      title: 'Certifications',
      items: [
        {
          year: '2026',
          title: 'Building with the Claude API',
          org: 'Anthropic',
          logo: 'anthropic',
          url: 'https://verify.skilljar.com/c/omkp8z43uq8z',
        },
        {
          year: '2026',
          title: 'Claude Code in Action',
          org: 'Anthropic',
          logo: 'anthropic',
          url: 'https://verify.skilljar.com/c/v8y2wv9fvyr2',
        },
        {
          year: '2026',
          title: 'Introduction to Model Context Protocol',
          org: 'Anthropic',
          logo: 'anthropic',
          url: 'https://verify.skilljar.com/c/d5xrvx7zaio4',
        },
        {
          year: '2026',
          title: 'Advanced MCP / Agent Systems',
          org: 'Anthropic',
          logo: 'anthropic',
          url: 'https://verify.skilljar.com/c/bkarvt2opkpa',
        },
        {
          year: '2026',
          title: 'Claude with Google Cloud Vertex AI',
          org: 'Anthropic',
          logo: 'anthropic',
          url: 'https://verify.skilljar.com/c/ky94cnhc7f52',
        },
        {
          year: '2026',
          title: 'AI Fluency: Framework & Foundations',
          org: 'Anthropic',
          logo: 'anthropic',
          url: 'https://verify.skilljar.com/c/se9pnq5ec9v8',
        },
      ],
    },
    skills: {
      title: 'Skills',
      languages: 'Languages',
      english: 'English',
      professional: 'Fluent Professional',
      technical: 'Technical Skills',
      soft: 'Soft Skills',
      softSkills: [
        'Communication',
        'Leadership',
        'Systems Thinking',
        'Influence without Authority',
        'Ambiguity Management',
      ],
    },
    beyondCode: {
      title: 'Beyond the Code',
      label: 'PERSONAL · SPIRITUAL',
      subtitle: 'Grounded in Stillness',
      desc1: 'Before I write a single line of code, I sit in stillness. Spirituality is not something I practice on weekends — it is the foundation I build everything on. Being young and grounded in quest in knowing the purpose of life has shaped how I think, how I solve problems, and how I show up for people.',
      desc2: 'I built AtmaGyan — a personal spiritual platform rooted in self-realization, Vedantic wisdom, and daily practice. Not for an audience. For myself. Because the inner work matters as much as the outer work.',
      points: [
        'Consistent daily sadhana — meditation, self-inquiry, and stillness',
        'Student of Vedanta, Bhagavad Gita, and Advaita philosophy',
        'Built AtmaGyan.online — a spiritual platform for self-realization',
        'Believes clarity of mind builds clarity of code',
      ],
      quote: {
        text: 'You cannot believe in God until you believe in yourself.',
        author: 'Swami Vivekananda',
      },
      badge: {
        title: 'AtmaGyan.online',
        subtitle: 'quest in knowing the purpose of life',
        cta: 'Visit AtmaGyan → ↗',
        url: 'https://www.atmagyan.online/',
      },
    },
    cta: {
      title: "Let's talk?",
      desc: "I'm looking for a Full-Stack Developer role in India where I can own product delivery, unblock teams through automation, and ship results you can measure. Open to hybrid and remote opportunities.",
      contact: 'Contact',
    },
    ui: {
      languageBanner: 'This site is available in Spanish',
      languageBannerSwitch: 'Switch to ES',
      languageBannerSwitchPrefix: 'Switch to',
      languageBannerSwitchLang: 'ES',
      languageToggle: 'EN',
      typingIndicator: 'vivekpeerlagudem is typing...',
    },
    chat: {
      placeholder: 'Type your question...',
      title: 'vivekpeerlagudem',
      subtitle: 'Ask me about my experience',
      greeting:
        "Hi! I'm **@vivekpeerlagudem**. Ask me anything: experience, projects, what moves me.",
      error: 'Error sending. Please try again.',
      offline: 'Looks like you\'re offline. Check your connection and try again.',
    },
  },
};

export type Lang = 'en';
