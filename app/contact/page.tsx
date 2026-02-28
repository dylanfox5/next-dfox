export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>

      <h2 className="font-semibold text-lg tracking-tight mb-2">
        Looking to hire a developer? Let's talk
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        For the last five years, I've been accumulating professional experience
        in industries like full-stack development, analytics implementation, and
        data science.
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

      <h2 className="font-semibold text-lg tracking-tight mb-3">Why me?</h2>
      <ul className="text-neutral-600 dark:text-neutral-400 space-y-1 mb-8 list-disc list-inside text-sm">
        <li>Excellent communicator & organizer</li>
        <li>Fast learner</li>
        <li>Strong technical abilities</li>
      </ul>

      <h2 className="font-semibold text-lg tracking-tight mb-3">
        Want to chat?
      </h2>
      <a
        href="mailto:dfox@dylanfox.net"
        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em]"
      >
        dfox@dylanfox.net
      </a>
    </section>
  )
}
