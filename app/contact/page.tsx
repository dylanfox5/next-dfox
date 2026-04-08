export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>

      <h2 className="font-semibold text-lg tracking-tight mb-2">
        Looking to hire a developer? Let's talk
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        For the last five years, I've been building web products professionally — from high-traffic analytics pipelines at Realtor.com to internal tooling at Honeywell.
      </p>

      <h2 className="font-semibold text-lg tracking-tight mb-3">
        What can I help with?
      </h2>
      <div className="space-y-4 mb-8">
        <div>
          <p className="font-medium">Website Development</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            5+ years professional experience — JavaScript, TypeScript, React,
            Next.js
          </p>
        </div>
        <div>
          <p className="font-medium">Analytics Implementation</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Designed & maintained clickstream analytics for Realtor.com,
            Highrises.com, Athome.com
          </p>
        </div>
        <div>
          <p className="font-medium">Data Science & Analytics</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            MS degree, graph neural network research, enterprise data science at
            Honeywell
          </p>
        </div>
      </div>

      <h2 className="font-semibold text-lg tracking-tight mb-3">Pricing</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        Every project is scoped individually. Get in touch with a brief description of what you need and I'll send over a proposal within 24 hours.
      </p>

      <h2 className="font-semibold text-lg tracking-tight mb-3">
        Want to chat?
      </h2>
      <a
        href="mailto:dylan@dylanfox.net"
        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em]"
      >
        dylan@dylanfox.net
      </a>
    </section>
  )
}
