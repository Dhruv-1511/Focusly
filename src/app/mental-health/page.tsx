import { Metadata } from "next";
import MentalHealthClient from "./MentalHealthClient";

export const metadata: Metadata = {
  title: "Wellness Center",
  description: "Monitor your mental wellbeing and access protocols for cognitive recovery and stress management.",
};

export default function Page() {
  return <MentalHealthClient />;
}
