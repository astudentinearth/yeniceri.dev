import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "./button";
import { Code, SquareArrowOutUpRight } from "lucide-react";

export function WeatherAppProject() {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
      <Image
        className="lg:w-[50%] rounded-2xl border drop-shadow-lg hover:drop-shadow-xl transition-[filter] shrink-0"
        src={"/weather.png"}
        alt="Weather app"
        width={1547}
        height={931}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl lg:text-6xl flex gap-4 items-center font-bold">
          <Image
            src={"/weather-icon.png"}
            width={64}
            height={64}
            alt="Weather app icon"
            className="rounded-xl size-12 lg:size-16"
          />
          Weather
        </h2>
        <p className="text-lg lg:text-2xl">
          Just another weather app, running in your browser. Fully responsive.
          It is a PWA meaning you can install it locally.
        </p>
        <p className="opacity-75 hover:opacity-90 transition-opacity">
          Made with TypeScript and React. Weather icons were made by me with
          Inkscape. Weather data from open-meteo.
        </p>
        <div className="flex gap-3">
          <PrimaryButton href="https://astudentinearth.github.io/weather-app" className="w-1/2 sm:w-fit">
            <div className="flex gap-2 items-center"><SquareArrowOutUpRight className="size-5 sm:size-6"/> Try it live</div>
          </PrimaryButton>
          <SecondaryButton href="https://github.com/astudentinearth/weather-app" className="w-1/2 sm:w-fit"><div className="flex gap-2 items-center"><Code className="size-5 sm:size-6"/> Source code</div></SecondaryButton>
        </div>
      </div>
    </div>
  );
}
