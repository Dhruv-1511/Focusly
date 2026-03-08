import { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Register | Focusly",
  description: "Join the elite 0.1% performance tier.",
};

export default function RegisterPage() {
  return <RegisterClient />;
}
