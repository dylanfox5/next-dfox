import Image from 'next/image'
import meno from 'public/meno.png'
import bensCustomCreations from 'public/bens-custom-creations.png'

export const metadata = {
  title: 'Projects',
  description: "Things I've built.",
}

const projects = [
  {
    name: 'Meno',
    url: 'https://usemeno.app',
    image: meno,
    accent: '#2d6a3e',
    description:
      'A spiritual disciplines app for the Christian life. Built with React and Next.js.',
  },
  {
    name: "Ben's Custom Creations",
    url: 'https://benscustomcreations.com',
    image: bensCustomCreations,
    accent: '#b5643a',
    description:
      'Custom pottery and handcrafted ceramics. Freelance project — designed and built the full website.',
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

      <div className="space-y-16 mb-16">
        {projects.map((project, i) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex items-center gap-2">
              <span
                className="size-1.5 rounded-full"
                style={{ backgroundColor: project.accent }}
                aria-hidden="true"
              />
              <p className="font-medium">{project.name}</p>
              <span
                className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
            <p className="mt-1 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:border-neutral-300 dark:group-hover:border-neutral-700">
              <div className="flex items-center gap-3 px-3 py-2 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <span className="size-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <span className="size-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                </div>
                <span className="flex-1 truncate text-center text-[11px] text-neutral-500 font-[family-name:var(--font-geist-mono)]">
                  {project.url.replace('https://', '')}
                </span>
                <span className="w-[30px]" aria-hidden="true" />
              </div>
              <div className="relative aspect-[11/5] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Homepage of ${project.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 576px"
                  placeholder="blur"
                  priority={i === 0}
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </a>
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
