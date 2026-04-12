export const metadata = {
  title: 'Projects',
  description: "Things I've built.",
}

const projects = [
  {
    name: 'Meno',
    url: 'https://usemeno.app',
    description:
      'A spiritual disciplines app for the Christian life. Built with React and Next.js.',
  },
]

const professional = [
  {
    company: 'Freelance',
    period: '2025 – present',
    description:
      'Independent software development and consulting across web and full-stack projects.',
  },
  {
    company: 'Honeywell FM&T',
    period: '2023 – 2025',
    description:
      'Led full-stack development on internal tooling and researched graph-based neural networks as part of the Data Science & Analytics team.',
  },
  {
    company: 'Realtor.com · Highrises.com · Athome.com',
    period: '2021 – 2023',
    description:
      'Implemented and maintained clickstream analytics architecture for high-volume real estate platforms, supporting millions of sessions.',
  },
]

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>

      <div className="space-y-4 mb-12">
        {projects.map((project) => (
          <div key={project.name}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em] transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              {project.name}
            </a>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 tracking-tight">professional</p>
      <div className="space-y-6">
        {professional.map((item) => (
          <div key={item.company}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
              <p className="font-medium">{item.company}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 shrink-0">{item.period}</p>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
