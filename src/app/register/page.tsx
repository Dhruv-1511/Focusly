import { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Join Focusly",
  description: "Create your neural profile and start your journey to cognitive mastery with the elite high-performers community.",
};

export default function Page() {
  return <RegisterClient />;
}
