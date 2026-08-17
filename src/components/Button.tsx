import { cn } from "@/lib/utils";
import React from "react"

export type LinkButtonProps = React.ComponentProps<"a"> & { variant?: "primary" | "secondary" | "ghost" };

const variance: Record<string, string> = {
  "primary": "bg-primary text-black",
  "secondary": "bg-background-3 top-highlight",
  "ghost": "bg-transparent"
}

export const LinkButton = ({ className, children, variant, ...rest }: LinkButtonProps) => <a className={cn("rounded-xl flex items-center justify-center px-5 py-3 type-md", variance[variant || "primary"], className)} {...rest}>{children}</a>
