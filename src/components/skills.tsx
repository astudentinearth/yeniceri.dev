import Image from "next/image";

export function Skills() {
  return (
    <div className="w-fit drop-shadow-lg hover:scale-102 transition-transform mt-3">
      <a href="https://skillicons.dev">
        <Image className="max-h-[84px] object-contain" src={"/skills.png"} alt="My skillset" width={1118} height={220}/>
      </a>
    </div>
  );
}
