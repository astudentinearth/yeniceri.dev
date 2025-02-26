import { SiGithub, SiBluesky } from "@icons-pack/react-simple-icons";
import { Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 w-full flex flex-col sm:flex-row justify-start gap-3 [&_a]:opacity-70 [&_a]:hover:opacity-100 [&_a]:transition-opacity">
      <div className="flex gap-3">
        <Link href="https://github.com/astudentinearth/">
          <SiGithub />
        </Link>
        <Link href="https://x.com/codingwithburak/">
          <Twitter />
        </Link>
        <Link href="https://www.linkedin.com/in/burak-yeniceri/">
          <Linkedin />
        </Link>
        <Link href="https://bsky.app/profile/codingwithburak.bsky.social">
          <SiBluesky />
        </Link>
      </div>
      <div className="grow"></div>
      <Link href={"https://github.com/astudentinearth/yeniceri.dev"}>
        Source code
      </Link>
      <div className="hidden sm:block"></div>
      <Link href={"https://yeniceri.dev/acknowledgements.txt"}>
        Acknowledgements
      </Link>
    </footer>
  );
}
