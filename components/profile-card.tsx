import Image from "next/image"
import { Card } from "@/components/ui/card"

export function ProfileCard() {
  return (
    <Card className="bg-white text-black overflow-hidden">
      <div className="relative h-48 bg-amber-700">
        <Image
          src={'/code.jpg'}
          alt="Profile background"
          width={384}
          height={192}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-700"></div>
      </div>
      <div className="p-4 relative">
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[150px] h-[150px] rounded-3xl overflow-hidden border-4 border-white">
          <Image
            src={'/eu.webp'}
            alt="Rafael Diniz"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-xl font-bold">Rafael Diniz</h2>
          <p className="text-sm text-gray-600 mt-1">
            A Software Engineer who has a strong passion for creating innovative solutions.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            {/* <SocialIcon icon="github" />
            <SocialIcon icon="twitter" />
            <SocialIcon icon="linkedin" />
            <SocialIcon icon="instagram" /> */}
          </div>
        </div>
      </div>
    </Card>
  )
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
      <span className="sr-only">{icon}</span>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
    </div>
  )
}
