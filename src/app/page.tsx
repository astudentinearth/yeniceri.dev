import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center absolute left-0 top-0 w-full h-full overflow-y-auto">
      <div className="flex flex-col gap-6 lg:gap-12 items-center p-8 max-w-360">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl text-[#B8FFBB]">{"// Hi there!"}</h2>
          <h1 className="text-4xl lg:text-6xl text-[#DADADA] font-bold">
            I&apos;m Burak, a{" "}
            <span className="underline">full-stack developer</span> and computer
            science student.
          </h1>
        </div>
        <Skills />
      </div>
    </div>
  );
}
