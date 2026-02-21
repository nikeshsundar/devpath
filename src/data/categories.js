/* ═══════════════════════════════════════════════
   DevPath \u2014 Curated Topics, Repos & Roadmap Tables
   Each topic has ONE hand-picked repo + a 4-column roadmap
   ═══════════════════════════════════════════════ */
/* Shared roadmaps reused by multiple topics */
const DSA_ROADMAP = {
  title: 'DS & ALGORITHMS ROADMAP',
  columns: ['Arrays/Lists', 'Trees/Graphs', 'Sorting/Searching', 'Interview Prep'],
  rows: [
    ['Linked Lists', 'Binary Trees', 'Quick/Merge Sort', 'LeetCode Easy'],
    ['Stacks/Queues', 'Graphs (BFS/DFS)', 'Binary Search', 'System Design'],
    ['Hash Tables', 'Heaps', 'DP Problems', 'Mock Interview'],
  ],
};
const DEVOPS_ROADMAP = {
  title: 'DEVOPS ROADMAP',
  columns: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  rows: [
    ['Containers/Images', 'Pods/Services', 'IaC Basics', 'GitHub Actions'],
    ['Dockerfile', 'Deployments', 'AWS/GCP', 'Jenkins Pipelines'],
    ['Docker Compose', 'Helm Charts', 'Multi-Cloud', 'Automated Testing'],
  ],
};
const AIML_ROADMAP = {
  title: 'AI/ML ROADMAP',
  columns: ['NumPy/Pandas', 'Scikit-learn', 'Deep Learning', 'Production'],
  rows: [
    ['Arrays/DataFrames', 'Regression/Classification', 'TensorFlow/PyTorch', 'Model Deployment'],
    ['Data Cleaning', 'Model Evaluation', 'CNNs/Transformers', 'Streamlit Dashboards'],
    ['Visualization', 'Feature Engineering', 'Transfer Learning', 'ML Pipelines'],
  ],
};
/* ═══════════════════════════════════════ */
const categories = [
  /* ─── 01 PROGRAMMING LANGUAGES ─── */
  {
    id: 'languages',
    num: '01',
    title: ['PROGRAMMING', 'LANGUAGES'],
    description:
      'Master the languages that power every corner of software engineering \u2014 from scripting and systems programming to mobile and web.',
    items: ['Python', 'JavaScript', 'C++', 'Java', 'TypeScript', 'Rust', 'Go', 'Kotlin', 'Swift'],
    topics: [
      {
        name: 'Python',
        repo: 'TheAlgorithms/Python',
        roadmap: {
          title: 'PYTHON ROADMAP',
          columns: ['Learn Basics', 'Data Types/OOP', 'Control Flow/Files', 'Projects'],
          rows: [
            ['Variables/Functions', 'Lists/Dicts/Classes', 'Loops/Conditions/File I/O', 'Calculator App'],
            ['Syntax/Loops', 'OOP Principles', 'Error Handling', 'Web Scraper'],
            ['Modules', 'Inheritance/Polymorphism', 'Context Managers', 'CLI Tool'],
          ],
        },
      },
      {
        name: 'JavaScript',
        repo: 'verekia/js-stack-from-scratch',
        roadmap: {
          title: 'NODE.JS ROADMAP',
          columns: ['Basics', 'Express', 'Database', 'Deployment'],
          rows: [
            ['Modules/Events', 'Routing/Middleware', 'MongoDB/SQL', 'PM2'],
            ['Async/Await', 'Authentication', 'ORM/Mongoose', 'Docker'],
            ['File System', 'Validation', 'Sessions/JWT', 'Cloud'],
          ],
        },
      },
      {
        name: 'C++',
        repo: 'TheAlgorithms/C-Plus-Plus',
        roadmap: {
          title: 'C++ ROADMAP',
          columns: ['Basics', 'OOP', 'STL', 'Advanced'],
          rows: [
            ['Syntax/Pointers', 'Classes/Inheritance', 'Vectors/Maps', 'Templates'],
            ['Memory Management', 'Polymorphism', 'Algorithms', 'Multithreading'],
            ['Functions', 'Operator Overloading', 'Smart Pointers', 'Design Patterns'],
          ],
        },
      },
      {
        name: 'Java',
        repo: 'TheAlgorithms/Java',
        roadmap: {
          title: 'JAVA ROADMAP',
          columns: ['Basics', 'OOP', 'Collections', 'Enterprise'],
          rows: [
            ['Syntax/Loops', 'Classes/Interfaces', 'ArrayList/HashMap', 'Spring Boot'],
            ['Exception Handling', 'Generics', 'Streams', 'Hibernate'],
            ['JVM Concepts', 'Lambda Expressions', 'Concurrency', 'Microservices'],
          ],
        },
      },
      {
        name: 'TypeScript',
        repo: 'microsoft/TypeScript',
        roadmap: {
          title: 'TYPESCRIPT ROADMAP',
          columns: ['Basics', 'Type System', 'Advanced', 'Projects'],
          rows: [
            ['Syntax/Variables', 'Interfaces', 'Generics', 'CLI Tool'],
            ['Functions', 'Type Guards', 'Decorators', 'API Server'],
            ['Modules/Imports', 'Enums/Unions', 'Utility Types', 'Full-Stack App'],
          ],
        },
      },
      {
        name: 'Rust',
        repo: 'rust-lang/book',
        roadmap: {
          title: 'RUST ROADMAP',
          columns: ['Basics', 'Ownership', 'Advanced', 'Async'],
          rows: [
            ['Syntax/Variables', 'Borrowing/Lifetimes', 'Traits/Generics', 'Tokio'],
            ['Functions/Modules', 'Memory Safety', 'Error Handling', 'Async/Await'],
            ['Pattern Matching', 'Structs/Enums', 'Macros', 'Concurrency'],
          ],
        },
      },
      {
        name: 'Go',
        repo: 'golang/go',
        roadmap: {
          title: 'GO ROADMAP',
          columns: ['Basics', 'Concurrency', 'Web/APIs', 'Projects'],
          rows: [
            ['Syntax/Types', 'Goroutines', 'net/http', 'CLI Tool'],
            ['Structs/Interfaces', 'Channels', 'REST APIs', 'Web Server'],
            ['Error Handling', 'sync Package', 'Middleware', 'Microservice'],
          ],
        },
      },
      {
        name: 'Kotlin',
        repo: 'android/nowinandroid',
        roadmap: {
          title: 'KOTLIN ROADMAP',
          columns: ['Basics', 'Android', 'Jetpack', 'Projects'],
          rows: [
            ['Syntax/Types', 'Activities', 'Compose UI', 'Todo App'],
            ['OOP/Functions', 'RecyclerView', 'Navigation', 'Weather App'],
            ['Coroutines', 'Room Database', 'ViewModel', 'Play Store'],
          ],
        },
      },
      {
        name: 'Swift',
        repo: 'apple/swift-algorithms',
        roadmap: {
          title: 'SWIFT ROADMAP',
          columns: ['Basics', 'UIKit', 'SwiftUI', 'Projects'],
          rows: [
            ['Syntax/Types', 'ViewControllers', 'Views/Modifiers', 'Calculator'],
            ['OOP/Protocols', 'Auto Layout', 'State/Binding', 'Weather App'],
            ['Optionals', 'Core Data', 'Navigation', 'App Store'],
          ],
        },
      },
    ],
  },
  /* ─── 02 DATA STRUCTURES & ALGORITHMS ─── */
  {
    id: 'dsa',
    num: '02',
    title: ['DATA STRUCTURES', '& ALGORITHMS'],
    description:
      'The backbone of computer science \u2014 think algorithmically, ace coding interviews, and write efficient code that scales.',
    items: ['Arrays & Strings', 'Trees & Graphs', 'Sorting & Searching', 'Dynamic Programming', 'System Design', 'CS Fundamentals'],
    topics: [
      { name: 'Arrays, Trees & Graphs', repo: 'TheAlgorithms/Python', roadmap: DSA_ROADMAP },
      { name: 'Sorting & Searching', repo: 'bilal77511/Learn-Data-Structures-and-Algorithms-from-Scratch', roadmap: DSA_ROADMAP },
      { name: 'Dynamic Programming', repo: 'Coder-World04/Complete-Data-Structures-and-Algorithms', roadmap: DSA_ROADMAP },
      {
        name: 'System Design',
        repo: 'donnemartin/system-design-primer',
        roadmap: {
          title: 'SYSTEM DESIGN ROADMAP',
          columns: ['Basics', 'Distributed', 'Advanced', 'Case Studies'],
          rows: [
            ['Load Balancer', 'Caching/DB', 'Microservices', 'Twitter Design'],
            ['API Design', 'Sharding', 'Message Queues', 'Netflix'],
            ['Rate Limiting', 'CAP Theorem', 'Monitoring', 'URL Shortener'],
          ],
        },
      },
      {
        name: 'CS Fundamentals',
        repo: 'ossu/computer-science',
        roadmap: {
          title: 'CS FUNDAMENTALS ROADMAP',
          columns: ['Foundations', 'OS', 'Networks', 'Theory'],
          rows: [
            ['Number Systems', 'Processes', 'TCP/IP', 'Automata'],
            ['Logic/Boolean', 'Memory Mgmt', 'HTTP/DNS', 'Complexity'],
            ['Data Representation', 'File Systems', 'Sockets', 'Compilers'],
          ],
        },
      },
    ],
  },
  /* ─── 03 WEB DEVELOPMENT ─── */
  {
    id: 'web',
    num: '03',
    title: ['WEB', 'DEVELOPMENT'],
    description:
      'Build the modern internet \u2014 from pixel-perfect frontends to scalable backends, APIs, databases, and deployment.',
    items: ['HTML & CSS', 'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Tailwind CSS', 'SQL'],
    topics: [
      {
        name: 'HTML, CSS & JS',
        repo: 'microsoft/TypeScript',
        roadmap: {
          title: 'FULLSTACK WEB ROADMAP',
          columns: ['Frontend', 'Backend', 'Database', 'Deployment'],
          rows: [
            ['HTML/CSS/JS', 'Node/Express', 'SQL/NoSQL', 'Vercel/Netlify'],
            ['React/Vue', 'REST/GraphQL', 'PostgreSQL/Mongo', 'Docker'],
            ['Tailwind CSS', 'Authentication', 'Prisma/ORM', 'Cloudflare'],
          ],
        },
      },
      {
        name: 'React',
        repo: 'facebook/react',
        roadmap: {
          title: 'REACT ROADMAP',
          columns: ['Learn Basics', 'Components/State', 'Hooks/Routing', 'Projects'],
          rows: [
            ['JSX/Props', 'Class Components', 'useState/useEffect', 'Todo App'],
            ['Components', 'Conditional Rendering', 'React Router', 'Portfolio'],
            ['Virtual DOM', 'Lists/Keys', 'Context API', 'Weather App'],
          ],
        },
      },
      {
        name: 'Next.js',
        repo: 'vercel/next.js',
        roadmap: {
          title: 'NEXT.JS ROADMAP',
          columns: ['Basics', 'Rendering', 'Data', 'Deployment'],
          rows: [
            ['File Routing', 'SSR/SSG', 'API Routes', 'Vercel'],
            ['Layouts', 'ISR/Streaming', 'fetch/SWR', 'Edge Functions'],
            ['Middleware', 'Server Components', 'Auth', 'CI/CD'],
          ],
        },
      },
      {
        name: 'Vue.js',
        repo: 'vuejs/vue',
        roadmap: {
          title: 'VUE.JS ROADMAP',
          columns: ['Basics', 'Components', 'State', 'Projects'],
          rows: [
            ['Template Syntax', 'Props/Events', 'Vuex/Pinia', 'Todo App'],
            ['Directives', 'Slots/Teleport', 'Composables', 'Dashboard'],
            ['Computed/Watch', 'Transitions', 'Vue Router', 'E-commerce'],
          ],
        },
      },
      {
        name: 'Angular',
        repo: 'angular/angular',
        roadmap: {
          title: 'ANGULAR ROADMAP',
          columns: ['Basics', 'Components', 'Services', 'Projects'],
          rows: [
            ['TypeScript', 'Templates', 'DI', 'CRUD App'],
            ['Modules', 'Directives', 'HTTP Client', 'Dashboard'],
            ['Routing', 'Pipes', 'RxJS/Signals', 'Enterprise App'],
          ],
        },
      },
      {
        name: 'Node & Express',
        repo: 'verekia/js-stack-from-scratch',
        roadmap: {
          title: 'NODE.JS ROADMAP',
          columns: ['Basics', 'Express', 'Database', 'Deployment'],
          rows: [
            ['Modules/Events', 'Routing/Middleware', 'MongoDB/SQL', 'PM2'],
            ['Async/Await', 'Authentication', 'ORM/Mongoose', 'Docker'],
            ['File System', 'Validation', 'Sessions/JWT', 'Cloud'],
          ],
        },
      },
      {
        name: 'Tailwind CSS',
        repo: 'tailwindlabs/tailwindcss',
        roadmap: {
          title: 'TAILWIND CSS ROADMAP',
          columns: ['Basics', 'Layout', 'Components', 'Projects'],
          rows: [
            ['Utility Classes', 'Flexbox/Grid', 'Cards/Buttons', 'Landing Page'],
            ['Responsive', 'Spacing', 'Forms/Modals', 'Portfolio'],
            ['Dark Mode', 'Animations', 'Custom Theme', 'Dashboard'],
          ],
        },
      },
      {
        name: 'SQL & Databases',
        repo: 'frozen-dev71/SQL-in-30-Days',
        roadmap: {
          title: 'DATABASES ROADMAP',
          columns: ['SQL', 'NoSQL', 'Advanced', 'Optimization'],
          rows: [
            ['PostgreSQL/MySQL', 'MongoDB', 'Redis', 'Indexing'],
            ['Joins/Indexes', 'Document Model', 'Time Series', 'Query Plans'],
            ['Transactions', 'Aggregation', 'Graph DBs', 'Sharding'],
          ],
        },
      },
    ],
  },
  /* ─── 04 APP DEVELOPMENT ─── */
  {
    id: 'app',
    num: '04',
    title: ['APP', 'DEVELOPMENT'],
    description:
      'Create mobile experiences used by millions \u2014 cross-platform with React Native & Flutter, or go native with Swift and Kotlin.',
    items: ['React Native', 'Flutter', 'Kotlin & Android', 'Swift & iOS'],
    topics: [
      {
        name: 'React Native',
        repo: 'facebook/react-native',
        roadmap: {
          title: 'MOBILE DEVELOPMENT ROADMAP',
          columns: ['React Native', 'Flutter', 'Native', 'Publishing'],
          rows: [
            ['Expo/CLI', 'Dart Widgets', 'Kotlin/Swift', 'App Stores'],
            ['Navigation', 'State Management', 'Jetpack Compose', 'ASO'],
            ['Native Modules', 'Firebase', 'SwiftUI', 'Analytics'],
          ],
        },
      },
      {
        name: 'Flutter',
        repo: 'flutter/flutter',
        roadmap: {
          title: 'FLUTTER ROADMAP',
          columns: ['Dart Basics', 'Widgets', 'State Management', 'Publishing'],
          rows: [
            ['Variables/Functions', 'Stateless/Stateful', 'Provider/Bloc', 'App Store'],
            ['OOP/Collections', 'Layouts/Navigation', 'HTTP/API Calls', 'Play Store'],
            ['Async Programming', 'Animations', 'Local Storage', 'Monetization'],
          ],
        },
      },
      {
        name: 'Kotlin & Android',
        repo: 'android/nowinandroid',
        roadmap: {
          title: 'KOTLIN & ANDROID ROADMAP',
          columns: ['Kotlin', 'Android', 'Jetpack', 'Projects'],
          rows: [
            ['Syntax/Types', 'Activities', 'Compose UI', 'Todo App'],
            ['OOP/Functions', 'Layouts/XML', 'Navigation', 'Weather App'],
            ['Coroutines', 'Room Database', 'ViewModel', 'Play Store'],
          ],
        },
      },
      {
        name: 'Swift & iOS',
        repo: 'apple/swift-algorithms',
        roadmap: {
          title: 'SWIFT & iOS ROADMAP',
          columns: ['Swift', 'UIKit', 'SwiftUI', 'Projects'],
          rows: [
            ['Syntax/Types', 'ViewControllers', 'Views/Modifiers', 'Calculator'],
            ['OOP/Protocols', 'Auto Layout', 'State/Binding', 'Weather App'],
            ['Optionals', 'Core Data', 'Navigation', 'App Store'],
          ],
        },
      },
    ],
  },
  /* ─── 05 CLOUD & DEVOPS ─── */
  {
    id: 'cloud',
    num: '05',
    title: ['CLOUD', '& DEVOPS'],
    description:
      'Architect, deploy, and scale software in the cloud \u2014 containers, CI/CD pipelines, infrastructure as code, and monitoring.',
    items: ['Docker', 'Kubernetes', 'Terraform & AWS', 'CI/CD Pipelines'],
    topics: [
      { name: 'Docker', repo: 'docker/getting-started', roadmap: DEVOPS_ROADMAP },
      { name: 'Kubernetes', repo: 'in28minutes/devops-master-class', roadmap: DEVOPS_ROADMAP },
      { name: 'Terraform & AWS', repo: 'hashicorp/terraform', roadmap: DEVOPS_ROADMAP },
      { name: 'CI/CD', repo: 'hashicorp/terraform-github-actions', roadmap: DEVOPS_ROADMAP },
    ],
  },
  /* ─── 06 AI & MACHINE LEARNING ─── */
  {
    id: 'ai',
    num: '06',
    title: ['AI & MACHINE', 'LEARNING'],
    description:
      'From linear regression to large language models \u2014 understand the math, build models, and deploy intelligent systems.',
    items: ['NumPy & Pandas', 'PyTorch & TensorFlow', 'scikit-learn'],
    topics: [
      { name: 'NumPy & Pandas', repo: 'pandas-dev/pandas', roadmap: AIML_ROADMAP },
      { name: 'PyTorch & TensorFlow', repo: 'jonkrohn/DLTFpT', roadmap: AIML_ROADMAP },
      { name: 'scikit-learn', repo: 'scikit-learn/scikit-learn', roadmap: AIML_ROADMAP },
    ],
  },
];
export default categories;
