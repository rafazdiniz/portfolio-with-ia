'use client'

import { Certify } from "@/lib/airtable";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface ExperienceSectionProps {
  certify: Certify[]
}
export function ExperienceSection({
  certify
}: ExperienceSectionProps) {
  // Hooks *****************************************************************

  // State *****************************************************************

  // Effect ****************************************************************
  useEffect(() => {
    console.log(certify);

  }, [certify])

  // Function **************************************************************

  // Render ****************************************************************
  return <Experience certify={certify} />
}

function Experience({ certify }: { certify: Certify[] }) {
  return (
    <section id="experience">
      <h2 className="text-4xl font-bold">CERTIFICADOS</h2>
      <h3 className="text-4xl font-bold text-gray-700 mb-8">CONQUISTAS</h3>

      <div className="space-y-4">

        {
          certify?.map(x => (
            <ExperienceCard
              company="PixelForge Studios"
              role="Lead UX/UI Designer & Front-end Developer"
              description="Led design and front-end development for multiple high-profile clients, focusing on responsive design and user experience."
              period="Jan 2020 - Present"
            />
          ))
        }

      </div>
    </section>
  )
}

function ExperienceCard({
  company,
  role,
  description,
  period,
}: { company: string; role: string; description: string; period: string }) {
  return (
    <a href="/experience/" className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
      <div>
        <h4 className="text-xl font-bold">{company}</h4>
        <p className="text-gray-400">{role}</p>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
        <p className="text-gray-600 text-xs mt-2">{period}</p>
      </div>
      <ChevronRight className="text-gray-500" />
    </a>
  )
}