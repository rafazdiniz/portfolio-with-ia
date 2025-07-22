'use client'
import { Project } from "@/lib/airtable"
import { ProjectCard } from "./ProjectCard"

export function RecentProjects({ projects }: { projects: Project[] }) {
  // Use the first 3 projects
  const displayProjects = projects.slice(0, 3)


  return (
    <section id="projects">
      <h2 className="text-4xl font-bold">PROJETOS</h2>
      <h3 className="text-4xl font-bold text-gray-700 mb-8">RECENTES</h3>

      <div className="space-y-4">
        {displayProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </section>
  )
}