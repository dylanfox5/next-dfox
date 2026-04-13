import Link from 'next/link'

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 — Page Not Found
      </h1>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        This page doesn't exist.
      </p>
      <Link
        href="/"
        className="text-sm underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em] transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
      >
        ← Back home
      </Link>
    </section>
  )
}