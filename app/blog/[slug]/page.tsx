import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft } from "lucide-react"
import { ProfileCard } from "@/components/profile-card"

// This would typically come from a CMS or database
const blogPosts = [
  {
    slug: "starting-and-growing-a-career-in-web-design",
    title: "Starting and Growing a Career in Web Design",
    date: "Feb 8, 2023",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>As a beginner just starting to develop your skills, it's important to focus on the fundamentals. Learn HTML, CSS, and JavaScript thoroughly from reliable sources. Practice daily, even if it's just small projects.</p>
      <h2>Start with the basics</h2>
      <p>The foundation of web design begins with understanding the core technologies that power the web. HTML provides structure, CSS adds style, and JavaScript brings interactivity. Master these fundamentals before moving on to frameworks and libraries.</p>
      <p>Create a portfolio early, even if it's just showcasing personal projects. This will help you track your progress and demonstrate your skills to potential employers or clients.</p>
      <h2>Continuous learning</h2>
      <p>The field of web design is constantly evolving. Stay updated with the latest trends, tools, and technologies through blogs, podcasts, and online courses. Join communities like GitHub, Stack Overflow, and design forums to learn from others and share your knowledge.</p>
      <p>Consider specializing in a particular area of web design, such as UI/UX design, responsive design, or accessibility. This will make you more valuable in the job market and allow you to develop deeper expertise.</p>
    `,
  },
  {
    slug: "create-a-landing-page-that-performs-great",
    title: "Create a Landing Page That Performs Great",
    date: "May 18, 2023",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Whether you want to create a landing page, or product design, you'll need to approach the experience of building from ground up. Design is not just how it looks, it's also about how they help increase your conversion.</p>
      <h2>Focus on the user</h2>
      <p>A successful landing page starts with understanding your target audience. Research their needs, pain points, and preferences to create a page that resonates with them. Use clear, concise language that speaks directly to your visitors.</p>
      <p>The headline is the first thing visitors see, so make it count. It should clearly communicate your value proposition and entice visitors to keep reading. Use action-oriented language and focus on the benefits, not just features.</p>
      <h2>Optimize for conversion</h2>
      <p>Every element on your landing page should serve a purpose and guide visitors toward your call-to-action (CTA). Remove any distractions or unnecessary elements that could divert attention from your main goal.</p>
      <p>Use high-quality images and videos that support your message and showcase your product or service. Visual content can significantly increase engagement and conversion rates when used effectively.</p>
    `,
  },
  {
    slug: "how-can-designers-prepare-for-the-future",
    title: "How Can Designers Prepare for the Future?",
    date: "July 30, 2023",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Last month, I had the chance to attend CSS Day in Amsterdam. It was day packed with interesting talks around CSS for a technical audience and development and a "UX Day" with speakers who covered more in-depth, real-world CSS aspects. The talks were all relevant, the topics around grid systems, variable fonts, accessibility, and performance. But with rapid changes, are we, as product people, equipped to design for tomorrow's machine learning and AI?</p>
      <h2>What does automation mean for designers?</h2>
      <p>It's hard to work on a product team that hasn't automated some part of their workflow. From deployment pipelines to design systems that take the repetitive tasks and heavy lifting, designers can focus on doing more meaningful work. But how does this affect the way we see the work we do?</p>
      <p>Josh Clark, founder of design studio Big Medium, provoked the audience with his key question during his talk: "Is it your New Design Medium, or is it your New Design Partner?" When we work with systems that do things like facial recognition, predictive text, and image search, all powered by machine learning, but are designed to "disappear" what does that mean for us as designers? And more importantly, how do we ensure that no real emotions, expectations, or feelings get in the way of the job it was designed to do.</p>
      <p>According to Josh, when we're designing these tools, the whole process is inherently flawed. But why it really?</p>
      <p>According to Josh, that is the most fundamental thing to understand when it comes to machines. Not meeting our human expectations, which is often the case with AI, is not a bug, it's a feature. The systems we're designing are not human, and they're not trying to be. They're a different species entirely.</p>
      <p>The point of introducing machine learning into our products was never to replace humans, but to enhance experiences and help create solutions might only provide humans with better insight so as to empower us to arrive at better answers, faster.</p>
      <p>Josh advocates for a more transparent approach, where tools are more conversational products. This might be as simple as providing more context about how decisions are made, which might result in a total (re)investigating of the design of the product.</p>
      <h2>How do we design for the unknown future?</h2>
      <p>Jared Spool, Co-founder of UX Skills, "What was the most important thing I learned yesterday?" was a question when posed to the crowd, received a variety of answers.</p>
      <p>As designers, we're constantly thinking about the future. We think about how we design products for the future, even as we're meeting the demands of present day design. A tall order, especially when things move so quickly and the future is increasingly uncertain.</p>
      <p>To that, Jared elaborates for looking back at the ways in which our design processes have already changed.</p>
      <p>Remember when UX wasn't a priority for many companies? As a consultant during a time when the internet had yet to be mainstream, Jared recalls having to convince stakeholders of the importance of considered the user experience of a product.</p>
      <p>But the idea left an impact in his how UX has looked over the decades. Jared uses the analogy of a frozen lake to describe the way we like moving forward. Jared describes it from called "The UX Tipping Point", with great actionable steps on how to get there.</p>
      <p>In the past, designers had to fight for a seat at the table. If today you're still fighting for that seat, you're working at the wrong place. As a designer, you need to know what is going on out there (going past AI, crypto, etc). Jared advocates for a more holistic approach to design, one that considers, as well as the understanding of what makes UX important, which can significantly shift the way design works and how we approach it. It's a reminder that design is not just about the present, but the future.</p>
      <h2>Are we designing for users or ourselves?</h2>
      <p>People don't always know what they want, even if they think they do. As designers and product makers, "People want more choices, but can't deal with them".</p>
      <p>So how do we design for our users, if our users aren't always telling us the truth? How do one of the most important questions and something that designers have been asking themselves for decades.</p>
      <p>Back in the 2000s, psychologists Sheena Iyengar and Mark Lepper ran a study regarding consumer choices. They went to a local supermarket and set up a tasting booth with a selection of jams. They alternated the booth by 30 varieties the following week.</p>
      <p>They ran a study on how much jam was sold, and to everyone's surprise, more jam was sold on the week with only 6 choices. But interestingly, more people stopped at the booth with 30 varieties. This is referred to as choice paralysis, meaning the more choices that had 30 jams.</p>
      <p>Using this analogy, Joe makes a point that is hard to argue with: "A designer who doesn't understand psychology is going to be more successful than a psychologist who doesn't understand design."</p>
      <p>User research, and a wide variety of it, helps teams get as close as possible to the rest of a user's needs, not their wants. Studying psychology, sociology, and a larger scale is more valid, but it helps form the foundation for true UX.</p>
    `,
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the blog post by slug
  const post = blogPosts.find((post) => post.slug === params.slug) || blogPosts[2] // Default to the third post if not found

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky Profile Card Column */}
          <div className="lg:col-span-3 lg:sticky lg:top-8 lg:self-start">
            <ProfileCard />
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-9">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to home
              </Link>
            </div>

            <div className="mb-4">
              <p className="text-gray-400 text-sm">{post.date}</p>
              <Link href="/" className="text-sm text-orange-500 hover:underline">
                Read more
              </Link>
            </div>

            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

            <div className="prose prose-invert max-w-none mb-16" dangerouslySetInnerHTML={{ __html: post.content }} />

            <section className="mt-20">
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
          </div>
        </div>
      </div>
      <footer className="py-4 text-center text-xs text-gray-500">
        <p>Made by Rafael Diniz • Powered by Next.js</p>
      </footer>
    </div>
  )
}
