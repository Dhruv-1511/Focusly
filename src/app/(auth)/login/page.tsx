import { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Login | Focusly",
  description: "Initiate your neural link.",
};

export default function LoginPage() {
  return <LoginClient />;
}
