import { Certify, getCertifyById } from "@/lib/airtable"
import { ArrowLeft } from "lucide-react"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import { Suspense } from "react"
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params
  let data: Certify | null = null
  try {
    data = await getCertifyById(id!)
  } catch (error) {
    console.log('Error in /experience page: ', error);
    data = null
  }

  return {
    title: `Certificado ${data?.title} | Rafael Diniz Portifolio`,
    openGraph: {
      images: [(data?.image || '')],
    },
  }

}
interface ExperienceIdProps {
  params: Promise<{
    id?: string
  }>
  searchParams: Promise<{

  }>
}
export default async function ExperienceId(props: ExperienceIdProps) {
  let id = (await props.params).id
  id = JSON.stringify(id).replaceAll('"', '')
  if (!id) return <p className="text-white">no content</p>
  // Fetch Data ************************************************************
  let data: Certify | null = null
  try {
    data = await getCertifyById(id!)

  } catch (error) {
    console.log('Error in /experience page: ', error);
    data = null
  }

  // Hooks *****************************************************************

  // State *****************************************************************

  // Effect ****************************************************************

  // Function **************************************************************

  // Render ****************************************************************
  return <Suspense fallback={<div className="w-full h-screen flex justify-center items-center">
    <p className=" text-white">Carregando ...</p>
  </div>}
  >
    <main className="w-full h-screen p-4 overflow-y-auto">
      <div className="container w-full h-full mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="w-full">
          <a
            className="text-xl text-white flex gap-2 items-center"
            href="/">
            <ArrowLeft />
            voltar
          </a>

        </div>
        <Image
          className="mx-auto"
          src={data?.image || ''}
          alt=""
          width={500}
          height={500}
        />
        <h2 className="text-white text-center text-4xl">{data?.title}</h2>
        <p className="text-center">
          {data?.description}
        </p>

      </div>
    </main>
  </Suspense>
}