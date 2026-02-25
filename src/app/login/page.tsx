import { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Login",
  description: "Initiate your neural link and continue your high-performance journey with Focusly.",
};

export default function Page() {
  return <LoginClient />;
}
