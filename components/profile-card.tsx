import Image from "next/image"
import { Card } from "@/components/ui/card"

export function ProfileCard() {
  return (
    <Card className="bg-transparent text-black overflow-hidden !border-none">
      <div className="p-4 relative w-full flex flex-col items-center justify-center">
        <div className=" w-[150px] h-[150px] rounded-3xl overflow-hidden">
          <Image
            src={'/eu.jpg'}
            alt="Rafael Diniz"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-xl font-bold text-neutral-100">Rafael Diniz</h2>
          <p className="text-sm text-neutral-200 mt-1">
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
