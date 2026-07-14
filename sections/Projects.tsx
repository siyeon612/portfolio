"use client";

import { useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import ProjectPanel from "@/components/ProjectPanel";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-mono text-xl font-semibold text-zinc-100">
              Popular repositories
            </h2>
          </div>

          <p className="hidden font-mono text-xs text-zinc-500 sm:block">
            Pinned projects
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectPanel
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}