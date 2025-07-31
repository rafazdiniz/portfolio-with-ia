import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { ProfileCard } from "@/components/profile-card"
import { getProjects, fallbackProjects, type Project } from "@/lib/airtable"
import { NavigationBar } from "@/components/navigation-bar"
import { ContactFormBudgetComponent } from "@/components/Sections/ContactFormComponent"

export default async function DesignToolsPage() {
  // Fetch projects from Airtable with error handling
  let projects: Project[] = []
  try {
    projects = await getProjects()
  } catch (error) {
    console.error("Error in DesignToolsPage component:", error)
    projects = fallbackProjects
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation icons */}
        <NavigationBar className="mb-12 gap-6" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Card Column */}
          <div className="lg:col-span-3">
            <ProfileCard />
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-9">
            <div className="space-y-20">
              <ProjectsSection projects={projects} />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4 text-center text-xs text-gray-500">
        <p>Made by Rafael Diniz • Powered by Next.js</p>
      </footer>
    </div>
  )
}

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section>
      <h2 className="text-5xl font-bold">PROJETOS </h2>
      <h3 className="text-5xl font-bold text-gray-700 mb-12">RECENTES</h3>

      <div className="space-y-6">
        {projects.map((project) => (
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

function ProjectCard({
  title,
  description,
  image,
  url,
}: { title: string; description: string; image: string; url: string }) {
  // Default image if none is provided
  const imageSrc: string = image

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
            {image ? <Image
              src={image}
              alt={title || "Project"}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            /> : <Image
              src={"/placeholder.svg"}
              alt={title || "Project"}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />}
          </div>
          <div>
            <h4 className="text-2xl font-bold">{title || "Untitled Project"}</h4>
            <p className="text-gray-400">{description || "No description available"}</p>
          </div>
        </div>
        <div className="text-orange-500">
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </a>
  )
}

function ContactForm() {
  return (
    <section>
      <ContactFormBudgetComponent />
    </section>
  )
}
