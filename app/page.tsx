import Link from 'next/link'
import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">dfox</h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        {`My name is Dylan Fox. I'm a pastoral assistant, MDiv student, and freelance web developer living in Kansas City, Missouri.
          I specialize in innovating creative experiences for the web and developing analytics architecture.`}
      </p>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        I'm available for work! Head to{' '}
        <Link
          href="/contact"
          className="underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em] transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          /contact
        </Link>
        {' '}to see if we can collaborate on some projects together.
      </p>
      <p className="text-neutral-800 dark:text-neutral-200">{`<3`}</p>
      <div className="my-8">
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 tracking-tight">writing</p>
        <BlogPosts />
      </div>
    </section>
  );
}
