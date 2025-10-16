// Import all book cover images
import computerNetworking from "@/assets/books/computer-networking.jpg";
import cybersecurityThreat from "@/assets/books/cybersecurity-threat.jpg";
import dataStructures from "@/assets/books/data-structures.jpg";
import machineLearningIntro from "@/assets/books/machine-learning-intro.jpg";
import deepLearning from "@/assets/books/deep-learning.jpg";
import pythonBasics from "@/assets/books/python-basics.jpg";
import advancedJavascript from "@/assets/books/advanced-javascript.jpg";
import reactGuide from "@/assets/books/react-guide.jpg";
import databaseSystems from "@/assets/books/database-systems.jpg";
import operatingSystems from "@/assets/books/operating-systems.jpg";
import cloudComputing from "@/assets/books/cloud-computing.jpg";
import dockerKubernetes from "@/assets/books/docker-kubernetes.jpg";
import blockchain from "@/assets/books/blockchain.jpg";
import iot from "@/assets/books/iot.jpg";
import mobileDev from "@/assets/books/mobile-dev.jpg";
import flutter from "@/assets/books/flutter.jpg";
import git from "@/assets/books/git.jpg";
import testing from "@/assets/books/testing.jpg";
import agile from "@/assets/books/agile.jpg";
import cleanCode from "@/assets/books/clean-code.jpg";
import designPatterns from "@/assets/books/design-patterns.jpg";
import linuxAdmin from "@/assets/books/linux-admin.jpg";
import windowsServer from "@/assets/books/windows-server.jpg";
import networkSecurity from "@/assets/books/network-security.jpg";
import artificialIntelligence from "@/assets/books/artificial-intelligence.jpg";
import computerVision from "@/assets/books/computer-vision.jpg";
import nlp from "@/assets/books/nlp.jpg";
import webDesign from "@/assets/books/web-design.jpg";
import cssMaster from "@/assets/books/css-master.jpg";
import nodejs from "@/assets/books/nodejs.jpg";
import graphql from "@/assets/books/graphql.jpg";
import restfulApis from "@/assets/books/restful-apis.jpg";
import mongodb from "@/assets/books/mongodb.jpg";
import postgresql from "@/assets/books/postgresql.jpg";
import redis from "@/assets/books/redis.jpg";
import microservices from "@/assets/books/microservices.jpg";
import eventDriven from "@/assets/books/event-driven.jpg";
import cicd from "@/assets/books/cicd.jpg";
import terraform from "@/assets/books/terraform.jpg";
import ansible from "@/assets/books/ansible.jpg";
import ethicalHacking from "@/assets/books/ethical-hacking.jpg";
import pentesting from "@/assets/books/pentesting.jpg";
import quantum from "@/assets/books/quantum.jpg";
import arvr from "@/assets/books/arvr.jpg";
import dataScience from "@/assets/books/data-science.jpg";
import statistics from "@/assets/books/statistics.jpg";
import bigData from "@/assets/books/big-data.jpg";
import spark from "@/assets/books/spark.jpg";
import dataViz from "@/assets/books/data-viz.jpg";
import rProgramming from "@/assets/books/r-programming.jpg";

