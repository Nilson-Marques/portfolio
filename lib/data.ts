import type { Skill, Project, Certification, Education, Experience } from "./types";

export const skills: Skill[] = [
  { name: "React", category: "frontend", level: 4, icon: "⚛" },
  { name: "Next.js", category: "frontend", level: 4, icon: "▲" },
  { name: "HTML5 / CSS3", category: "frontend", level: 5, icon: "🌐" },
  { name: "JavaScript ES6+", category: "frontend", level: 4, icon: "JS" },
  { name: "Responsive Design", category: "frontend", level: 4, icon: "📱" },
  { name: "Accessibility (WCAG)", category: "frontend", level: 3, icon: "♿" },
  { name: "Node.js", category: "backend", level: 3, icon: "🟢" },
  { name: "REST APIs", category: "backend", level: 3, icon: "🔗" },
  { name: "OWASP Basics", category: "security", level: 3, icon: "🔒" },
  { name: "GDPR-aware dev", category: "security", level: 3, icon: "🛡" },
  { name: "Secure coding", category: "security", level: 3, icon: "🔐" },
  { name: "Networking / CCNA", category: "security", level: 3, icon: "🌐" },
  { name: "Git / GitHub", category: "tools", level: 4, icon: "🤝" },
  { name: "VS Code", category: "tools", level: 5, icon: "💻" },
  { name: "Agile / Iterative", category: "tools", level: 3, icon: "🔄" },
  { name: "TypeScript", category: "learning", level: 2, icon: "TS" },
  { name: "Cybersecurity (MSc)", category: "learning", level: 3, icon: "🔒" },
  { name: "Python / Forensics", category: "learning", level: 2, icon: "🐍" },
];

export const projects: Project[] = [
  {
    title: "Linux-project",
    description:
      "A project focused on Linux systems and automation. Explore the live site to see the implementation details and interactive features.",
    tags: ["Linux", "React", "Next.js", "Netlify", "Automation"],
    status: "live",
    github: "https://github.com/Nilson-Marques",
    demo: "https://linux-tiramisu-02834a.netlify.app/",
    highlight: true,
    domain: "Systems & Infrastructure",
  },
  {
    title: "GitHub Portfolio",
    description:
      "Public repository showcasing web projects, automation scripts, and continuous learning. Combines software engineering practice with security tooling and forensic automation using Python.",
    tags: ["Python", "Automation", "Security tooling", "Web projects"],
    status: "ongoing",
    github: "https://github.com/Nilson-Marques",
    domain: "Open source · Security",
  },
];

export const certifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2022",
    topics: ["CIA Triad", "Malware", "Phishing", "DDoS mitigation"],
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco",
    year: "2022",
    topics: ["Encryption", "Access control", "Incident response"],
  },
  {
    title: "CCNA Introduction to Networks",
    issuer: "Cisco",
    year: "2022",
    topics: ["IP addressing", "Subnetting", "Routing & switching"],
  },
  {
    title: "Network Security",
    issuer: "Cisco",
    year: "2022",
    topics: ["Firewall config", "VPNs", "IDS", "Securing Cisco devices"],
  },
];

export const education: Education[] = [
  {
    degree: "MSc – IT Management & Cybersecurity",
    institution: "GBS HE",
    location: "Malta",
    year: "2026–2027",
    status: "in-progress",
  },
  {
    degree: "Postgrad Certificate – IT Management & Cyber Forensics",
    institution: "Fabad / Daryus",
    location: "Brazil",
    year: "2022",
    status: "completed",
  },
  {
    degree: "Postgrad Specialisation – IT Management",
    institution: "University Institute Vale do Cricaré",
    location: "Brazil",
    year: "2017",
    status: "completed",
  },
  {
    degree: "BSc – Systems Analysis & Development",
    institution: "University Institute Vale do Cricaré",
    location: "Brazil",
    year: "2017",
    status: "completed",
  },
];

export const experience: Experience[] = [
  {
    role: "IT Intern",
    company: "Military Fire Department of Espírito Santo – IT Dept.",
    period: "2015–2016",
    hours: "300 hrs",
    points: [
      "Supported IT operations: hardware maintenance, software installation, and network troubleshooting.",     
      "Contributed to digital documentation workflows and applied cybersecurity best practices.",
      "Collaborated with technical and non-technical teams in a mission-critical public sector environment.",   
    ],
  },
];

export const contact = {
  email: "nilsonmarquesdonascimento@gmail.com",
  phone: "+356 99529541",
  github: "https://github.com/Nilson-Marques",
  location: "Naxxar, Malta",
};
