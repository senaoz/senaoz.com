type Project = {
  label: string;
  description: string[];
  href?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    label:
      "The Hive — Community Time-Bank Platform",
    github: "https://github.com/senaoz/SWE-574",
    description: [
      "Full-stack web platform enabling users to exchange services using time credits.",
      "Built with React (TypeScript), FastAPI, and MongoDB.",
      "Features include service listings with geospatial search, a community forum with WikiData-powered semantic tagging, real-time chat, 'time-credit transactions', and an admin moderation panel.",
      "Deployed via Docker and GitHub Actions CI/CD to a cloud host.",
      "Companion Android app built with Kotlin and Jetpack Compose.",
    ],
  },
  {
    label:
      "Scholar Radar: Academic Paper Recommendation and an LLM Reranking Audit",
    github: "https://github.com/senaoz/SWE-599",
    description: [
      "Built Scholar Radar as a Graduate Research Project at Boğaziçi University: a recommender that monitors followed institutions on OpenAlex for new papers and lists the Boğaziçi researchers who work on each paper's topic (7,822 cleaned works, 3,648 researchers).",
      "The research question was whether reranking embedding-retrieved candidates with a small local LLM improves recommendation.",
      "A first benchmark suggested it did (MRR 0.84 vs. 0.51); an audit of that evaluation found nine problems, chief among them that cited papers were always shown to the LLM first.",
      "On a rebuilt, leak-free benchmark (118 test queries, 13 methods, five shuffle seeds, Holm-corrected tests), Qwen3-Embedding-8B reached 87.0% R-precision against 43.9% for listwise Llama 3.2 3B, which largely copied its input order: the same model scores MRR 0.95 with cited papers first and 0.33 with them last.",
      "The conclusions held on an 11,967-paper corpus with unit-tested leakage rules and on expertise ratings from 58 researchers, so the LLM stage was removed and the system now uses a single embedding stage.",
      "Paper draft: \"Do Small Local LLM Rerankers Help Scientific Paper Recommendation? An Audit and Re-evaluation with Citation and Human Expertise Labels.\"",
      "Stack: OpenAlex, FastAPI, PostgreSQL/pgvector, llama.cpp, React, TypeScript, Docker.",
    ],
  },
  {
    label: "Code Generation and Quality Checking using LLMs",
    href: "https://drive.google.com/file/d/1sYXYhEuG13qCrz1KzC1Xjd8f30rf4_SO/view?usp=sharing",
    description: [
      "Term paper for SWE 577 at Boğaziçi University, advised by Assoc. Prof. Atay Özgövde.",
      "Analyzed how code-generation benchmarks (HumanEval, MBPP, SWE-bench, SWE-Lancer) serve as proxies for developer trust, arguing that test pass rates miss semantic correctness, maintainability and usability.",
    ],
  },
  {
    label: "Forecasting Model in Pharma Product Sales",
    description: [
      "Undergraduate graduation project at Boğaziçi University, supervised by Prof. Aslı Sencer.",
      "Team of three; built machine-learning and time-series models in Python to forecast SKU-level sales from six linked industry datasets.",
    ],
  },
  {
    label: "House Price Prediction Platform (Model&Frontend)",
    github: "https://github.com/senaoz/dss-frontend",
    description: [
      "Decision Support Systems course project: a regression model of King County house prices with a web frontend.",
      "Shows which factors drive home prices, as decision support for homebuyers.",
    ],
  },
  {
    label: "Covid-19 Tracker Application",
    description: [
      "Created a user-friendly Covid-19 tracker using React, Redux, Tailwind CSS, and TypeScript.",
      "The app provides global and country-specific case data, features an interactive world map, and ensures smooth performance through efficient state management and Docker deployment.",
    ],
    github: "https://github.com/senaoz/covid-tracker",
  },
  {
    label: "Real Estate Scraper",
    description: [
      "Developed a web scraper that extracts information from a real estate listing website using BeautifulSoup, Pandas, Requests, and Numpy, and saves the extracted data in an excel file.",
    ],
    github: "https://github.com/senaoz/get-sahibinden-record",
  },
  {
    label: "Course Registration System",
    description: [
      "Developed a web-based course registration system using vanilla JavaScript, PHP, and MySQL.",
    ],
    github: "https://github.com/senaoz/Registration-Management-System",
  },
  {
    label: "Find My ID",
    description: [
      "Built the authentication module (username & password reset tool) for a web system using JavaScript, Tailwind CSS, and Next.js.",
    ],
  },
];

export const experience = [
  {
    title: "Software Engineer",
    firm: "Maestra.ai",
    timePeriod: "Jul 2024 – Present",
    link: "https://maestra.ai",
    description: [
      "Full-stack engineer on AI transcription, dubbing and real-time captioning products (React, Vue, Node.js, Python; Gemini, Soniox, ElevenLabs).",
      "Built an LLM translation pipeline with provider fallbacks and recovery from malformed model output, and moved voiceover generation onto Google Cloud Tasks with retries and rate limiting.",
      "Built an automated Sentry triage pipeline with Claude Code that collects evidence from Sentry, runs code checks and opens draft fix PRs under a deny-by-default tool guard.",
    ],
  },
  {
    title: "Software Engineer Intern",
    firm: "California State University",
    timePeriod: "Aug – Oct 2023",
    link: "https://www.sjsu.edu/",
    description: [
      "Built an LLM-powered (OpenAI API) platform that gives students feedback on their code and collects that feedback data for model improvement (React, TypeScript, Tailwind CSS, Node.js).",
      "Worked with faculty from design to deployment.",
    ],
  },
  {
    title: "Junior Software Engineer",
    firm: "Orion Innovation",
    link: "https://www.orioninc.com/",
    timePeriod: "Nov 2022 – Nov 2023",
    description: [
      "Worked on a client project for a U.S. genetic-testing company within a 1,200+ developer organization.",
      "Developed reusable, accessible (WCAG) React/TypeScript components for its web and mobile portals, documented in Storybook.",
      "Added visual-regression and unit tests to keep the UI library stable.",
    ],
  },
  {
    title: "Web Application Dev., Team Lead",
    firm: "YetGen",
    link: "https://yetkingencler.com/",
    timePeriod: "Mar 2021 – Jan 2023",
    description: [
      "Led development of a learning management system for 3,500+ learners that replaced a third-party platform, built from scratch over two years as the team grew past ten people.",
      "Designed and implemented its authentication module (JavaScript, Next.js) and took part in designing its database.",
      "Built it around WordPress, Airtable and Moodle with custom Next.js parts so the non-profit could run it without outsourcing, and owned its AWS and Azure infrastructure.",
    ],
  },
  {
    title: "Front-end Engineer Intern",
    firm: "Univerlist",
    link: "https://univerlist.com/",
    timePeriod: "Jul – Aug 2022",
  },
];

export const skills = [
  {
    title: "Languages",
    list: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SwiftUI",
      "SQL",
      "NodeJS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks/Libraries",
    list: [
      "React",
      "Next.js",
      "Vue",
      "Redux",
      "FastAPI",
      "StoryBook",
      "Strapi",
      "Cypress",
    ],
  },
  {
    title: "Tools",
    list: [
      "Git",
      "GitHub",
      "Docker",
      "Sentry",
      "Datadog",
      "Cloudflare",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Others",
    list: [
      "RESTful API",
      "Agile",
      "Scrum",
      "AWS",
      "Google Cloud",
      "Azure",
      "MySQL",
      "PostgreSQL",
    ],
  },
];
