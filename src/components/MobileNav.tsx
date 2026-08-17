import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import {EMAIL_ADDRESS, LINKEDIN_URL, TWITTER_URL, GITHUB_URL, DARKWRITE_WEBSITE, INSTAGRAM_URL, repo} from "@/lib/resources";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const Link = ({ href, children }: { href?: string; children: ReactNode }) => <a href={href} onClick={() => setOpen(false)}>{children}</a>

  return (
    <><nav className={cn("w-screen fixed p-4 pt-16 inset-0 z-10 transition-opacity h-screen backdrop-blur-xl opacity-0 ", open ? "opacity-100 bg-background-2/70" : "opacity-0 pointer-events-none")}>
      <button className="fixed left-4 top-4 z-10 text-muted flex gap-2 items-center" onClick={() => setOpen(false)}><X />Close</button>
  <div className="flex flex-col text-4xl text-default gap-4 [&>a]:hover:underline h-full overflow-y-auto">
    <Link href="/#home">Home</Link>
    <Link href="/#about">About</Link>
    <Link href="/#work">Work</Link>
    <Link href="/#contact">Contact</Link> 
    <hr className="section-hr" />
    <Link href={DARKWRITE_WEBSITE}>darkwrite.app</Link>
    <Link href={GITHUB_URL}>GitHub</Link>
    <Link href={LINKEDIN_URL}>LinkedIn</Link>
    <Link href={TWITTER_URL}>Twitter</Link>
    <Link href={INSTAGRAM_URL}>Instagram</Link>
    <hr className="section-hr" />
    <Link>Close</Link>
  </div>


    </nav> {!open && <button className="fixed left-4 top-4 z-10 text-muted" onClick={() => setOpen(true)}><Menu /></button>}</>
  )
}
