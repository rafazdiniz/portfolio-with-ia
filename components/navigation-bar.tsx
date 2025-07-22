'use client'

import { BrainCircuit, HomeIcon, MessageCircle, Paperclip, Wrench } from "lucide-react"
import Link from "next/link"
import { HTMLAttributes } from "react"

const nav = [
  {
    name: 'home',
    path: '/#home',
    icon: () => <HomeIcon />
  }, {
    name: 'projects',
    path: '/#projects',
    icon: () => <Paperclip />
  },
  {
    name: 'tools',
    path: '/#tools',
    icon: () => <Wrench />
  },
  {
    name: 'experience',
    path: '/#experience',
    icon: () => <BrainCircuit />
  }, {
    name: 'contact',
    path: '/#contact',
    icon: () => <MessageCircle />
  }

]

interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {

}
export function NavigationBar({
  className
}: NavigationBarProps) {
  // Hooks *****************************************************************

  // State *****************************************************************

  // Effect ****************************************************************

  // Function **************************************************************

  // Render ****************************************************************
  return <>
    <div className={`flex justify-center ${className}`}>
      {
        nav.map((x, i) => (
          <Link key={i.toString()} href={x.path} className="w-min h-min bg-gray-800 rounded-full flex items-center justify-center p-2">
            {x.icon()}
          </Link>
        ))
      }
    </div>
  </>
}