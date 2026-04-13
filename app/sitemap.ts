import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://dylanfox.net'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = [
    { path: '', lastModified: '2025-08-01' },
    { path: '/blog', lastModified: '2024-09-11' },
    { path: '/about', lastModified: '2025-08-01' },
    { path: '/contact', lastModified: '2024-09-11' },
  ].map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }))

  return [...routes, ...blogs]
}
