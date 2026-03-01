import Link from "next/link";
import { BrainZapLogo } from "@/components/ui/Logo";

export function Logo() {
  return (
    <Link href="/" className="items-center gap-3 hidden lg:flex group transition-all shrink-0 bg-primary px-6 py-2 skew-x-[-15deg] border-4 border-black shadow-[8px_8px_0_0_#fff]">
      <span className="text-3xl font-black text-black italic tracking-tighter uppercase skew-x-[15deg] glitch" data-text="Focusly.">Focusly.</span>
    </Link>
  );
}
