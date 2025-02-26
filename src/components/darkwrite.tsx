import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "./button";
import { Code, SquareArrowOutUpRight } from "lucide-react";

export function DarkwriteProject() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      <Image
        className="lg:w-[50%] rounded-lg border drop-shadow-lg hover:drop-shadow-xl transition-[filter] shrink-0"
        src={"/darkwrite.png"}
        alt="Darkwrite"
        width={1583}
        height={992}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl lg:text-6xl flex gap-4 items-center font-bold">
          <Image
            src={"/darkwrite_icon.png"}
            width={64}
            height={64}
            alt="Darkwrite app icon"
            className="rounded-xl size-12 lg:size-16"
          />
          Darkwrite
        </h2>
        <p className="text-lg lg:text-2xl">
          Powerful and personal note taking application.{" "}
          <span className="underline">Fully open source.</span> Available for
          all desktops, completely for free.
        </p>
        <p className="opacity-75 hover:opacity-90 transition-opacity">
          Made with TypeScript, React, Electron and many others.
        </p>
        <div className="flex gap-3">
          <PrimaryButton href="https://darkwrite.app" className="w-1/2 sm:w-fit">
            <div className="flex gap-2 items-center">
              <SquareArrowOutUpRight className="size-5 sm:size-6"/>darkwrite.app
            </div>
          </PrimaryButton>
          <SecondaryButton href="https://github.com/astudentinearth/darkwrite" className="w-1/2 sm:w-fit">
            <div className="flex gap-2 items-center">
              <Code className="size-5 sm:size-6"/>Source code
            </div>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
