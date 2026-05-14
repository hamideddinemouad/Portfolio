
export interface Project {
  title: string;
  tech: string[];
  description: string;
  links?: ProjectLink[];
  api?: ProjectApi;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectApi {
  baseUrl: string;
  docsUrl?: string;
  note?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
