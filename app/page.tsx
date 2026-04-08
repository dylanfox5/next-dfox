import Link from 'next/link'
import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">dfox</h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        I build fast, well-crafted websites for small businesses and nonprofits — clean code, thoughtful design, no bloat.
      </p>
      <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-500">
        5+ years of professional web development experience. Based in Kansas City.
      </p>
      <Link
        href="/contact"
        className="inline-block mb-12 text-sm underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em] transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
      >
        Work with me →
      </Link>
      <div className="my-8">
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 tracking-tight">writing</p>
        <BlogPosts />
      </div>
    </section>
  );
}
