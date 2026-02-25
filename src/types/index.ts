import { LucideIcon } from "lucide-react";

export interface Task {
  time: string;
  task: string;
  type: string;
  status?: string;
}

export interface Stats {
  hoursStudied: number;
  focusStreak: number;
  xp: number;
  level: number;
  badges: string[];
}

export interface StudyPlan {
  id: string;
  stats: Stats;
  daily: Task[];
  milestones?: Milestone[];
}

export interface Milestone {
  label: string;
  date: string;
  type: string;
  highlighted?: boolean;
}

export interface NavItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

export interface UserSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export interface PlanItem {
  time: string;
  task: string;
  color: string;
}
