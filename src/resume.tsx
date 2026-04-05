export const projects = [
  {
    label:
      "The Hive — Community Time-Bank Platform",
    github: "https://github.com/senaoz/SWE-574",
    description:
      "Full-stack web platform enabling users to exchange services using time credits. Built with React (TypeScript), FastAPI, and MongoDB. Features include service listings with geospatial search, a community forum with WikiData-powered semantic tagging, real-time chat, 'time-credit transactions', and an admin moderation panel. Deployed via Docker and GitHub Actions CI/CD to a cloud host. Companion Android app built with Kotlin and Jetpack Compose.  ",
  },
  {
    label: "Academic Publication Recommendation System",
    github: "https://github.com/senaoz/SWE-599",
    description:
      "Built an automated recommendation and matching system for academic publications as part of an M.S. thesis project. The system monitors followed institutions for new paper releases and matches them against a local corpus of Boğaziçi University researchers using vector similarity search. Implemented a multi-stage pipeline including abstract reconstruction from OpenAlex's inverted index format, preprocessing (HTML cleaning, stopword filtering, keyword extraction), and a benchmark evaluation dataset of 100 query-positive pairs built via a 3-tier citation/topic/concept matching strategy. Evaluated and compared multiple embedding methods — TF-IDF + Cosine, Sentence Transformers (MiniLM, SPECTER2), Google Embedding, and Gemini API — using hit rate metrics across 100 queries to identify the most accurate vectorization approach for cross-corpus academic similarity.",
  },
  {
    label: "Forecasting Model in Pharma Product Sales",
    description:
      "Developed a forecasting model for pharmaceutical product sales using Python. The model will be instrumental in predicting future sales, enabling the company to optimize inventory management and production planning. The project aims to enhance the company's decision-making process, ensuring a more efficient and cost-effective supply chain.",
  },
  {
    label: "House Price Prediction Platform (Model&Frontend)",
    github: "https://github.com/senaoz/dss-frontend",
    description:
      "Created as part of the Decision Support Systems course, the King County house price prediction model addresses distrust in traditional real estate methods prevalent among Americans. The project utilizes real estate market data for King County, employing regression analysis to reveal insights into the factors influencing home prices. By providing data-driven decision support, the model aims to empower homebuyers and bridge the information gap in the King County housing market, fostering a more informed community.",
  },
  {
    label: "Code Feedback and ML Model Training Platform",
    description:
      "In the pipeline, I worked on the development of a cutting-edge online code-running platform using a tech stack that includes ReactJS, Tailwind, and Typescript, seamlessly integrated with the ChatGPT API. What sets this project apart is its innovative approach to gathering invaluable feedback on user-written code, which will be instrumental in refining machine learning models. I designed and implemented a RESTful API using Strapi, ensuring a seamless user experience and robust backend functionality. The project is set to revolutionize the way developers receive feedback on their code, offering real-time insights and enhancing the learning experience.",
  },
  {
    label: "Covid-19 Tracker Application",
    description:
      "Created a user-friendly Covid-19 tracker using React, Redux, Tailwind CSS, and TypeScript. The app provides global and country-specific case data, features an interactive world map, and ensures smooth performance through efficient state management and Docker deployment.",
    github: "https://github.com/senaoz/covid-tracker",
  },
  {
    label: "Real Estate Scraper",
    description:
      "Developed a web scraper that extracts information from a real estate listing website using BeautifulSoup, Pandas, Requests, and Numpy, and saves the extracted data in an excel file.",
    github: "https://github.com/senaoz/get-sahibinden-record",
  },
  {
    href: "https://rick-and-morty-senaoz.vercel.app/residents/96",
    label: "Cartoon Characters Wiki",
    description:
      "Engineered an application using JavaScript, Next.js, Tailwind CSS, and React Context, offering an immersive exploration of characters and locales within the Rick and Morty universe with responsive design and seamless dark mode functionality.",
    github: "https://github.com/senaoz/rick-and-morty",
  },
  {
    label: "Course Registration System",
    description:
      "Developed a web-based course registration system using vanilla JavaScript, PHP, and MySQL.",
    github: "https://github.com/senaoz/Registration-Management-System",
  },
  {
    href: "https://weather-app-senaoz.vercel.app/",
    label: "Weather App",
    description:
      "Built a modern weather app with smart features such as auto-location detection (using browser API), smart city suggestions (keyword auto-complete) that dynamically loads the page with a responsive design and dark mode support. Used React.Js, Tailwind CSS, and OpenWeatherMap API.",
    github: "https://github.com/senaoz/Weather-App",
  },
  {
    label: "Find My ID",
    description:
      "Built the authentication module (username & password reset tool) for a web system using JavaScript, Tailwind CSS, and Next.js.",
  },
  {
    label: "Coursera-like System",
    description:
      "Built a system (WordPress, Airtable, and Moodle) that replaced a solution costing $2K/month, and increased course completion rate by 50%+.",
  },
];

export const experience = [
  {
    title: "Software Engineer",
    firm: "Maestra.ai",
    timePeriod: "Jul 2024 – Present",
    link: "https://maestra.ai/tools/video-dubber",
    description: [
      "Engineer scalable integrations with third-party APIs (ElevenLabs, Firebase) and distributed systems, optimizing data processing workflows and improving system reliability.",
      "Design and implement modern UI components and backend services, applying algorithmic problem-solving to reduce task completion time by refactoring legacy code and decreasing technical debt.",
    ],
  },
  {
    title: "Software Engineer",
    firm: "California State Uni., Silicon Valley Campus",
    timePeriod: "Aug – Oct 2023 (3 months)",
    link: "https://www.sjsu.edu/",
    description: [
      "Built an interactive code feedback platform using React, TypeScript, and Tailwind CSS, leveraging data structures and algorithm optimization to improve student learning outcomes by 35%.",
      "Designed and implemented a RESTful API with Node.js to process real-time code submissions, applying software engineering best practices for scalable web application development.",
      "Integrated machine learning capabilities via OpenAI API to generate intelligent, context-aware code feedback, demonstrating adaptability in learning and implementing AI technologies.",
      "Led complete project lifecycle from design to deployment, collaborating with faculty and students to deliver a production-ready educational tool.",
    ],
  },
  {
    title: "Junior Software Engineer",
    firm: "Orion Innovation",
    link: "https://www.orioninc.com/",
    timePeriod: "Nov 2022 – Nov 2023 (1 year)",
    description: [
      "Built reusable components in React with TypeScript and SCSS for enterprise portals, ensuring consistency across web and mobile platforms.",
      "Implemented comprehensive test coverage, including screenshot tests for visual regression and unit tests for functionality validation, ensuring stability and reliability of UI libraries.",
      "Enhanced company-specific user interface libraries by resolving critical issues and developing new features based on stakeholder requirements.",
    ],
  },
  {
    title: "Web Application Dev., Team Lead",
    firm: "YetGen",
    link: "https://yetkingencler.com/",
    timePeriod: "Mar 2021 – Jan 2023 (1 year 11 months)",
    description: [
      "Led the development of a custom LMS that replaced a $2K/month solution and boosted course completion rates by 50%+.",
      "Designed and implemented an authentication module using JavaScript and Next.js, supporting secure access for 3,500+ active users.",
      "Reduced Azure and AWS deployment costs by 35% through optimized resource utilization and efficient infrastructure management.",
    ],
  },
  {
    title: "Front-end Engineer Intern",
    firm: "Univerlist",
    link: "https://univerlist.com/",
    timePeriod: "Jul – Aug 2022 (2 months)",
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
