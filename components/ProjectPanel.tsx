"use client";

import Image from "next/image";
import { useEffect } from "react";

import type { Project } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { Link2 } from "lucide-react";
import { visibilityStyles } from "@/lib/projectStyles";

type ProjectPanelProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectPanel({
  project,
  onClose,
}: ProjectPanelProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200]">
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#111827]/20 backdrop-blur-md"
      />

      <aside className="absolute right-0 top-0 h-full w-full overflow-y-auto border-l border-zinc-700/80 bg-[#151b26] shadow-2xl sm:max-w-2xl">
        <div className="relative min-h-full p-6 pt-16 md:p-8 md:pt-16">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project panel"
            className="absolute right-6 top-6 rounded-md border border-zinc-600 bg-zinc-800/40 px-3 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-400 hover:bg-zinc-700/60 hover:text-white md:right-8 md:top-8"
          >
            X
          </button>
          <div className="flex items-start justify-between gap-6">
            <div>
              <span
                className={`inline-flex rounded-full border px-2.5 py-1 font-mono text-[11px]
                ${visibilityStyles[project.visibility]}`}
              >
                {project.visibility}
              </span>

              <h2 className="mt-4 font-mono text-2xl font-semibold text-zinc-50">
                {project.name}
              </h2>

              <p className="mt-2 font-mono text-sm text-sky-400">
                {project.technologies.join(" · ")}
              </p>
            </div>
          </div>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-md border border-zinc-600/80 bg-[#0f141d]">
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 576px"
            />
          </div>

          <section className="mt-8 border-b border-zinc-700/70 pb-8">
            <h3 className="font-mono text-lg font-semibold text-sky-400">
              ## Overview
            </h3>

            <p className="mt-4 text-base leading-7 text-zinc-300">
              {project.overview}
            </p>
          </section>

          <section className="mt-8">
            <h3 className="font-mono text-lg font-semibold text-sky-400">
              ## Key features
            </h3>

            <ul className="mt-4 space-y-3 text-base leading-6 text-zinc-300">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="font-mono text-sky-500">-</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-md border border-zinc-600 bg-[#111827] font-mono text-sm text-zinc-100 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-800"
              >
                <FaGithub className="text-base" />
                GitHub Repo
              </a>
            ) : (
              <span className="flex h-12 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 text-sm text-zinc-600">
                <FaGithub className="text-base" />
                GitHub Repo
              </span>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-md border border-sky-500 bg-sky-500/5 font-mono text-sm text-sky-400 transition-all duration-200 hover:bg-sky-500/10 hover:text-sky-300"
              >
                <Link2 size={16} />
                Live Demo
              </a>
            ) : (
              <span className="flex h-12 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 text-sm text-zinc-600">
                <Link2 size={16} />
                Demo Coming Soon
              </span>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}