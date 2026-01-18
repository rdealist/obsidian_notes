export const translations = {
  en: {
    nav: {
      brand: "Stone",
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/notes", label: "Notes" },
        { href: "/skills", label: "Skills" },
        { href: "/resume", label: "Resume" },
        { href: "/contact", label: "Contact" },
      ],
      language: {
        zh: "中文",
        en: "EN",
      },
    },
    footer: {
      description:
        "AI Explorer & Product Builder. Passionate about exploring artificial intelligence and building practical applications.",
      sections: [
        {
          title: "Navigate",
          links: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/blog", label: "Blog" },
          ],
        },
        {
          title: "Resources",
          links: [
            { href: "/notes", label: "Notes" },
            { href: "/skills", label: "Skills" },
            { href: "/resume", label: "Resume" },
            { href: "/contact", label: "Contact" },
          ],
        },
      ],
      copyright: "© {year} Stone. All rights reserved.",
      builtWithPrefix: "Built with",
      builtWithSuffix: "using Next.js",
    },
    home: {
      hero: {
        badge: "AI Explorer & Product Builder",
        greeting: "Hi, I'm",
        name: "Stone",
        tagline: "Exploring AI, Building Products",
        subtitle:
          "I'm passionate about the intersection of artificial intelligence and practical applications. Here I share my learning journey, projects, and insights.",
        ctaProjects: "View Projects",
        ctaNotes: "Explore Notes",
        scroll: "Scroll to explore",
      },
      aboutPreview: {
        label: "About Me",
        title: "Crafting the Future with",
        titleHighlight: "AI",
        description:
          "A passionate technologist exploring the boundaries of artificial intelligence and building products that make a difference.",
        highlights: [
          {
            title: "AI/ML Enthusiast",
            description: "Deep diving into LLMs, agents, and practical AI applications",
          },
          {
            title: "Full-Stack Developer",
            description: "Building products from idea to deployment",
          },
          {
            title: "Fast Learner",
            description: "Always exploring new technologies and methodologies",
          },
          {
            title: "Team Player",
            description: "Collaborating to build impactful solutions",
          },
        ],
        cta: "Learn more about me",
      },
      projectsPreview: {
        label: "Featured Projects",
        title: "Things I've",
        titleHighlight: "Built",
        description:
          "A selection of projects that showcase my interests in AI and product development.",
        projects: [
          {
            title: "AI Agent Framework",
            description:
              "A flexible framework for building autonomous AI agents with tool use capabilities.",
            tags: ["Python", "LangChain", "OpenAI"],
            github: "https://github.com/your-username/agent-framework",
            demo: "https://demo.example.com",
          },
          {
            title: "Smart Document Parser",
            description: "Extract structured data from documents using vision models and OCR.",
            tags: ["TypeScript", "Next.js", "Claude"],
            github: "https://github.com/your-username/doc-parser",
          },
          {
            title: "Prompt Library",
            description: "A curated collection of effective prompts for various AI tasks.",
            tags: ["React", "MDX", "Tailwind"],
            demo: "https://prompts.example.com",
          },
        ],
        cta: "View all projects",
      },
      skillsPreview: {
        label: "Skills & Expertise",
        title: "Technologies I",
        titleHighlight: "Work With",
        description: "A blend of AI/ML expertise and full-stack development skills.",
        categories: [
          {
            title: "AI & Machine Learning",
            skills: ["LLM/GPT", "LangChain", "RAG", "Fine-tuning", "Prompt Engineering", "AI Agents"],
            color: "primary",
          },
          {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            color: "secondary",
          },
          {
            title: "Backend",
            skills: ["Python", "Node.js", "FastAPI", "PostgreSQL", "Redis"],
            color: "accent",
          },
          {
            title: "DevOps & Tools",
            skills: ["Docker", "Git", "Vercel", "AWS", "CI/CD"],
            color: "primary",
          },
        ],
        cta: "See all skills & prompts",
      },
      blogPreview: {
        label: "Latest Posts",
        title: "From the",
        titleHighlight: "Blog",
        description:
          "Thoughts, tutorials, and insights on AI, technology, and product building.",
        posts: [
          {
            title: "Understanding Transformer Architecture",
            excerpt: "A deep dive into the attention mechanism and how transformers revolutionized NLP.",
            date: "2025-01-15",
            readTime: "8 min read",
            tags: ["AI", "Deep Learning"],
            slug: "understanding-transformers",
          },
          {
            title: "Building AI Agents with LangChain",
            excerpt: "Learn how to create autonomous agents that can use tools and make decisions.",
            date: "2025-01-10",
            readTime: "12 min read",
            tags: ["LangChain", "Agents"],
            slug: "ai-agents-langchain",
          },
          {
            title: "RAG Systems: Best Practices",
            excerpt: "Retrieval-Augmented Generation explained with practical implementation tips.",
            date: "2025-01-05",
            readTime: "10 min read",
            tags: ["RAG", "LLM"],
            slug: "rag-best-practices",
          },
        ],
        cta: "View all posts",
      },
      cta: {
        title: "Let's Build Something",
        titleHighlight: "Amazing",
        description:
          "Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you!",
        primary: "Get in Touch",
        secondary: "View Resume",
      },
    },
    pages: {
      about: {
        header: {
          label: "About Me",
          title: "Hi, I'm",
          name: "Stone",
          subtitle: "AI Explorer, Product Builder, and Lifelong Learner",
        },
        location: "Based in China",
        bio: {
          paragraphs: [
            "I'm passionate about the intersection of artificial intelligence and practical product development. My journey in tech has taken me from full-stack development to AI/ML exploration, always with a focus on building things that matter.",
            "Currently, I'm focused on understanding and applying Large Language Models (LLMs), building AI agents, and creating products that leverage these powerful technologies.",
            "I believe in learning in public - sharing my journey, insights, and experiments with the community. This site is a reflection of that philosophy.",
          ],
        },
        timelineTitle: "My Journey",
        timeline: [
          {
            year: "2024",
            title: "AI Product Builder",
            description: "Building AI-powered products and exploring LLM applications",
          },
          {
            year: "2023",
            title: "Deep Dive into AI",
            description: "Started intensive learning journey in AI/ML and LLMs",
          },
          {
            year: "2022",
            title: "Tech Entrepreneur",
            description: "Founded and scaled multiple tech products",
          },
          {
            year: "2020",
            title: "Full-Stack Developer",
            description: "Building web applications and mastering modern frameworks",
          },
        ],
        interestsTitle: "Things I",
        interests: [
          { name: "AI Research" },
          { name: "Product Design" },
          { name: "Open Source" },
          { name: "Coffee" },
        ],
      },
      contact: {
        header: {
          label: "Get in Touch",
          title: "Let's",
          titleHighlight: "Connect",
          description:
            "Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you!",
        },
        form: {
          title: "Send a Message",
          fields: {
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
          },
          placeholders: {
            name: "Your name",
            email: "your@email.com",
            subject: "What's this about?",
            message: "Your message...",
          },
          submit: "Send Message",
        },
        info: {
          title: "Contact Info",
          locationLabel: "Location",
          locationValue: "China (Remote-friendly)",
          responseLabel: "Response Time",
          responseValue: "Usually within 24 hours",
        },
        socialTitle: "Find Me Online",
        methods: [
          {
            label: "Email",
            value: "your@email.com",
            href: "mailto:your@email.com",
            description: "Best for professional inquiries",
          },
          {
            label: "Twitter",
            value: "@your-username",
            href: "https://twitter.com/your-username",
            description: "Quick questions and DMs",
          },
          {
            label: "GitHub",
            value: "your-username",
            href: "https://github.com/your-username",
            description: "Open source collaboration",
          },
          {
            label: "LinkedIn",
            value: "your-username",
            href: "https://linkedin.com/in/your-username",
            description: "Professional networking",
          },
        ],
      },
      projects: {
        header: {
          label: "My Work",
          title: "Projects &",
          titleHighlight: "Experiments",
          description: "A collection of things I've built, explored, and experimented with.",
        },
        featuredTitle: "Featured Projects",
        otherTitle: "Other Projects",
        linkLabels: {
          code: "Code",
          demo: "Demo",
        },
        statuses: {
          active: "Active",
          beta: "Beta",
          archived: "Archived",
        },
        projects: [
          {
            title: "AI Agent Framework",
            description:
              "A flexible framework for building autonomous AI agents with tool use capabilities. Supports multiple LLM providers and custom tool definitions.",
            tags: ["Python", "LangChain", "OpenAI", "Claude"],
            github: "https://github.com/your-username/agent-framework",
            demo: "https://demo.example.com",
            featured: true,
            status: "active",
          },
          {
            title: "Smart Document Parser",
            description:
              "Extract structured data from documents using vision models and OCR. Supports PDFs, images, and scanned documents.",
            tags: ["TypeScript", "Next.js", "Claude Vision", "Tesseract"],
            github: "https://github.com/your-username/doc-parser",
            featured: true,
            status: "active",
          },
          {
            title: "Prompt Library",
            description:
              "A curated collection of effective prompts for various AI tasks. Includes categorization, search, and version control.",
            tags: ["React", "MDX", "Tailwind", "Vercel"],
            demo: "https://prompts.example.com",
            featured: true,
            status: "active",
          },
          {
            title: "RAG Pipeline",
            description:
              "Production-ready RAG system with hybrid search, re-ranking, and citation support.",
            tags: ["Python", "FastAPI", "Pinecone", "LlamaIndex"],
            github: "https://github.com/your-username/rag-pipeline",
            status: "beta",
          },
          {
            title: "AI Chat Widget",
            description:
              "Embeddable chat widget powered by LLMs. Easy integration with any website.",
            tags: ["TypeScript", "Web Components", "OpenAI"],
            github: "https://github.com/your-username/chat-widget",
            demo: "https://chat.example.com",
            status: "active",
          },
          {
            title: "Model Benchmark Tool",
            description:
              "Compare and evaluate different LLM models on custom datasets with detailed metrics.",
            tags: ["Python", "Streamlit", "Pandas"],
            github: "https://github.com/your-username/model-benchmark",
            status: "archived",
          },
        ],
      },
      skills: {
        header: {
          label: "Capabilities",
          title: "Skills &",
          titleHighlight: "Prompts",
          description: "Technical skills I've developed and prompt templates I use regularly.",
        },
        skillsTitle: "Technical Skills",
        promptTitle: "Prompt Templates",
        copyPrompt: "Copy prompt",
        categories: [
          {
            title: "AI & Machine Learning",
            skills: [
              { name: "Large Language Models", level: 90 },
              { name: "Prompt Engineering", level: 95 },
              { name: "RAG Systems", level: 85 },
              { name: "AI Agents", level: 80 },
              { name: "Fine-tuning", level: 70 },
              { name: "LangChain", level: 85 },
            ],
          },
          {
            title: "Frontend Development",
            skills: [
              { name: "React/Next.js", level: 90 },
              { name: "TypeScript", level: 85 },
              { name: "Tailwind CSS", level: 95 },
              { name: "HTML/CSS", level: 90 },
              { name: "Framer Motion", level: 75 },
            ],
          },
          {
            title: "Backend Development",
            skills: [
              { name: "Python", level: 85 },
              { name: "Node.js", level: 80 },
              { name: "FastAPI", level: 80 },
              { name: "PostgreSQL", level: 75 },
              { name: "Redis", level: 70 },
            ],
          },
          {
            title: "DevOps & Tools",
            skills: [
              { name: "Git", level: 90 },
              { name: "Docker", level: 75 },
              { name: "Vercel", level: 85 },
              { name: "AWS", level: 65 },
              { name: "CI/CD", level: 70 },
            ],
          },
        ],
        prompts: [
          {
            title: "Code Reviewer",
            category: "Development",
            description: "A prompt for reviewing code with best practices in mind",
            prompt: `You are an expert code reviewer. Review the following code for:
1. Bugs and potential issues
2. Performance optimizations
3. Security vulnerabilities
4. Code style and readability
5. Best practices

Provide specific, actionable feedback with examples.`,
          },
          {
            title: "Technical Writer",
            category: "Documentation",
            description: "Generate clear technical documentation",
            prompt: `You are a technical writer. Create documentation for the following:
- Start with a clear overview
- Include usage examples
- Document all parameters/options
- Add troubleshooting tips
- Use clear, concise language`,
          },
          {
            title: "AI Tutor",
            category: "Education",
            description: "Explain complex concepts in simple terms",
            prompt: `You are a patient and knowledgeable tutor. Explain the concept as if teaching someone new to the field:
1. Start with a simple analogy
2. Build up to the technical details
3. Provide practical examples
4. Check for understanding with questions`,
          },
        ],
      },
      blog: {
        header: {
          label: "Blog",
          title: "Thoughts &",
          titleHighlight: "Insights",
          description: "Writing about AI, technology, and the journey of building things.",
        },
        searchPlaceholder: "Search posts...",
        featuredTitle: "Featured",
        recentTitle: "Recent Posts",
        posts: [
          {
            title: "Understanding Transformer Architecture",
            excerpt:
              "A deep dive into the attention mechanism and how transformers revolutionized NLP and beyond.",
            date: "2025-01-15",
            readTime: "8 min read",
            tags: ["AI", "Deep Learning", "Transformers"],
            slug: "understanding-transformers",
            featured: true,
          },
          {
            title: "Building AI Agents with LangChain",
            excerpt:
              "Learn how to create autonomous agents that can use tools, make decisions, and solve complex problems.",
            date: "2025-01-10",
            readTime: "12 min read",
            tags: ["LangChain", "AI Agents", "Python"],
            slug: "ai-agents-langchain",
            featured: true,
          },
          {
            title: "RAG Systems: Best Practices",
            excerpt:
              "Retrieval-Augmented Generation explained with practical implementation tips and common pitfalls to avoid.",
            date: "2025-01-05",
            readTime: "10 min read",
            tags: ["RAG", "LLM", "Vector Search"],
            slug: "rag-best-practices",
            featured: true,
          },
          {
            title: "Prompt Engineering Techniques",
            excerpt: "Master the art of crafting effective prompts for better AI outputs.",
            date: "2024-12-28",
            readTime: "6 min read",
            tags: ["Prompt Engineering", "LLM"],
            slug: "prompt-engineering",
          },
          {
            title: "Fine-tuning vs RAG: When to Use What",
            excerpt: "Compare two popular approaches to customizing LLM behavior for your use case.",
            date: "2024-12-20",
            readTime: "9 min read",
            tags: ["Fine-tuning", "RAG", "LLM"],
            slug: "finetuning-vs-rag",
          },
          {
            title: "Building a Modern Personal Website",
            excerpt: "How I built this site with Next.js, Tailwind CSS, and a touch of AI flair.",
            date: "2024-12-15",
            readTime: "7 min read",
            tags: ["Next.js", "Tailwind", "Web Dev"],
            slug: "building-personal-website",
          },
        ],
      },
      notes: {
        header: {
          label: "Knowledge Base",
          title: "AI Learning",
          titleHighlight: "Notes",
          description: "A collection of notes on AI, machine learning, and related technologies.",
        },
        searchPlaceholder: "Search notes...",
        categoriesTitle: "Categories",
        recentTitle: "Recent Notes",
        countLabel: "notes",
        categories: [
          {
            title: "Core Concepts",
            description: "AI, ML, DL fundamentals, neural networks, AGI",
            slug: "core-concepts",
            count: 15,
          },
          {
            title: "Model Architecture",
            description: "Transformer, attention mechanisms, model components",
            slug: "model-architecture",
            count: 12,
          },
          {
            title: "Training & Learning",
            description: "Pre-training, fine-tuning, RLHF, reinforcement learning",
            slug: "training",
            count: 18,
          },
          {
            title: "Prompt Engineering",
            description: "Prompt design, in-context learning, CoT",
            slug: "prompting",
            count: 10,
          },
          {
            title: "RAG & Retrieval",
            description: "Vector search, embedding, RAG systems",
            slug: "rag",
            count: 8,
          },
          {
            title: "AI Agents",
            description: "Autonomous agents, tool use, planning",
            slug: "agents",
            count: 6,
          },
        ],
        recent: [
          {
            title: "Understanding Attention Mechanism",
            excerpt: "How attention works in transformers and why it's so effective.",
            date: "2025-01-15",
            category: "Model Architecture",
            slug: "attention-mechanism",
          },
          {
            title: "Chain-of-Thought Prompting",
            excerpt: "Step-by-step reasoning for better LLM outputs.",
            date: "2025-01-12",
            category: "Prompt Engineering",
            slug: "chain-of-thought",
          },
          {
            title: "Vector Embeddings Explained",
            excerpt: "How text is converted to numbers and why it matters.",
            date: "2025-01-10",
            category: "RAG & Retrieval",
            slug: "vector-embeddings",
          },
        ],
      },
      resume: {
        header: {
          name: "Stone",
          title: "AI Explorer & Product Builder",
          location: "China",
          email: "your@email.com",
          download: "Download PDF",
        },
        sections: {
          experience: "Experience",
          skills: "Skills",
          education: "Education",
          certifications: "Certifications",
        },
        experience: [
          {
            title: "AI Product Builder",
            company: "Independent",
            period: "2024 - Present",
            location: "Remote",
            description: [
              "Building AI-powered products and applications",
              "Exploring LLM capabilities and developing AI agents",
              "Creating tools for developers and businesses",
            ],
          },
          {
            title: "Tech Entrepreneur",
            company: "Startup",
            period: "2022 - 2024",
            location: "China",
            description: [
              "Founded and scaled multiple tech products",
              "Led product development and technical strategy",
              "Managed cross-functional teams",
            ],
          },
          {
            title: "Full-Stack Developer",
            company: "Tech Company",
            period: "2020 - 2022",
            location: "China",
            description: [
              "Developed web applications using React and Node.js",
              "Implemented CI/CD pipelines and DevOps practices",
              "Collaborated with design and product teams",
            ],
          },
        ],
        skills: [
          {
            category: "AI/ML",
            items: ["LLMs", "Prompt Engineering", "RAG", "LangChain", "Fine-tuning"],
          },
          {
            category: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          },
          {
            category: "Backend",
            items: ["Python", "Node.js", "FastAPI", "PostgreSQL"],
          },
          {
            category: "DevOps",
            items: ["Docker", "Git", "AWS", "Vercel", "CI/CD"],
          },
        ],
        education: [
          {
            degree: "Bachelor's Degree",
            school: "University",
            period: "2016 - 2020",
            field: "Computer Science",
          },
        ],
        certifications: [
          {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
          },
          {
            name: "Google Cloud Professional",
            issuer: "Google",
            date: "2022",
          },
        ],
      },
    },
  },
  zh: {
    nav: {
      brand: "Stone",
      links: [
        { href: "/", label: "首页" },
        { href: "/about", label: "关于" },
        { href: "/projects", label: "项目" },
        { href: "/blog", label: "博客" },
        { href: "/notes", label: "笔记" },
        { href: "/skills", label: "技能" },
        { href: "/resume", label: "简历" },
        { href: "/contact", label: "联系" },
      ],
      language: {
        zh: "中文",
        en: "EN",
      },
    },
    footer: {
      description: "AI 探索者与产品构建者。热衷于探索人工智能并打造实用应用。",
      sections: [
        {
          title: "导航",
          links: [
            { href: "/", label: "首页" },
            { href: "/about", label: "关于" },
            { href: "/projects", label: "项目" },
            { href: "/blog", label: "博客" },
          ],
        },
        {
          title: "资源",
          links: [
            { href: "/notes", label: "笔记" },
            { href: "/skills", label: "技能" },
            { href: "/resume", label: "简历" },
            { href: "/contact", label: "联系" },
          ],
        },
      ],
      copyright: "© {year} Stone。保留所有权利。",
      builtWithPrefix: "由",
      builtWithSuffix: "使用 Next.js 构建",
    },
    home: {
      hero: {
        badge: "AI 探索者 & 产品构建者",
        greeting: "你好，我是",
        name: "Stone",
        tagline: "探索 AI，打造产品",
        subtitle: "我热衷于人工智能与实际应用的交汇点。在这里分享我的学习旅程、项目与思考。",
        ctaProjects: "查看项目",
        ctaNotes: "浏览笔记",
        scroll: "向下滚动探索",
      },
      aboutPreview: {
        label: "关于我",
        title: "用",
        titleHighlight: "AI 打造未来",
        description: "热爱技术，探索人工智能的边界，打造真正有影响力的产品。",
        highlights: [
          {
            title: "AI/ML 爱好者",
            description: "深入研究 LLM、智能体与 AI 实践应用",
          },
          {
            title: "全栈开发者",
            description: "从想法到上线构建产品",
          },
          {
            title: "快速学习者",
            description: "持续探索新技术与新方法",
          },
          {
            title: "团队协作者",
            description: "协作打造有影响力的解决方案",
          },
        ],
        cta: "了解更多",
      },
      projectsPreview: {
        label: "精选项目",
        title: "我打造的",
        titleHighlight: "作品",
        description: "精选展示我在 AI 与产品开发方面的项目。",
        projects: [
          {
            title: "AI 智能体框架",
            description: "用于构建具备工具调用能力的自治 AI 智能体的灵活框架。",
            tags: ["Python", "LangChain", "OpenAI"],
            github: "https://github.com/your-username/agent-framework",
            demo: "https://demo.example.com",
          },
          {
            title: "智能文档解析器",
            description: "利用视觉模型与 OCR 从文档中提取结构化数据。",
            tags: ["TypeScript", "Next.js", "Claude"],
            github: "https://github.com/your-username/doc-parser",
          },
          {
            title: "提示词库",
            description: "面向多种 AI 任务的高效提示词合集。",
            tags: ["React", "MDX", "Tailwind"],
            demo: "https://prompts.example.com",
          },
        ],
        cta: "查看全部项目",
      },
      skillsPreview: {
        label: "技能与专长",
        title: "我使用的",
        titleHighlight: "技术",
        description: "融合 AI/ML 专长与全栈开发能力。",
        categories: [
          {
            title: "AI 与机器学习",
            skills: ["LLM/GPT", "LangChain", "RAG", "微调", "提示工程", "AI 智能体"],
            color: "primary",
          },
          {
            title: "前端",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            color: "secondary",
          },
          {
            title: "后端",
            skills: ["Python", "Node.js", "FastAPI", "PostgreSQL", "Redis"],
            color: "accent",
          },
          {
            title: "DevOps 与工具",
            skills: ["Docker", "Git", "Vercel", "AWS", "CI/CD"],
            color: "primary",
          },
        ],
        cta: "查看全部技能与提示词",
      },
      blogPreview: {
        label: "最新文章",
        title: "来自",
        titleHighlight: "博客",
        description: "关于 AI、技术与产品构建的想法、教程与洞见。",
        posts: [
          {
            title: "理解 Transformer 架构",
            excerpt: "深入解析注意力机制，以及 Transformer 如何革新 NLP。",
            date: "2025-01-15",
            readTime: "8 分钟阅读",
            tags: ["AI", "Deep Learning"],
            slug: "understanding-transformers",
          },
          {
            title: "用 LangChain 构建 AI 智能体",
            excerpt: "学习如何创建能够使用工具并做出决策的自治智能体。",
            date: "2025-01-10",
            readTime: "12 分钟阅读",
            tags: ["LangChain", "Agents"],
            slug: "ai-agents-langchain",
          },
          {
            title: "RAG 系统：最佳实践",
            excerpt: "解析检索增强生成的实现要点与实践建议。",
            date: "2025-01-05",
            readTime: "10 分钟阅读",
            tags: ["RAG", "LLM"],
            slug: "rag-best-practices",
          },
        ],
        cta: "查看全部文章",
      },
      cta: {
        title: "一起打造",
        titleHighlight: "非凡作品",
        description: "有项目想法？想要合作？或者只是打个招呼？很乐意听你说！",
        primary: "联系我",
        secondary: "查看简历",
      },
    },
    pages: {
      about: {
        header: {
          label: "关于我",
          title: "你好，我是",
          name: "Stone",
          subtitle: "AI 探索者、产品构建者、终身学习者",
        },
        location: "位于中国",
        bio: {
          paragraphs: [
            "我热衷于人工智能与实际产品开发的交汇点。我的技术之旅从全栈开发走向 AI/ML 探索，始终专注于打造有价值的东西。",
            "目前我专注于理解与应用大语言模型（LLM），构建 AI 智能体，并打造利用这些强大技术的产品。",
            "我相信“公开学习”——与社区分享我的旅程、见解与实验。本网站正是这一理念的体现。",
          ],
        },
        timelineTitle: "我的旅程",
        timeline: [
          {
            year: "2024",
            title: "AI 产品构建者",
            description: "打造 AI 驱动的产品并探索 LLM 应用",
          },
          {
            year: "2023",
            title: "深入 AI",
            description: "开始在 AI/ML 与 LLM 领域进行系统学习",
          },
          {
            year: "2022",
            title: "科技创业者",
            description: "创办并规模化多个科技产品",
          },
          {
            year: "2020",
            title: "全栈开发者",
            description: "构建 Web 应用并掌握现代框架",
          },
        ],
        interestsTitle: "我喜欢的事",
        interests: [
          { name: "AI 研究" },
          { name: "产品设计" },
          { name: "开源" },
          { name: "咖啡" },
        ],
      },
      contact: {
        header: {
          label: "取得联系",
          title: "保持",
          titleHighlight: "联系",
          description: "有项目想法？想合作？或者只是打个招呼？很乐意听你说！",
        },
        form: {
          title: "发送消息",
          fields: {
            name: "姓名",
            email: "邮箱",
            subject: "主题",
            message: "留言",
          },
          placeholders: {
            name: "你的姓名",
            email: "your@email.com",
            subject: "主题是什么？",
            message: "你的消息...",
          },
          submit: "发送消息",
        },
        info: {
          title: "联系方式",
          locationLabel: "所在地",
          locationValue: "中国（可远程）",
          responseLabel: "回复时间",
          responseValue: "通常 24 小时内",
        },
        socialTitle: "线上找到我",
        methods: [
          {
            label: "邮箱",
            value: "your@email.com",
            href: "mailto:your@email.com",
            description: "适合商务咨询",
          },
          {
            label: "Twitter",
            value: "@your-username",
            href: "https://twitter.com/your-username",
            description: "快速提问与私信",
          },
          {
            label: "GitHub",
            value: "your-username",
            href: "https://github.com/your-username",
            description: "开源协作",
          },
          {
            label: "LinkedIn",
            value: "your-username",
            href: "https://linkedin.com/in/your-username",
            description: "职业社交",
          },
        ],
      },
      projects: {
        header: {
          label: "我的作品",
          title: "项目与",
          titleHighlight: "实验",
          description: "我构建、探索与实验的作品合集。",
        },
        featuredTitle: "精选项目",
        otherTitle: "其他项目",
        linkLabels: {
          code: "代码",
          demo: "演示",
        },
        statuses: {
          active: "进行中",
          beta: "测试版",
          archived: "已归档",
        },
        projects: [
          {
            title: "AI 智能体框架",
            description:
              "用于构建具备工具调用能力的自治 AI 智能体的灵活框架，支持多种 LLM 提供商与自定义工具。",
            tags: ["Python", "LangChain", "OpenAI", "Claude"],
            github: "https://github.com/your-username/agent-framework",
            demo: "https://demo.example.com",
            featured: true,
            status: "active",
          },
          {
            title: "智能文档解析器",
            description: "利用视觉模型与 OCR 从文档中提取结构化数据，支持 PDF、图片与扫描件。",
            tags: ["TypeScript", "Next.js", "Claude Vision", "Tesseract"],
            github: "https://github.com/your-username/doc-parser",
            featured: true,
            status: "active",
          },
          {
            title: "提示词库",
            description: "面向多种 AI 任务的高效提示词合集，支持分类、搜索与版本管理。",
            tags: ["React", "MDX", "Tailwind", "Vercel"],
            demo: "https://prompts.example.com",
            featured: true,
            status: "active",
          },
          {
            title: "RAG 流水线",
            description: "生产级 RAG 系统，支持混合检索、重排序与引用。",
            tags: ["Python", "FastAPI", "Pinecone", "LlamaIndex"],
            github: "https://github.com/your-username/rag-pipeline",
            status: "beta",
          },
          {
            title: "AI 聊天组件",
            description: "基于 LLM 的可嵌入聊天组件，轻松集成到任意网站。",
            tags: ["TypeScript", "Web Components", "OpenAI"],
            github: "https://github.com/your-username/chat-widget",
            demo: "https://chat.example.com",
            status: "active",
          },
          {
            title: "模型评测工具",
            description: "在自定义数据集上对不同 LLM 进行对比评估并提供详细指标。",
            tags: ["Python", "Streamlit", "Pandas"],
            github: "https://github.com/your-username/model-benchmark",
            status: "archived",
          },
        ],
      },
      skills: {
        header: {
          label: "能力",
          title: "技能与",
          titleHighlight: "提示词",
          description: "我积累的技术技能与常用提示词模板。",
        },
        skillsTitle: "技术技能",
        promptTitle: "提示词模板",
        copyPrompt: "复制提示词",
        categories: [
          {
            title: "AI 与机器学习",
            skills: [
              { name: "大语言模型", level: 90 },
              { name: "提示工程", level: 95 },
              { name: "RAG 系统", level: 85 },
              { name: "AI 智能体", level: 80 },
              { name: "微调", level: 70 },
              { name: "LangChain", level: 85 },
            ],
          },
          {
            title: "前端开发",
            skills: [
              { name: "React/Next.js", level: 90 },
              { name: "TypeScript", level: 85 },
              { name: "Tailwind CSS", level: 95 },
              { name: "HTML/CSS", level: 90 },
              { name: "Framer Motion", level: 75 },
            ],
          },
          {
            title: "后端开发",
            skills: [
              { name: "Python", level: 85 },
              { name: "Node.js", level: 80 },
              { name: "FastAPI", level: 80 },
              { name: "PostgreSQL", level: 75 },
              { name: "Redis", level: 70 },
            ],
          },
          {
            title: "DevOps 与工具",
            skills: [
              { name: "Git", level: 90 },
              { name: "Docker", level: 75 },
              { name: "Vercel", level: 85 },
              { name: "AWS", level: 65 },
              { name: "CI/CD", level: 70 },
            ],
          },
        ],
        prompts: [
          {
            title: "代码审查员",
            category: "开发",
            description: "用于按最佳实践审查代码的提示词",
            prompt: `你是一名资深代码审查员。请从以下方面审查代码：
1. Bug 与潜在问题
2. 性能优化
3. 安全漏洞
4. 代码风格与可读性
5. 最佳实践

请提供具体、可执行的反馈，并给出示例。`,
          },
          {
            title: "技术写作",
            category: "文档",
            description: "生成清晰的技术文档",
            prompt: `你是一名技术写作者。请为以下内容撰写文档：
- 先给出清晰的概览
- 包含使用示例
- 记录所有参数/选项
- 提供故障排查建议
- 使用清晰、简洁的语言`,
          },
          {
            title: "AI 导师",
            category: "教育",
            description: "用简单的方式解释复杂概念",
            prompt: `你是一位耐心且知识丰富的导师。请用面向新手的方式解释该概念：
1. 先给出一个简单类比
2. 逐步引入技术细节
3. 给出实际示例
4. 通过提问检查理解`,
          },
        ],
      },
      blog: {
        header: {
          label: "博客",
          title: "思考与",
          titleHighlight: "洞见",
          description: "记录 AI、技术与构建过程的思考。",
        },
        searchPlaceholder: "搜索文章...",
        featuredTitle: "精选",
        recentTitle: "最新文章",
        posts: [
          {
            title: "理解 Transformer 架构",
            excerpt: "深入解析注意力机制，以及 Transformer 如何革新 NLP 与其他领域。",
            date: "2025-01-15",
            readTime: "8 分钟阅读",
            tags: ["AI", "Deep Learning", "Transformers"],
            slug: "understanding-transformers",
            featured: true,
          },
          {
            title: "用 LangChain 构建 AI 智能体",
            excerpt: "学习如何创建能使用工具、做出决策并解决复杂问题的自治智能体。",
            date: "2025-01-10",
            readTime: "12 分钟阅读",
            tags: ["LangChain", "AI Agents", "Python"],
            slug: "ai-agents-langchain",
            featured: true,
          },
          {
            title: "RAG 系统：最佳实践",
            excerpt: "结合实践建议与常见坑，讲清楚检索增强生成。",
            date: "2025-01-05",
            readTime: "10 分钟阅读",
            tags: ["RAG", "LLM", "Vector Search"],
            slug: "rag-best-practices",
            featured: true,
          },
          {
            title: "提示工程技巧",
            excerpt: "掌握打造高质量提示词的艺术。",
            date: "2024-12-28",
            readTime: "6 分钟阅读",
            tags: ["Prompt Engineering", "LLM"],
            slug: "prompt-engineering",
          },
          {
            title: "微调 vs RAG：如何选择",
            excerpt: "对比两种常见 LLM 定制方式，帮你按场景选择。",
            date: "2024-12-20",
            readTime: "9 分钟阅读",
            tags: ["Fine-tuning", "RAG", "LLM"],
            slug: "finetuning-vs-rag",
          },
          {
            title: "构建现代个人网站",
            excerpt: "分享我如何用 Next.js、Tailwind CSS 与一点 AI 灵感打造本站。",
            date: "2024-12-15",
            readTime: "7 分钟阅读",
            tags: ["Next.js", "Tailwind", "Web Dev"],
            slug: "building-personal-website",
          },
        ],
      },
      notes: {
        header: {
          label: "知识库",
          title: "AI 学习",
          titleHighlight: "笔记",
          description: "关于 AI、机器学习及相关技术的笔记合集。",
        },
        searchPlaceholder: "搜索笔记...",
        categoriesTitle: "分类",
        recentTitle: "最新笔记",
        countLabel: "篇",
        categories: [
          {
            title: "核心概念",
            description: "AI、ML、DL 基础，神经网络，AGI",
            slug: "core-concepts",
            count: 15,
          },
          {
            title: "模型架构",
            description: "Transformer、注意力机制、模型组件",
            slug: "model-architecture",
            count: 12,
          },
          {
            title: "训练与学习",
            description: "预训练、微调、RLHF、强化学习",
            slug: "training",
            count: 18,
          },
          {
            title: "提示工程",
            description: "提示词设计、上下文学习、思维链",
            slug: "prompting",
            count: 10,
          },
          {
            title: "RAG 与检索",
            description: "向量检索、嵌入、RAG 系统",
            slug: "rag",
            count: 8,
          },
          {
            title: "AI 智能体",
            description: "自治智能体、工具调用、规划",
            slug: "agents",
            count: 6,
          },
        ],
        recent: [
          {
            title: "理解注意力机制",
            excerpt: "解析 Transformer 中的注意力机制及其高效原因。",
            date: "2025-01-15",
            category: "模型架构",
            slug: "attention-mechanism",
          },
          {
            title: "思维链提示",
            excerpt: "通过分步推理提升 LLM 输出质量。",
            date: "2025-01-12",
            category: "提示工程",
            slug: "chain-of-thought",
          },
          {
            title: "向量嵌入解析",
            excerpt: "文本如何转化为数字以及为何重要。",
            date: "2025-01-10",
            category: "RAG 与检索",
            slug: "vector-embeddings",
          },
        ],
      },
      resume: {
        header: {
          name: "Stone",
          title: "AI 探索者 & 产品构建者",
          location: "中国",
          email: "your@email.com",
          download: "下载 PDF",
        },
        sections: {
          experience: "经历",
          skills: "技能",
          education: "教育",
          certifications: "证书",
        },
        experience: [
          {
            title: "AI 产品构建者",
            company: "独立开发",
            period: "2024 - 至今",
            location: "远程",
            description: [
              "打造 AI 驱动的产品与应用",
              "探索 LLM 能力并开发 AI 智能体",
              "为开发者与企业打造工具",
            ],
          },
          {
            title: "科技创业者",
            company: "创业公司",
            period: "2022 - 2024",
            location: "中国",
            description: [
              "创办并规模化多个科技产品",
              "主导产品研发与技术策略",
              "管理跨职能团队",
            ],
          },
          {
            title: "全栈开发者",
            company: "科技公司",
            period: "2020 - 2022",
            location: "中国",
            description: [
              "使用 React 与 Node.js 开发 Web 应用",
              "落地 CI/CD 流水线与 DevOps 实践",
              "与设计和产品团队协作",
            ],
          },
        ],
        skills: [
          {
            category: "AI/ML",
            items: ["LLMs", "提示工程", "RAG", "LangChain", "微调"],
          },
          {
            category: "前端",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          },
          {
            category: "后端",
            items: ["Python", "Node.js", "FastAPI", "PostgreSQL"],
          },
          {
            category: "DevOps",
            items: ["Docker", "Git", "AWS", "Vercel", "CI/CD"],
          },
        ],
        education: [
          {
            degree: "学士学位",
            school: "大学",
            period: "2016 - 2020",
            field: "计算机科学",
          },
        ],
        certifications: [
          {
            name: "AWS 认证解决方案架构师",
            issuer: "Amazon Web Services",
            date: "2023",
          },
          {
            name: "Google Cloud 专业认证",
            issuer: "Google",
            date: "2022",
          },
        ],
      },
    },
  },
} as const;

export type Translations = typeof translations.en;
