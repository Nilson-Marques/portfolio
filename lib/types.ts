export interface Skill {
  name: string;
  category: "frontend" | "backend" | "security" | "tools" | "learning";
  level: number; // 1-5
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "live" | "ongoing" | "completed";
  github?: string;
  demo?: string;
  highlight?: boolean;
  domain?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  topics: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  status?: "in-progress" | "completed";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  hours?: string;
  points: string[];
}
