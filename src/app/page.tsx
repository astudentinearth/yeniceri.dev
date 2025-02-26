import { ChatProject } from "@/components/chat";
import { DarkwriteProject } from "@/components/darkwrite";
import { Footer } from "@/components/footer";
import { Skills } from "@/components/skills";
import { SocialButton } from "@/components/social-button";
import { WeatherAppProject } from "@/components/weather";
import { SiBluesky, SiGithub } from "@icons-pack/react-simple-icons";
import { Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center absolute left-0 top-0 w-full h-full overflow-y-auto">
      <div className="flex flex-col gap-4 lg:gap-8 items-center p-8 max-w-360">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl text-[#B8FFBB]">
            {"// Hi there!"}
          </h2>
          <h1 className="text-4xl lg:text-6xl text-[#DADADA] font-bold">
            I&apos;m Burak, a{" "}
            <span className="underline">full-stack developer</span> and computer
            science student.
          </h1>
        </div>
        <Skills />
        <div className="flex gap-3">
          <SocialButton href="https://github.com/astudentinearth/">
            <SiGithub />
          </SocialButton>
          <SocialButton href="https://x.com/codingwithburak/">
            <Twitter />
          </SocialButton>
          <SocialButton href="https://www.linkedin.com/in/burak-yeniceri/">
            <Linkedin />
          </SocialButton>
          <SocialButton href="https://bsky.app/profile/codingwithburak.bsky.social">
            <SiBluesky />
          </SocialButton>
        </div>
      </div>
      <div className="bg-background-2 p-2 xl:p-12 w-full flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl mt-8">
          {"/* my projects */"}
        </h1>
        <div className="flex flex-col gap-24 mt-8 items-center p-2 sm:p-6 lg:p-8 max-w-360">
          <DarkwriteProject />
          <WeatherAppProject />
          <ChatProject />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
