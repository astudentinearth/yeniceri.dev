import { cn } from "@/lib/utils";
import Link  from "next/link";
import { ReactNode } from "react";

export function SocialButton({href, className, children}: {href: string, className?: string, children?: ReactNode}){
  return <Link href={href} className={cn("p-2 sm:p-4 rounded-2xl border hover:bg-white/10 transition-[background,scale] duration-50 hover:scale-105", className)}>
    {children}
  </Link>
}