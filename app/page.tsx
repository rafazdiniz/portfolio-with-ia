import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { getProjects, fallbackProjects, type Project } from "@/lib/airtable"
import { RecentProjects } from "@/components/pages/RecentProjects"
import { ProfileCard } from "@/components/profile-card"
import { NavigationBar } from "@/components/navigation-bar"

export default async function Portfolio() {
  // Fetch projects from Airtable with error handling
  let projects: Project[] = []
  try {
    projects = await getProjects()
  } catch (error) {
    console.error("Error in Portfolio component:", error)
    projects = fallbackProjects
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Page */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky Profile Card Column */}
          <div className="lg:col-span-3 lg:sticky lg:top-8 lg:self-start">
            <ProfileCard />
          </div>

          {/* Main Content Column */}
          <div className="relative lg:col-span-9">
            {/* Navigation */}
            <NavigationBar className="py-2 container bg-black sticky left-0 top-0 z-50 mb-12 gap-6" />
            <div className="space-y-20">
              <HeroSection />
              <RecentProjects projects={projects} />
              <Experience />
              <Tools />
              <DesignThoughts />
              <ContactForm />
            </div>
          </div>
        </main>
      </div>
      <footer className="py-4 text-center text-xs text-gray-500">
        <p>Made by Rafael Diniz • Powered by Next.js</p>
      </footer>
    </div>
  )
}



function HeroSection() {
  return (
    <section>
      <h1 className="text-5xl font-bold">SOFTWARE</h1>
      <h2 className="text-5xl font-bold text-gray-700">ENGINEER</h2>
      <p className="text-gray-400 mt-2 max-w-2xl">
        Passionate about creating intuitive and engaging user experiences. Specializes in transforming ideas into
        beautifully crafted products.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <StatCard number="+12" label="YEARS EXPERIENCE" />
        <StatCard number="+46" label="PROJECTS COMPLETED" />
        <StatCard number="+20" label="CONTRIBUTIONS" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <SkillCard title="DYNAMIC INTERACTIONS & MOTION DESIGN" color="bg-amber-700" icon="square" />
        <SkillCard
          title="MAIS PROJETOS..."
          color="bg-yellow-800"
          icon="square"
          url="/skills/design-tools"
        />
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold">{number}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}

function SkillCard({ title, color, icon, url }: { title: string; color: string; icon: string; url?: string }) {
  const content = (
    <div className={`${color} p-6 rounded-lg relative`}>
      <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded flex items-center justify-center">
        <span className="sr-only">{icon}</span>
      </div>
      <h3 className="text-white font-medium">{title}</h3>
    </div>
  )

  if (url) {
    return <Link href={url}>{content}</Link>
  }

  return content
}




function Experience() {
  return (
    <section id="experience">
      <h2 className="text-4xl font-bold">CERTIFICADOS</h2>
      <h3 className="text-4xl font-bold text-gray-700 mb-8">CONQUISTAS</h3>

      <div className="space-y-4">
        <ExperienceCard
          company="PixelForge Studios"
          role="Lead UX/UI Designer & Front-end Developer"
          description="Led design and front-end development for multiple high-profile clients, focusing on responsive design and user experience."
          period="Jan 2020 - Present"
        />
        <ExperienceCard
          company="BlueWave Innovators"
          role="Senior UI/UX Designer & Front-end Developer"
          description="Created and implemented design strategies for enterprise-level applications, focusing on accessibility and user engagement."
          period="July 2015 - Dec 2019"
        />
        <ExperienceCard
          company="TrendCraft Solutions"
          role="UI/UX Designer & Front-end Developer"
          description="Designed and developed responsive websites and applications for clients across various industries."
          period="May 2010 - May 2015"
        />
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
    <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
      <div>
        <h4 className="text-xl font-bold">{company}</h4>
        <p className="text-gray-400">{role}</p>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
        <p className="text-gray-600 text-xs mt-2">{period}</p>
      </div>
      <ChevronRight className="text-gray-500" />
    </div>
  )
}

function Tools() {



  return (
    <section id="tools">
      <h2 className="text-4xl font-bold">FERRAMENTAS</h2>
      <h3 className="text-4xl font-bold text-gray-700 mb-8">UTILIZADAS</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ToolCard name="Framer" description="Prototyping" />
        <ToolCard name="Figma" description="Design" />
        <ToolCard name="Lemon Squeezy" description="E-commerce" />
        <ToolCard name="ChatGPT" description="AI Assistant" />
        <ToolCard name="Notion" description="Documentation" />
        <ToolCard name="Nextjs" description="Web Development" />
      </div>
    </section>
  )
}

function ToolCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex flex-col items-center p-4 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
      <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center mb-2">
        <div className="w-5 h-5 bg-gray-600 rounded"></div>
      </div>
      <h4 className="font-medium">{name}</h4>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  )
}

function BlogCard({ title, excerpt, date, slug }: { title: string; excerpt: string; date: string; slug: string }) {
  return (
    <div className="p-4 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="text-gray-500 text-sm mt-2">{excerpt}</p>
          <p className="text-gray-600 text-xs mt-2">{date}</p>
        </div>
        <ChevronRight className="text-gray-500" />
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="link" className="text-xs text-gray-400" asChild>
          <Link href={`/blog/${slug}`}>Read more</Link>
        </Button>
      </div>
    </div>
  )
}

function DesignThoughts() {
  return (
    <section>
      <h2 className="text-4xl font-bold">DESIGN</h2>
      <h3 className="text-4xl font-bold text-gray-700 mb-8">THOUGHTS</h3>

      <div className="space-y-4">
        <BlogCard
          title="Starting and Growing a Career in Web Design"
          excerpt="As a beginner just starting to develop your skills, it's important to focus on the fundamentals. Learn HTML, CSS, and JavaScript thoroughly from reliable sources. Practice daily, even if it's just small projects."
          date="Feb 8, 2023"
          slug="starting-and-growing-a-career-in-web-design"
        />
        <BlogCard
          title="Create a Landing Page That Performs Great"
          excerpt="Whether you want to create a landing page, or product design, you'll need to approach the experience of building from ground up. Design is not just how it looks, it's also about how they help increase your conversion."
          date="May 18, 2023"
          slug="create-a-landing-page-that-performs-great"
        />
        <BlogCard
          title="How Can Designers Prepare for the Future?"
          excerpt="Whether you want to create a landing page, or product design, you'll need to approach the experience of building from ground up. Design is not just how it looks, it's also about how they help increase your conversion."
          date="July 30, 2023"
          slug="how-can-designers-prepare-for-the-future"
        />
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <section id="contact">
      <h2 className="text-4xl font-bold">LET'S WORK</h2>
      <h3 className="text-4xl font-bold text-gray-700 mb-8">TOGETHER</h3>

      <form className="space-y-4">
        <div>
          <Input type="text" placeholder="Name" className="bg-gray-900 border-gray-800 text-white" />
        </div>
        <div>
          <Input type="email" placeholder="Email" className="bg-gray-900 border-gray-800 text-white" />
        </div>
        <div>
          <Input type="text" placeholder="Subject" className="bg-gray-900 border-gray-800 text-white" />
        </div>
        <div>
          <Textarea placeholder="Message" className="bg-gray-900 border-gray-800 text-white min-h-32" />
        </div>
        <Button className="w-full bg-amber-700 hover:bg-amber-600 text-white">Submit</Button>
      </form>
    </section>
  )
}
