import Link from 'next/link'
import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">dfox</h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        {`My name is Dylan Fox. I'm a freelance web developer, MDiv student, and pastoral assistant based in Kansas City. I build websites and web apps for individuals, small businesses, and organizations that want something well-crafted.`}
      </p>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        {`I'm currently taking on new projects. If you have something in mind, `}
        <Link
          href="/contact"
          className="underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em] transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          get in touch
        </Link>
        {` — I'd love to help.`}
      </p>
      <div className="my-8">
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 tracking-tight">writing</p>
        <BlogPosts />
      </div>
    </section>
  );
}
