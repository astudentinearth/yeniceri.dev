import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";


export function PrimaryButton({
  className,
  children,
  href
}: {className?: string, children?: ReactNode, href: string}) {
  const classNames = cn(
    "bg-primary text-primary-foreground p-3 rounded-lg text-md lg:text-lg xl:text-2xl flex justify-center items-center hover:bg-primary/90 transition-colors cursor-pointer",
    className,
  );
  return (
    <Link className={classNames} href={href}>
      {children}
    </Link>
  );
}

export function SecondaryButton({
  className,
  children,
  href
}: {className?: string, children?: ReactNode, href: string}) {
  return (
    <Link
    href={href}
      className={cn(
        "bg-transparent text-foreground p-2 sm:p-3 rounded-lg text-md lg:text-lg xl:text-2xl border border-primary flex justify-center items-center hover:bg-primary/10 transition-colors cursor-pointer",
        className,
      )}
    >
      {children}
    </Link>
  );
}
