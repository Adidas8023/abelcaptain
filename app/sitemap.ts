import { type MetadataRoute } from 'next'

import { env } from '~/env.mjs'
import { url } from '~/lib'
import { getAllLatestBlogPostSlugs } from '~/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', '/blog', '/guestbook', '/ama'].map((route) => ({
    url: `${env.NEXT_PUBLIC_SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  const slugs = await getAllLatestBlogPostSlugs()

  const dynamicMap = slugs.map((slug) => ({
    url: url(`/blog/${slug}`).href,
    lastModified: new Date(),
  })) satisfies MetadataRoute.Sitemap

  return [...routes, ...dynamicMap]
}

export const runtime = 'edge'
export const revalidate = 60
