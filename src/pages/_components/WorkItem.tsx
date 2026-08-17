import type { ReactNode } from "react";
export interface WorkItemProps {
  title: string;
  techs: string[];
  /** Prose content */
  children: ReactNode;
  date: string;
  imageSrc?: string;
}

export const WorkItem = (props: WorkItemProps) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-default!">{props.title}</h1>
        <span className="type-md text-muted">{props.date}</span>
      </div>
      <span className="mt-3 mb-2 text-base text-muted">
        {props.techs.join("  |  ")}
      </span>
      <div className="gap-3 flex flex-col">
      {props.children}
      </div>
      <div className="w-full h-auto mt-6">
        <img src={props.imageSrc} className="w-full h-auto" />
      </div>
    </div>
  )
}

