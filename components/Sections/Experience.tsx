'use client'

import { Certify } from "@/lib/airtable";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ExperienceSectionProps {
  certify: Certify[]
}
export function ExperienceSection({
  certify
}: ExperienceSectionProps) {
  // Hooks *****************************************************************

  // State *****************************************************************

  // Effect ****************************************************************

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
          certify?.map((x) => (
            <ExperienceCard
              key={x.id}
              company={x.title}
              img={x.image}
              role={""}
              description={x.description}
              period={new Date(x?.created_at!).toLocaleDateString('pt-BR', { dateStyle: 'medium' })}
            />
          ))
        }

      </div>
    </section>
  )
}

function ExperienceCard({
  company,
  img,
  role,
  description,
  period,
}: { img?: string, company: string; role: string; description: string; period?: string }) {
  return (
    <a href="/experience/" className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
      <div className="flex gap-4 items-center">
        <Image
          src={img || ''}
          width={500}
          height={500}
          alt=""
          className="w-20 h-20 rounded-md"
        />
        <div>
          <h4 className="text-xl font-bold">{company}</h4>
          <p className="text-gray-400">{role}</p>
          <p className="text-gray-500 text-sm mt-2">{description}</p>
          <p className="text-gray-600 text-xs mt-2">{period}</p>
        </div>
      </div>
      <ChevronRight className="text-gray-500" />
    </a>
  )
}