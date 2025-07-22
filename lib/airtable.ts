import Airtable from "airtable"

interface ImageProject {
  thumbnails:{
    full:{
      url:string
    }
    large:{
      url:string
    }
    small:{
      url:string
    }
  }
  url:string
}

interface Project {
  id: string
  title: string
  description: string
  repo?: string
  url: string
  created_at?: string
  image: string
  tags: string[]
}
interface Certify {
  id: string
  title: string
  description: string
  image: string
  created_at?: string
}

const fallbackProjects: Project[] = []
const fallbackCertify: Certify[] = []


const BASE_ID = process.env.AIRTABLE_BASE_ID || ""
const TABLE_NAME = process.env.AIRTABLE_TABLE_PROJECTS || ""
const AIRTABLE_TABLE_CERTIFY = process.env.AIRTABLE_TABLE_CERTIFY || ""
const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_KEY,
})

export async function getProjects(): Promise<Project[]> {
  // Check if required environment variables are set
  if (!process.env.AIRTABLE_KEY) {
    console.warn("AIRTABLE_KEY environment variable is not set")
    return fallbackProjects
  }

  try {
    // Validate BASE_ID
    if (!BASE_ID) {
      console.warn("Airtable BASE_ID is not configured properly")
      return fallbackProjects
    }

    const base = airtable.base(BASE_ID)
    const records = await base(TABLE_NAME).select({sort:[{field:'created_at',direction:'desc'}]}).all()

    if (!records || records.length === 0) {
      console.warn("No records found in Airtable")
      return fallbackProjects
    }

    return records.map((record) => {
      const fields = record.fields
      const imageUrl = (fields.image as any) as ImageProject[]

      return {
        id: record.id,
        title: (fields.title as string) || "Untitled Project",
        description: (fields.description as string) || "No description",
        repo: fields.repo as string | undefined,
        url: (fields.url as string) || "#",
        created_at: fields.created_at as string | undefined,
        // Ensure we never return an empty string for image
        image: imageUrl?.[0].thumbnails.large.url || '',
        tags: Array.isArray(fields.tags) ? (fields.tags as string[]) : [],
      }
    })
  } catch (error) {
    console.error("Error fetching projects from Airtable:", error)
    return fallbackProjects
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  if (!process.env.AIRTABLE_KEY || !BASE_ID) {
    const fallbackProject = fallbackProjects.find((p) => p.id === id)
    return fallbackProject || null
  }

  try {
    const base = airtable.base(BASE_ID)
    const record = await base(TABLE_NAME).find(id)

    if (!record) return null

    const fields = record.fields
    const imageUrl = (fields.image as any) as ImageProject[]

    return {
      id: record.id,
      title: (fields.title as string) || "Untitled Project",
      description: (fields.description as string) || "No description",
      repo: fields.repo as string | undefined,
      url: (fields.url as string) || "#",
      created_at: fields.created_at as string | undefined,
      // Ensure we never return an empty string for image
      image: imageUrl[0].thumbnails.large.url,
      tags: Array.isArray(fields.tags) ? (fields.tags as string[]) : [],
    }
  } catch (error) {
    console.error("Error fetching project from Airtable:", error)
    const fallbackProject = fallbackProjects.find((p) => p.id === id)
    return fallbackProject || null
  }
}
// 

export async function getCertify(): Promise<Certify[]> {
  // Check if required environment variables are set
  if (!process.env.AIRTABLE_KEY) {
    console.warn("AIRTABLE_KEY environment variable is not set")
    return fallbackCertify
  }

  try {
    // Validate BASE_ID
    if (!BASE_ID) {
      console.warn("Airtable BASE_ID is not configured properly")
      return fallbackCertify
    }

    const base = airtable.base(BASE_ID)
    const records = await base(
      AIRTABLE_TABLE_CERTIFY
    ).select({sort:[{field:'created_at',direction:'desc'}]}).all()

    if (!records || records.length === 0) {
      console.warn("No records found in Airtable")
      return fallbackCertify
    }

    return records.map((record) => {
      const fields = record.fields
      const imageUrl = (fields.image as any) as ImageProject[]
      
      return {
        id: record.id,
        title: (fields.title as string) || "Untitled Project",
        description: (fields.description as string) || "No description",
        // Ensure we never return an empty string for image
        image: imageUrl?.[0].thumbnails.large.url || '',
        created_at: fields.created_at as string | undefined
      }
    })
  } catch (error) {
    console.error("Error fetching projects from Airtable:", error)
    return fallbackCertify
  }
}

export { fallbackProjects,fallbackCertify, type Project, type Certify }
