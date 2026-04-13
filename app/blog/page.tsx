import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description:
    'Thoughts on web development, faith, and life by Dylan Fox — freelance developer based in Kansas City.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  )
}
