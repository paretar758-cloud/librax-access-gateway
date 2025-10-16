export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  bookIds: string[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  roadmap: RoadmapStep[];
  color: string;
}

export interface Exam {
  id: string;
  name: string;
  fullName: string;
}

export const skills: Skill[] = [
  {
    id: "ai-ml",
    name: "AI/ML",
    description: "Artificial Intelligence and Machine Learning - Build intelligent systems that learn from data",
    benefits: [
      "High demand in industry with competitive salaries",
      "Work on cutting-edge technology and innovation",
      "Solve complex real-world problems",
      "Career opportunities in diverse fields",
      "Contribute to automation and efficiency"
    ],
    color: "primary",
    roadmap: [
      {
        id: 1,
        title: "Introduction to AI/ML",
        description: "Learn the basics of AI, ML concepts, and terminology",
        bookIds: ["1", "17"]
      },
      {
        id: 2,
        title: "Data Science Basics",
        description: "Master data manipulation, analysis, and visualization",
        bookIds: ["15", "43"]
      },
      {
        id: 3,
        title: "Python Programming",
        description: "Build strong Python foundation for ML development",
        bookIds: ["40", "34"]
      },
      {
        id: 4,
        title: "Mathematics & Statistics",
        description: "Understand linear algebra and statistical concepts",
        bookIds: ["44", "16"]
      },
      {
        id: 5,
        title: "Machine Learning Algorithms",
        description: "Learn supervised and unsupervised learning algorithms",
        bookIds: ["31"]
      },
      {
        id: 6,
        title: "Deep Learning",
        description: "Master neural networks and deep learning techniques",
        bookIds: ["19"]
      },
      {
        id: 7,
        title: "Natural Language Processing",
        description: "Work with text data and language models",
        bookIds: ["35"]
      },
      {
        id: 8,
        title: "Computer Vision",
        description: "Learn image processing and visual recognition",
        bookIds: ["13"]
      },
      {
        id: 9,
        title: "Advanced Projects",
        description: "Build end-to-end ML projects and deploy models",
        bookIds: ["31", "19"]
      },
      {
        id: 10,
        title: "Specialization",
        description: "Choose your path: MLOps, Research, or Applications",
        bookIds: ["17", "35"]
      }
    ]
  },
  {
    id: "cloud-computing",
    name: "Cloud computing",
    description: "Master cloud platforms and distributed systems for scalable applications",
    benefits: [
      "Essential skill for modern software development",
      "High-paying job opportunities worldwide",
      "Work with leading platforms like AWS, Azure, GCP",
      "Enable scalability and global reach",
      "Foundation for DevOps and microservices"
    ],
    color: "secondary",
    roadmap: [
      {
        id: 1,
        title: "Cloud Fundamentals",
        description: "Understand cloud computing concepts and service models",
        bookIds: ["14"]
      },
      {
        id: 2,
        title: "Linux Administration",
        description: "Master Linux systems and command line",
        bookIds: ["30"]
      },
      {
        id: 3,
        title: "Networking Basics",
        description: "Learn networking protocols and security",
        bookIds: ["12", "33"]
      },
      {
        id: 4,
        title: "Containerization",
        description: "Master Docker and container orchestration",
        bookIds: ["20"]
      },
      {
        id: 5,
        title: "Kubernetes",
        description: "Learn container orchestration at scale",
        bookIds: ["20"]
      },
      {
        id: 6,
        title: "Infrastructure as Code",
        description: "Automate infrastructure with Terraform",
        bookIds: ["46"]
      },
      {
        id: 7,
        title: "CI/CD Pipelines",
        description: "Build automated deployment pipelines",
        bookIds: ["9"]
      },
      {
        id: 8,
        title: "Cloud Platforms",
        description: "Deep dive into AWS, Azure, or GCP",
        bookIds: ["14"]
      },
      {
        id: 9,
        title: "Microservices",
        description: "Design and deploy microservices architecture",
        bookIds: ["32"]
      },
      {
        id: 10,
        title: "Cloud Security & Monitoring",
        description: "Implement security best practices and monitoring",
        bookIds: ["33", "10"]
      }
    ]
  },
  {
    id: "hacking",
    name: "Hacking",
    description: "Ethical hacking and cybersecurity - Protect systems and find vulnerabilities",
    benefits: [
      "Critical skill in cybersecurity industry",
      "Help protect organizations from threats",
      "Excellent career growth and compensation",
      "Continuous learning and challenges",
      "Make the digital world safer"
    ],
    color: "secondary",
    roadmap: [
      {
        id: 1,
        title: "Cybersecurity Basics",
        description: "Learn security fundamentals and threat landscape",
        bookIds: ["10"]
      },
      {
        id: 2,
        title: "Networking & Protocols",
        description: "Master network protocols and security",
        bookIds: ["12", "33"]
      },
      {
        id: 3,
        title: "Linux for Hackers",
        description: "Use Linux for security testing",
        bookIds: ["30"]
      },
      {
        id: 4,
        title: "Web Application Security",
        description: "Find and fix web vulnerabilities",
        bookIds: ["10", "21"]
      },
      {
        id: 5,
        title: "Network Security",
        description: "Secure network infrastructure",
        bookIds: ["33"]
      },
      {
        id: 6,
        title: "Penetration Testing",
        description: "Learn ethical hacking methodologies",
        bookIds: ["37"]
      },
      {
        id: 7,
        title: "Cryptography",
        description: "Understand encryption and security protocols",
        bookIds: ["10"]
      },
      {
        id: 8,
        title: "Malware Analysis",
        description: "Analyze and reverse engineer malware",
        bookIds: ["21"]
      },
      {
        id: 9,
        title: "Advanced Exploitation",
        description: "Master exploitation techniques",
        bookIds: ["37"]
      },
      {
        id: 10,
        title: "Bug Bounty & CTFs",
        description: "Practice skills in real-world scenarios",
        bookIds: ["21", "37"]
      }
    ]
  },
  {
    id: "web-dev",
    name: "Web dev.",
    description: "Full-stack web development - Create modern web applications",
    benefits: [
      "Build your own applications and startups",
      "Remote work opportunities available",
      "Freelancing potential for extra income",
      "See immediate results of your work",
      "Constantly evolving with new technologies"
    ],
    color: "secondary",
    roadmap: [
      {
        id: 1,
        title: "HTML & CSS",
        description: "Master web page structure and styling",
        bookIds: ["11", "49"]
      },
      {
        id: 2,
        title: "JavaScript Fundamentals",
        description: "Learn core JavaScript programming",
        bookIds: ["2"]
      },
      {
        id: 3,
        title: "Advanced JavaScript",
        description: "Master ES6+, async programming, and patterns",
        bookIds: ["1"]
      },
      {
        id: 4,
        title: "React Framework",
        description: "Build interactive UIs with React",
        bookIds: ["41"]
      },
      {
        id: 5,
        title: "Backend with Node.js",
        description: "Create server-side applications",
        bookIds: ["36"]
      },
      {
        id: 6,
        title: "Databases",
        description: "Work with SQL and NoSQL databases",
        bookIds: ["18", "34", "39"]
      },
      {
        id: 7,
        title: "RESTful APIs",
        description: "Design and build APIs",
        bookIds: ["42"]
      },
      {
        id: 8,
        title: "GraphQL",
        description: "Modern API development with GraphQL",
        bookIds: ["23"]
      },
      {
        id: 9,
        title: "Testing & DevOps",
        description: "Test and deploy applications",
        bookIds: ["47", "9", "20"]
      },
      {
        id: 10,
        title: "Full-Stack Projects",
        description: "Build complete production applications",
        bookIds: ["41", "36", "42"]
      }
    ]
  },
  {
    id: "prompt-engineering",
    name: "Prompt engineering",
    description: "Master AI prompting techniques for optimal AI model interactions",
    benefits: [
      "Emerging high-demand skill in AI industry",
      "Enhance productivity with AI tools",
      "Bridge human intent and AI capabilities",
      "Work across various AI applications",
      "Future-proof your career with AI"
    ],
    color: "primary",
    roadmap: [
      {
        id: 1,
        title: "AI Basics",
        description: "Understand LLMs and generative AI",
        bookIds: ["17"]
      },
      {
        id: 2,
        title: "Prompt Fundamentals",
        description: "Learn basic prompting techniques",
        bookIds: ["17", "31"]
      },
      {
        id: 3,
        title: "Advanced Prompting",
        description: "Master chain-of-thought and few-shot learning",
        bookIds: ["17", "35"]
      },
      {
        id: 4,
        title: "Domain Applications",
        description: "Apply prompts to specific use cases",
        bookIds: ["35", "13"]
      },
      {
        id: 5,
        title: "Prompt Optimization",
        description: "Optimize for accuracy and efficiency",
        bookIds: ["31"]
      },
      {
        id: 6,
        title: "AI APIs Integration",
        description: "Work with OpenAI, Claude, and other APIs",
        bookIds: ["36", "42"]
      },
      {
        id: 7,
        title: "Custom AI Solutions",
        description: "Build AI-powered applications",
        bookIds: ["17", "31"]
      },
      {
        id: 8,
        title: "Ethical AI Usage",
        description: "Understand bias, safety, and ethics",
        bookIds: ["17"]
      },
      {
        id: 9,
        title: "Fine-tuning & RAG",
        description: "Advanced model customization",
        bookIds: ["19", "31"]
      },
      {
        id: 10,
        title: "AI Product Development",
        description: "Create production-ready AI products",
        bookIds: ["17", "31", "35"]
      }
    ]
  },
  {
    id: "blockchain",
    name: "Blockchain",
    description: "Blockchain development and Web3 - Build decentralized applications",
    benefits: [
      "Revolutionary technology reshaping finance",
      "High-paying opportunities in crypto industry",
      "Build decentralized autonomous systems",
      "Work on cutting-edge distributed systems",
      "Create transparent and secure solutions"
    ],
    color: "secondary",
    roadmap: [
      {
        id: 1,
        title: "Blockchain Fundamentals",
        description: "Understand blockchain, consensus, and crypto",
        bookIds: ["7"]
      },
      {
        id: 2,
        title: "Cryptography Basics",
        description: "Learn hashing, signatures, and encryption",
        bookIds: ["10", "7"]
      },
      {
        id: 3,
        title: "Smart Contracts",
        description: "Write smart contracts with Solidity",
        bookIds: ["7"]
      },
      {
        id: 4,
        title: "Ethereum Development",
        description: "Build on Ethereum blockchain",
        bookIds: ["7"]
      },
      {
        id: 5,
        title: "Web3 Integration",
        description: "Connect DApps with web interfaces",
        bookIds: ["7", "41"]
      },
      {
        id: 6,
        title: "DeFi Protocols",
        description: "Understand decentralized finance",
        bookIds: ["7"]
      },
      {
        id: 7,
        title: "NFT Development",
        description: "Create and trade digital assets",
        bookIds: ["7"]
      },
      {
        id: 8,
        title: "Security & Auditing",
        description: "Secure smart contracts and audit code",
        bookIds: ["7", "10"]
      },
      {
        id: 9,
        title: "Advanced Blockchains",
        description: "Explore Layer 2, Polkadot, Solana",
        bookIds: ["7"]
      },
      {
        id: 10,
        title: "Full DApp Projects",
        description: "Build complete decentralized applications",
        bookIds: ["7", "41"]
      }
    ]
  }
];