export interface Book {
  id: string;
  title: string;
  author: string;
  cover_url: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  branch: string;
  skill: string;
  exam: string;
  tags: string[];
  available_copies: number;
  total_copies: number;
  shelf_location: string;
  expected_date?: string;
}

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "Computer Networking",
    author: "James Kurose",
    cover_url: computerNetworking,
    level: "Beginner",
    branch: "Computer Science",
    skill: "Networking",
    exam: "CCNA",
    tags: ["networking", "protocols"],
    available_copies: 2,
    total_copies: 2,
    shelf_location: "Book Shelf -1 > Column - 2 > Row -3"
  },
  {
    id: "2",
    title: "Cybersecurity & Threat Analysis",
    author: "Michael White",
    cover_url: cybersecurityThreat,
    level: "Intermediate",
    branch: "Computer Science",
    skill: "Security",
    exam: "CEH",
    tags: ["security", "threats"],
    available_copies: 4,
    total_copies: 4,
    shelf_location: "Double Shelf -1 > face > Column - 2 > Row -3"
  },
  {
    id: "3",
    title: "Data Structures and Algorithms",
    author: "Thomas Cormen",
    cover_url: dataStructures,
    level: "Advanced",
    branch: "Computer Science",
    skill: "Programming",
    exam: "GATE",
    tags: ["algorithms", "data structures"],
    available_copies: 0,
    total_copies: 3,
    shelf_location: "Book Shelf -2 > Column - 1 > Row -5",
    expected_date: "2025-12-10"
  },
  {
    id: "4",
    title: "Introduction to Machine Learning",
    author: "Andrew Ng",
    cover_url: machineLearningIntro,
    level: "Intermediate",
    branch: "Artificial Intelligence",
    skill: "Machine Learning",
    exam: "None",
    tags: ["ML", "AI"],
    available_copies: 5,
    total_copies: 5,
    shelf_location: "Book Shelf -3 > Column - 4 > Row -2"
  },
  {
    id: "5",
    title: "Deep Learning Fundamentals",
    author: "Ian Goodfellow",
    cover_url: deepLearning,
    level: "Advanced",
    branch: "Artificial Intelligence",
    skill: "Deep Learning",
    exam: "None",
    tags: ["deep learning", "neural networks"],
    available_copies: 3,
    total_copies: 3,
    shelf_location: "Book Shelf -3 > Column - 5 > Row -1"
  },
  {
    id: "6",
    title: "Python Programming Basics",
    author: "Eric Matthes",
    cover_url: pythonBasics,
    level: "Beginner",
    branch: "Computer Science",
    skill: "Programming",
    exam: "None",
    tags: ["python", "programming"],
    available_copies: 6,
    total_copies: 6,
    shelf_location: "Book Shelf -1 > Column - 1 > Row -1"
  },
  {
    id: "7",
    title: "Advanced JavaScript",
    author: "Kyle Simpson",
    cover_url: advancedJavascript,
    level: "Advanced",
    branch: "Web Development",
    skill: "Programming",
    exam: "None",
    tags: ["javascript", "web"],
    available_copies: 2,
    total_copies: 4,
    shelf_location: "Book Shelf -4 > Column - 2 > Row -3"
  },
  {
    id: "8",
    title: "React Complete Guide",
    author: "Maximilian Schwarzmüller",
    cover_url: reactGuide,
    level: "Intermediate",
    branch: "Web Development",
    skill: "Frontend",
    exam: "None",
    tags: ["react", "frontend"],
    available_copies: 4,
    total_copies: 4,
    shelf_location: "Book Shelf -4 > Column - 3 > Row -2"
  },
  {
    id: "9",
    title: "Database Management Systems",
    author: "Raghu Ramakrishnan",
    cover_url: databaseSystems,
    level: "Intermediate",
    branch: "Computer Science",
    skill: "Database",
    exam: "GATE",
    tags: ["database", "SQL"],
    available_copies: 0,
    total_copies: 2,
    shelf_location: "Book Shelf -2 > Column - 3 > Row -4",
    expected_date: "2024-12-01"
  },
  {
    id: "10",
    title: "Operating Systems Concepts",
    author: "Abraham Silberschatz",
    cover_url: operatingSystems,
    level: "Intermediate",
    branch: "Computer Science",
    skill: "OS",
    exam: "GATE",
    tags: ["operating systems", "processes"],
    available_copies: 3,
    total_copies: 5,
    shelf_location: "Book Shelf -2 > Column - 2 > Row -1"
  },
  {
    id: "11",
    title: "Cloud Computing Essentials",
    author: "Thomas Erl",
    cover_url: cloudComputing,
    level: "Beginner",
    branch: "Cloud Computing",
    skill: "Cloud",
    exam: "AWS",
    tags: ["cloud", "AWS"],
    available_copies: 5,
    total_copies: 5,
    shelf_location: "Book Shelf -5 > Column - 1 > Row -2"
  },
  {
    id: "12",
    title: "Docker and Kubernetes",
    author: "Nigel Poulton",
    cover_url: dockerKubernetes,
    level: "Advanced",
    branch: "DevOps",
    skill: "Containerization",
    exam: "CKA",
    tags: ["docker", "kubernetes"],
    available_copies: 2,
    total_copies: 3,
    shelf_location: "Book Shelf -5 > Column - 2 > Row -3"
  },
  {
    id: "13",
    title: "Blockchain Technology",
    author: "Imran Bashir",
    cover_url: blockchain,
    level: "Intermediate",
    branch: "Emerging Tech",
    skill: "Blockchain",
    exam: "None",
    tags: ["blockchain", "crypto"],
    available_copies: 3,
    total_copies: 3,
    shelf_location: "Book Shelf -6 > Column - 1 > Row -1"
  },
  {
    id: "14",
    title: "Internet of Things",
    author: "Arshdeep Bahga",
    cover_url: iot,
    level: "Beginner",
    branch: "Emerging Tech",
    skill: "IoT",
    exam: "None",
    tags: ["IoT", "sensors"],
    available_copies: 4,
    total_copies: 4,
    shelf_location: "Book Shelf -6 > Column - 2 > Row -2"
  },
  {
    id: "15",
    title: "Mobile App Development",
    author: "Neil Smyth",
    cover_url: mobileDev,
    level: "Intermediate",
    branch: "Mobile Development",
    skill: "Mobile",
    exam: "None",
    tags: ["mobile", "apps"],
    available_copies: 0,
    total_copies: 3,
    shelf_location: "Book Shelf -7 > Column - 1 > Row -3",
    expected_date: "2025-01-15"
  },
  {
    id: "16",
    title: "Flutter Development",
    author: "Marco Napoli",
    cover_url: flutter,
    level: "Beginner",
    branch: "Mobile Development",
    skill: "Mobile",
    exam: "None",
    tags: ["flutter", "dart"],
    available_copies: 5,
    total_copies: 5,
    shelf_location: "Book Shelf -7 > Column - 2 > Row -1"
  },
  {
    id: "17",
    title: "Git Version Control",
    author: "Scott Chacon",
    cover_url: git,
    level: "Beginner",
    branch: "DevOps",
    skill: "Version Control",
    exam: "None",
    tags: ["git", "version control"],
    available_copies: 7,
    total_copies: 7,
    shelf_location: "Book Shelf -5 > Column - 3 > Row -2"
  },
  {
    id: "18",
    title: "Software Testing",
    author: "Ron Patton",
    cover_url: testing,
    level: "Intermediate",
    branch: "Software Engineering",
    skill: "Testing",
    exam: "ISTQB",
    tags: ["testing", "QA"],
    available_copies: 3,
    total_copies: 4,
    shelf_location: "Book Shelf -8 > Column - 1 > Row -2"
  },
  {
    id: "19",
    title: "Agile Development",
    author: "Kent Beck",
    cover_url: agile,
    level: "Beginner",
    branch: "Software Engineering",
    skill: "Methodology",
    exam: "CSM",
    tags: ["agile", "scrum"],
    available_copies: 4,
    total_copies: 4,
    shelf_location: "Book Shelf -8 > Column - 2 > Row -1"
  },
  {
    id: "20",
    title: "Clean Code",
    author: "Robert Martin",
    cover_url: cleanCode,
    level: "Advanced",
    branch: "Software Engineering",
    skill: "Programming",
    exam: "None",
    tags: ["clean code", "best practices"],
    available_copies: 0,
    total_copies: 5,
    shelf_location: "Book Shelf -8 > Column - 3 > Row -3",
    expected_date: "2024-11-28"
  },
  {
    id: "21",
    title: "Design Patterns",
    author: "Gang of Four",
    cover_url: designPatterns,
    level: "Advanced",
    branch: "Software Engineering",
    skill: "Design",
    exam: "None",
    tags: ["patterns", "architecture"],
    available_copies: 2,
    total_copies: 3,
    shelf_location: "Book Shelf -8 > Column - 4 > Row -2"
  },
  {
    id: "22",
    title: "Linux Administration",
    author: "Michael Jang",
    cover_url: linuxAdmin,
    level: "Intermediate",
    branch: "System Administration",
    skill: "Linux",
    exam: "RHCSA",
    tags: ["linux", "admin"],
    available_copies: 3,
    total_copies: 3,
    shelf_location: "Book Shelf -9 > Column - 1 > Row -1"
  },
  {
    id: "23",
    title: "Windows Server",
    author: "William Stanek",
    cover_url: windowsServer,
    level: "Intermediate",
    branch: "System Administration",
    skill: "Windows",
    exam: "MCSA",
    tags: ["windows", "server"],
    available_copies: 2,
    total_copies: 2,
    shelf_location: "Book Shelf -9 > Column - 2 > Row -2"
  },
  {
    id: "24",
    title: "Network Security",
    author: "William Stallings",
    cover_url: networkSecurity,
    level: "Advanced",
    branch: "Computer Science",
    skill: "Security",
    exam: "CISSP",
    tags: ["security", "network"],
    available_copies: 1,
    total_copies: 3,
    shelf_location: "Book Shelf -1 > Column - 3 > Row -4"
  },
  {
    id: "25",
    title: "Artificial Intelligence",
    author: "Stuart Russell",
    cover_url: artificialIntelligence,
    level: "Advanced",
    branch: "Artificial Intelligence",
    skill: "AI",
    exam: "None",
    tags: ["AI", "intelligence"],
    available_copies: 0,
    total_copies: 2,
    shelf_location: "Book Shelf -3 > Column - 1 > Row -1",
    expected_date: "2025-02-01"
  },
  {
    id: "26",
    title: "Computer Vision",
    author: "Richard Szeliski",
    cover_url: computerVision,
    level: "Advanced",
    branch: "Artificial Intelligence",
    skill: "Computer Vision",
    exam: "None",
    tags: ["CV", "vision"],
    available_copies: 2,
    total_copies: 2,
    shelf_location: "Book Shelf -3 > Column - 2 > Row -3"
  },
  {
    id: "27",
    title: "Natural Language Processing",
    author: "Dan Jurafsky",
    cover_url: nlp,
    level: "Advanced",
    branch: "Artificial Intelligence",
    skill: "NLP",
    exam: "None",
    tags: ["NLP", "language"],
    available_copies: 1,
    total_copies: 2,
    shelf_location: "Book Shelf -3 > Column - 3 > Row -2"
  },
  {
    id: "28",
    title: "Web Design Basics",
    author: "Jennifer Robbins",
    cover_url: webDesign,
    level: "Beginner",
    branch: "Web Development",
    skill: "Design",
    exam: "None",
    tags: ["web design", "HTML"],
    available_copies: 6,
    total_copies: 6,
    shelf_location: "Book Shelf -4 > Column - 1 > Row -1"
  },
  {
    id: "29",
    title: "CSS Master",
    author: "Tiffany Brown",
    cover_url: cssMaster,
    level: "Intermediate",
    branch: "Web Development",
    skill: "Frontend",
    exam: "None",
    tags: ["CSS", "styling"],
    available_copies: 4,
    total_copies: 4,
    shelf_location: "Book Shelf -4 > Column - 1 > Row -2"
  },
  {
    id: "30",
    title: "Node.js Development",
    author: "Andrew Mead",
    cover_url: nodejs,
    level: "Intermediate",
    branch: "Web Development",
    skill: "Backend",
    exam: "None",
    tags: ["nodejs", "backend"],
    available_copies: 3,
    total_copies: 5,
    shelf_location: "Book Shelf -4 > Column - 4 > Row -1"
  },
  {
    id: "31",
    title: "GraphQL Basics",
    author: "Eve Porcello",
    cover_url: graphql,
    level: "Beginner",
    branch: "Web Development",
    skill: "API",
    exam: "None",
    tags: ["GraphQL", "API"],
    available_copies: 5,
    total_copies: 5,
    shelf_location: "Book Shelf -4 > Column - 5 > Row -2"
  },
  {
    id: "32",
    title: "RESTful APIs",
    author: "Leonard Richardson",
    cover_url: restfulApis,
    level: "Intermediate",
    branch: "Web Development",
    skill: "API",
    exam: "None",
    tags: ["REST", "API"],
    available_copies: 0,
    total_copies: 3,
    shelf_location: "Book Shelf -4 > Column - 6 > Row -1",
    expected_date: "2024-12-15"
  },
  {
    id: "33",
    title: "MongoDB Guide",
    author: "Kristina Chodorow",
    cover_url: mongodb,
    level: "Beginner",
    branch: "Database",
    skill: "NoSQL",
    exam: "None",
    tags: ["MongoDB", "NoSQL"],
    available_copies: 4,
    total_copies: 4,
    shelf_location: "Book Shelf -2 > Column - 4 > Row -1"
  },
  {
    id: "34",
    title: "PostgreSQL Administration",
    author: "Simon Riggs",
    cover_url: postgresql,
    level: "Advanced",
    branch: "Database",
    skill: "SQL",
    exam: "None",
    tags: ["PostgreSQL", "SQL"],
    available_copies: 2,
    total_copies: 3,
    shelf_location: "Book Shelf -2 > Column - 5 > Row -2"
  },
  {
    id: "35",
    title: "Redis in Action",
    author: "Josiah Carlson",
    cover_url: redis,
    level: "Intermediate",
    branch: "Database",
    skill: "Caching",
    exam: "None",
    tags: ["Redis", "cache"],
    available_copies: 3,
    total_copies: 3,
    shelf_location: "Book Shelf -2 > Column - 6 > Row -1"
  },
  {
    id: "36",
    title: "Microservices Architecture",
    author: "Sam Newman",
    cover_url: microservices,
    level: "Advanced",
    branch: "Software Engineering",
    skill: "Architecture",
    exam: "None",
    tags: ["microservices", "architecture"],
    available_copies: 1,
    total_copies: 2,
    shelf_location: "Book Shelf -8 > Column - 5 > Row -1"
  },
  {
    id: "37",
    title: "Event-Driven Architecture",
    author: "Adam Bellemare",
    cover_url: eventDriven,
    level: "Advanced",
    branch: "Software Engineering",
    skill: "Architecture",
    exam: "None",
    tags: ["events", "architecture"],
    available_copies: 2,
    total_copies: 2,
    shelf_location: "Book Shelf -8 > Column - 6 > Row -2"
  },
  {
    id: "38",
    title: "CI/CD Pipeline",
    author: "Paul Swartout",
    cover_url: cicd,
    level: "Intermediate",
    branch: "DevOps",
    skill: "CI/CD",
    exam: "None",
    tags: ["CI/CD", "automation"],
    available_copies: 0,
    total_copies: 3,
    shelf_location: "Book Shelf -5 > Column - 4 > Row -1",
    expected_date: "2025-01-10"
  },
  {
    id: "39",
    title: "Terraform Guide",
    author: "Yevgeniy Brikman",
    cover_url: terraform,
    level: "Intermediate",
    branch: "DevOps",
    skill: "Infrastructure",
    exam: "None",
    tags: ["terraform", "IaC"],
    available_copies: 3,
    total_copies: 3,
    shelf_location: "Book Shelf -5 > Column - 5 > Row -2"
  },
  {
    id: "40",
    title: "Ansible Automation",
    author: "Jeff Geerling",
    cover_url: ansible,
    level: "Beginner",
    branch: "DevOps",
    skill: "Automation",
    exam: "None",
    tags: ["ansible", "automation"],
    available_copies: 4,
    total_copies: 4,
    shelf_location: "Book Shelf -5 > Column - 6 > Row -1"
  },
  {
    id: "41",
    title: "Ethical Hacking",
    author: "Michael Gregg",
    cover_url: ethicalHacking,
    level: "Advanced",
    branch: "Computer Science",
    skill: "Security",
    exam: "CEH",
    tags: ["hacking", "security"],
    available_copies: 2,
    total_copies: 3,
    shelf_location: "Book Shelf -1 > Column - 4 > Row -3"
  },
  {
    id: "42",
    title: "Penetration Testing",
    author: "Georgia Weidman",
    cover_url: pentesting,
    level: "Advanced",
    branch: "Computer Science",
    skill: "Security",
    exam: "OSCP",
    tags: ["pentesting", "security"],
    available_copies: 1,
    total_copies: 2,
    shelf_location: "Book Shelf -1 > Column - 5 > Row -2"
  },
  {
    id: "43",
    title: "Quantum Computing",
    author: "Chris Bernhardt",
    cover_url: quantum,
    level: "Advanced",
    branch: "Emerging Tech",
    skill: "Quantum",
    exam: "None",
    tags: ["quantum", "computing"],
    available_copies: 0,
    total_copies: 1,
    shelf_location: "Book Shelf -6 > Column - 3 > Row -1",
    expected_date: "2025-03-01"
  },
  {
    id: "44",
    title: "AR/VR Development",
    author: "Tony Parisi",
    cover_url: arvr,
    level: "Intermediate",
    branch: "Emerging Tech",
    skill: "AR/VR",
    exam: "None",
    tags: ["AR", "VR"],
    available_copies: 2,
    total_copies: 2,
    shelf_location: "Book Shelf -6 > Column - 4 > Row -2"
  },
  {
    id: "45",
    title: "Data Science Basics",
    author: "Joel Grus",
    cover_url: dataScience,
    level: "Beginner",
    branch: "Data Science",
    skill: "Data Analysis",
    exam: "None",
    tags: ["data science", "python"],
    available_copies: 5,
    total_copies: 5,
    shelf_location: "Book Shelf -10 > Column - 1 > Row -1"
  },
  {
    id: "46",
    title: "Statistics for Data Science",
    author: "Peter Bruce",
    cover_url: statistics,
    level: "Intermediate",
    branch: "Data Science",
    skill: "Statistics",
    exam: "None",
    tags: ["statistics", "data"],
    available_copies: 3,
    total_copies: 4,
    shelf_location: "Book Shelf -10 > Column - 2 > Row -2"
  },
  {
    id: "47",
    title: "Big Data Analytics",
    author: "Seema Acharya",
    cover_url: bigData,
    level: "Advanced",
    branch: "Data Science",
    skill: "Big Data",
    exam: "None",
    tags: ["big data", "analytics"],
    available_copies: 2,
    total_copies: 3,
    shelf_location: "Book Shelf -10 > Column - 3 > Row -1"
  },
  {
    id: "48",
    title: "Apache Spark",
    author: "Holden Karau",
    cover_url: spark,
    level: "Advanced",
    branch: "Data Science",
    skill: "Big Data",
    exam: "None",
    tags: ["spark", "big data"],
    available_copies: 1,
    total_copies: 2,
    shelf_location: "Book Shelf -10 > Column - 4 > Row -3"
  },
  {
    id: "49",
    title: "Data Visualization",
    author: "Claus Wilke",
    cover_url: dataViz,
    level: "Beginner",
    branch: "Data Science",
    skill: "Visualization",
    exam: "None",
    tags: ["visualization", "charts"],
    available_copies: 4,
    total_copies: 4,
    shelf_location: "Book Shelf -10 > Column - 5 > Row -2"
  },
  {
    id: "50",
    title: "R Programming",
    author: "Hadley Wickham",
    cover_url: rProgramming,
    level: "Intermediate",
    branch: "Data Science",
    skill: "Programming",
    exam: "None",
    tags: ["R", "statistics"],
    available_copies: 0,
    total_copies: 3,
    shelf_location: "Book Shelf -10 > Column - 6 > Row -1",
    expected_date: "2024-12-20"
  }
];
