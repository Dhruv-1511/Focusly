import { Metadata } from "next";
import RewardsClient from "./RewardsClient";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Track your progress, unlock badges, and harvest XP from your high-performance study sessions.",
};

export default function Page() {
  return <RewardsClient />;
}