export interface ExamDetail {
  id: string;
  name: string;
  fullName: string;
  description: string;
  benefits: string[];
  roadmap: RoadmapStep[];
}

export const exams: ExamDetail[] = [
  {
    id: "icpc",
    name: "ICPC",
    fullName: "International Collegiate Programming Contest",
    description: "The premier global programming competition for university students, testing algorithmic and problem-solving skills",
    benefits: [
      "Enhance problem-solving and algorithmic thinking",
      "Boost resume with internationally recognized achievement",
      "Network with top programmers worldwide",
      "Improve competitive programming skills",
      "Potential recruitment opportunities from top tech companies"
    ],
    roadmap: [
      {
        id: 1,
        title: "Programming Fundamentals",
        description: "Master a programming language (C++, Java, or Python)",
        bookIds: ["40", "1"]
      },
      {
        id: 2,
        title: "Data Structures",
        description: "Learn arrays, linked lists, stacks, queues, trees, graphs",
        bookIds: ["3"]
      },
      {
        id: 3,
        title: "Algorithm Design",
        description: "Study sorting, searching, and basic algorithms",
        bookIds: ["3", "22"]
      },
      {
        id: 4,
        title: "Advanced Data Structures",
        description: "Master heaps, hash tables, segment trees, tries",
        bookIds: ["3"]
      },
      {
        id: 5,
        title: "Dynamic Programming",
        description: "Learn DP techniques and practice problems",
        bookIds: ["3", "22"]
      },
      {
        id: 6,
        title: "Graph Algorithms",
        description: "Study BFS, DFS, shortest paths, MST",
        bookIds: ["3"]
      },
      {
        id: 7,
        title: "String Algorithms",
        description: "Learn pattern matching and string manipulation",
        bookIds: ["3"]
      },
      {
        id: 8,
        title: "Mathematics & Number Theory",
        description: "Study combinatorics, probability, and number theory",
        bookIds: ["44"]
      },
      {
        id: 9,
        title: "Practice & Mock Contests",
        description: "Regular practice on online judges and mock contests",
        bookIds: ["3", "22"]
      },
      {
        id: 10,
        title: "Team Practice",
        description: "Practice with team, develop collaboration strategies",
        bookIds: ["3"]
      }
    ]
  },
  {
    id: "gssoc",
    name: "GSSOC",
    fullName: "GirlScript Summer of Code",
    description: "A 3-month open-source program for students to contribute to real-world projects and gain practical experience",
    benefits: [
      "Gain real-world open-source experience",
      "Build portfolio with meaningful contributions",
      "Learn industry-standard development workflows",
      "Get mentorship from experienced developers",
      "Earn certificates and recognition"
    ],
    roadmap: [
      {
        id: 1,
        title: "Git & GitHub Basics",
        description: "Learn version control and collaboration",
        bookIds: ["24"]
      },
      {
        id: 2,
        title: "Open Source Fundamentals",
        description: "Understand open source culture and contributions",
        bookIds: ["24"]
      },
      {
        id: 3,
        title: "Choose Tech Stack",
        description: "Pick a technology you want to contribute in",
        bookIds: ["41", "36", "40"]
      },
      {
        id: 4,
        title: "Code Quality",
        description: "Learn clean code and best practices",
        bookIds: ["8", "22"]
      },
      {
        id: 5,
        title: "Documentation Skills",
        description: "Write clear documentation and README files",
        bookIds: ["8"]
      },
      {
        id: 6,
        title: "Issue Tracking",
        description: "Learn to find, understand, and solve issues",
        bookIds: ["24"]
      },
      {
        id: 7,
        title: "Pull Request Best Practices",
        description: "Create quality PRs and handle reviews",
        bookIds: ["24", "8"]
      },
      {
        id: 8,
        title: "Testing & Debugging",
        description: "Write tests and debug code effectively",
        bookIds: ["47"]
      },
      {
        id: 9,
        title: "Communication Skills",
        description: "Engage with maintainers and community",
        bookIds: ["8"]
      },
      {
        id: 10,
        title: "Project Selection",
        description: "Choose GSSOC projects matching your skills",
        bookIds: ["24"]
      }
    ]
  },
  {
    id: "rtu",
    name: "RTU",
    fullName: "RTU Examinations",
    description: "Rajasthan Technical University examinations covering core engineering subjects",
    benefits: [
      "Strong foundation in engineering fundamentals",
      "Essential for degree completion and grades",
      "Prepares for competitive exams and placements",
      "Deep understanding of technical subjects",
      "Builds analytical and problem-solving skills"
    ],
    roadmap: [
      {
        id: 1,
        title: "Programming Fundamentals",
        description: "Master C, C++, and Python programming",
        bookIds: ["40", "1"]
      },
      {
        id: 2,
        title: "Data Structures",
        description: "Learn all fundamental data structures",
        bookIds: ["3"]
      },
      {
        id: 3,
        title: "Database Systems",
        description: "Study SQL, normalization, and DBMS concepts",
        bookIds: ["18"]
      },
      {
        id: 4,
        title: "Operating Systems",
        description: "Understand OS concepts and management",
        bookIds: ["4"]
      },
      {
        id: 5,
        title: "Computer Networks",
        description: "Learn networking layers and protocols",
        bookIds: ["12"]
      },
      {
        id: 6,
        title: "Software Engineering",
        description: "Study SDLC, design patterns, and testing",
        bookIds: ["22", "47", "5"]
      },
      {
        id: 7,
        title: "Web Technologies",
        description: "Master HTML, CSS, JavaScript frameworks",
        bookIds: ["49", "11", "41"]
      },
      {
        id: 8,
        title: "Mathematics",
        description: "Discrete math, probability, and statistics",
        bookIds: ["44"]
      },
      {
        id: 9,
        title: "Previous Year Papers",
        description: "Practice previous RTU exam papers",
        bookIds: ["3", "18", "4"]
      },
      {
        id: 10,
        title: "Revision & Mock Tests",
        description: "Comprehensive revision and test practice",
        bookIds: ["3", "18", "12"]
      }
    ]
  },
  {
    id: "gate",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    description: "National level exam for admission to PG programs and PSU recruitment in India",
    benefits: [
      "Gateway to premier institutes like IITs and NITs",
      "Qualification for PSU jobs with excellent packages",
      "Scholarship opportunities for higher studies",
      "Validates engineering knowledge and aptitude",
      "Opens doors to research and academic careers"
    ],
    roadmap: [
      {
        id: 1,
        title: "Syllabus Analysis",
        description: "Understand GATE CS syllabus thoroughly",
        bookIds: ["3", "18", "4"]
      },
      {
        id: 2,
        title: "Programming & DS",
        description: "Master programming and data structures",
        bookIds: ["3", "40"]
      },
      {
        id: 3,
        title: "Algorithms",
        description: "Study algorithms and complexity analysis",
        bookIds: ["3", "22"]
      },
      {
        id: 4,
        title: "Database Management",
        description: "Learn DBMS concepts in depth",
        bookIds: ["18"]
      },
      {
        id: 5,
        title: "Operating Systems",
        description: "Master OS fundamentals and concepts",
        bookIds: ["4"]
      },
      {
        id: 6,
        title: "Computer Networks",
        description: "Deep dive into networking protocols",
        bookIds: ["12"]
      },
      {
        id: 7,
        title: "Theory of Computation",
        description: "Study automata and formal languages",
        bookIds: ["3"]
      },
      {
        id: 8,
        title: "Digital Logic & COA",
        description: "Computer organization and architecture",
        bookIds: ["4"]
      },
      {
        id: 9,
        title: "Previous Papers",
        description: "Solve last 10+ years GATE papers",
        bookIds: ["3", "18", "4"]
      },
      {
        id: 10,
        title: "Mock Tests & Revision",
        description: "Take full-length mocks and revise",
        bookIds: ["3", "18", "12"]
      }
    ]
  },
  {
    id: "sih",
    name: "SIH",
    fullName: "Smart India Hackathon",
    description: "India's biggest hackathon solving real-world problems for government and industry",
    benefits: [
      "Solve real problems for government/industry",
      "Win cash prizes and recognition",
      "Build innovative solutions with team",
      "Network with industry experts and mentors",
      "Fast-track recruitment opportunities"
    ],
    roadmap: [
      {
        id: 1,
        title: "Problem Understanding",
        description: "Analyze problem statements thoroughly",
        bookIds: ["8", "22"]
      },
      {
        id: 2,
        title: "Team Formation",
        description: "Build diverse team with complementary skills",
        bookIds: ["5"]
      },
      {
        id: 3,
        title: "Technology Stack",
        description: "Choose appropriate tech for the problem",
        bookIds: ["41", "36", "14"]
      },
      {
        id: 4,
        title: "Rapid Prototyping",
        description: "Build quick prototypes to validate ideas",
        bookIds: ["49", "41"]
      },
      {
        id: 5,
        title: "Full-Stack Development",
        description: "Develop frontend and backend components",
        bookIds: ["41", "36", "18"]
      },
      {
        id: 6,
        title: "AI/ML Integration",
        description: "Add intelligent features if applicable",
        bookIds: ["31", "17"]
      },
      {
        id: 7,
        title: "Deployment",
        description: "Deploy solution on cloud platforms",
        bookIds: ["14", "20"]
      },
      {
        id: 8,
        title: "Presentation Skills",
        description: "Create compelling pitch and demo",
        bookIds: ["8"]
      },
      {
        id: 9,
        title: "Testing & Debugging",
        description: "Ensure solution works flawlessly",
        bookIds: ["47"]
      },
      {
        id: 10,
        title: "Final Preparation",
        description: "Rehearse presentation and finalize demo",
        bookIds: ["8", "5"]
      }
    ]
  }
];
