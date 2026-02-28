export const metadata = {
  title: 'Projects',
  description: "Things I've built.",
}

const projects = [
  {
    name: 'Meno',
    url: 'https://usemeno.app',
    description:
      'Meno seeks to glorify Christ through cultivating the spiritual disciplines of the Christian life.',
  },
]

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <div className="space-y-4">
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
    </section>
  )
}
