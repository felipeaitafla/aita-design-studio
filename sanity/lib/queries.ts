import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    segment,
    category,
    year,
    thumbnail {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    }
  }
`)

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`)

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    segment,
    category,
    year,
    description,
    link,
    galleryVideo,
    thumbnail {
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    },
    gallery[] {
      _key,
      asset->{ _id, url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    }
  }
`)
