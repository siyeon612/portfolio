import type { Project } from "@/data/projects";
import { visibilityStyles } from "@/lib/projectStyles";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({
  project,
  onSelect,
}: ProjectCardProps) {
  const visibilityClass = visibilityStyles[project.visibility];
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group flex min-h-64 w-full flex-col rounded-lg border border-zinc-700 bg-[#0b0f16] p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500 hover:bg-[#0d121b] hover:shadow-lg hover:shadow-sky-950/20"
    >
      <div className="flex w-full items-start justify-between gap-4">
        <h3 className="font-mono text-[17px] font-semibold text-sky-400 transition-colors group-hover:text-sky-300">
          {project.name}
        </h3>

        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] ${visibilityClass}`}
        >
          {project.visibility}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-md
              border
              border-zinc-700
              bg-zinc-900/60
              px-2.5
              py-1
              font-mono
              text-[11px]
              text-zinc-400
              transition-colors
              group-hover:border-zinc-500
              group-hover:text-zinc-200
              "
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex w-full justify-end pt-7">
        <span className="font-mono text-xs text-zinc-500 transition-colors group-hover:text-zinc-300">
          View details →
        </span>
      </div>
    </button>
  );
}