import { Code } from "lucide-react";
import Image from "next/image";
import { SecondaryButton } from "./button";

export function ChatProject() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      <Image
        className="lg:w-[50%] rounded-2xl border drop-shadow-lg hover:drop-shadow-xl transition-[filter] shrink-0"
        src={"/chat.png"}
        alt="Chat app"
        width={996}
        height={762}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl lg:text-6xl flex gap-4 items-center font-bold">
          Chat
        </h2>
        <p className="text-lg lg:text-2xl">
        Real-time chat application with support for invite links and text channels.
        </p>
        <p className="opacity-75 hover:opacity-90 transition-opacity">
          Made with TypeScript, React, NextJS and DrizzleORM. Runs with a Postgres database.
        </p>
        <div className="flex gap-3">
          <SecondaryButton href="https://github.com/astudentinearth/next14-chat-app" className="w-1/2 sm:w-fit">
            <div className="flex gap-2 items-center">
              <Code className="size-5 sm:size-6"/> Source code
            </div>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
