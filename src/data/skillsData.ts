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

export const exams: Exam[] = [
  { id: "icpc", name: "ICPC", fullName: "International Collegiate Programming Contest" },
  { id: "gssoc", name: "GSSOC", fullName: "GirlScript Summer of Code" },
  { id: "rtu", name: "RTU", fullName: "RTU Examinations" },
  { id: "gate", name: "GATE", fullName: "Graduate Aptitude Test in Engineering" },
  { id: "sih", name: "SIH", fullName: "Smart India Hackathon" }
];
