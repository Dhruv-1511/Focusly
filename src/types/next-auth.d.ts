import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      stats?: {
        hoursStudied: number;
        focusStreak: number;
        xp: number;
        level: number;
        badges: string[];
      };
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
    stats?: {
      hoursStudied: number;
      focusStreak: number;
      xp: number;
      level: number;
      badges: string[];
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
