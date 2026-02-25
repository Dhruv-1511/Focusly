import { Metadata } from "next";
import CommunityClient from "./CommunityClient";

export const metadata: Metadata = {
  title: "Community",
  description: "Connect with the global Focusly community. Share progress, join guilds, and compete on the leaderboard.",
};

export default function Page() {
  return <CommunityClient />;
}
