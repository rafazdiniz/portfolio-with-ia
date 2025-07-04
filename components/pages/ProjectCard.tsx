'use client'

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function ProjectCard({
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
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
            {image ? <Image
              src={image}
              alt={title || "Project"}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            /> : <img
              src={"/placeholder.svg"}
              alt={title || "Project"}
              // width={80}
              // height={80}
              className="w-full h-full object-cover"
            />}
          </div>
          <div>
            <h4 className="text-xl font-bold">{title || "Untitled Project"}</h4>
            <p className="text-gray-400">{description || "No description available"}</p>
          </div>
        </div>
        <ChevronRight className="text-gray-500" />
      </div>
    </a>
  )
}