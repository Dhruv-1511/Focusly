import Link from "next/link";
import { BrainZapLogo } from "@/components/ui/Logo";

export function Logo() {
  return (
    <Link href="/" className="items-center gap-3 hidden lg:flex group transition-all shrink-0">
      <BrainZapLogo className="h-10 w-10 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
      <span className="text-2xl font-black text-white tracking-tighter italic uppercase">Focusly</span>
    </Link>
  );
}
