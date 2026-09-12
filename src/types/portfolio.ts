import { LucideIcon } from "lucide-react";

export type ProjectCategory = "all" | "excel" | "dashboards" | "operations";

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectItem {
  no: string;
  title: string;
  type: string;
  category: ProjectCategory;
  file?: string;
  stats: ProjectStat[];
  desc: string;
  tags: string[];
  features?: string[];
  keyFormulas?: string[];
  businessImpact?: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  points: string[];
}

export interface FeaturedCaseStudy {
  no: string;
  title: string;
  client: string;
  desc: string;
  stats: ProjectStat[];
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  keyHighlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  url: string;
}

export interface QuickMetric {
  value: string;
  label: string;
  detail: string;
}
