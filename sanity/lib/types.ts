export type SanityImageAsset = {
  _id: string
  url: string
  metadata: { lqip?: string; dimensions?: { width: number; height: number } }
}

export type SanityImage = {
  _key?: string
  asset: SanityImageAsset
  alt?: string
  hotspot?: object
  crop?: object
}

export type Project = {
  _id: string
  name: string
  slug: string
  segment?: string | null
  category?: string | null
  year?: number | null
  description?: string | null
  link?: string | null
  thumbnail?: SanityImage | null
  gallery?: SanityImage[]
}

export type ProjectCard = Pick<Project, '_id' | 'name' | 'slug' | 'segment' | 'category' | 'year' | 'thumbnail'>
