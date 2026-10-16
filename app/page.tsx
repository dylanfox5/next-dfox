import Link from 'next/link'
import { BlogPosts } from "app/components/posts";
import { baseUrl } from "app/sitemap";

export default function Page() {
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Person", "ProfessionalService"],
            name: "Dylan Fox",
            url: baseUrl,
            email: "dylan@dylanfox.net",
            jobTitle: "Freelance Web Developer",
            description:
              "Freelance web developer based in Kansas City building websites for small businesses and nonprofits using React, Next.js, and TypeScript.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kansas City",
              addressRegion: "MO",
              addressCountry: "US",
            },
            knowsAbout: [
              "Web Development",
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Data Science",
              "Analytics",
            ],
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Graceland University",
              },
            ],
            sameAs: [
              "https://github.com/dylanfox5",
              "https://www.linkedin.com/in/dylanffox/",
            ],
          }),
        }}
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <span aria-hidden="true">dfox</span>
        <span className="sr-only">Dylan Fox — Freelance Web Developer</span>
      </h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        I build websites for small businesses and nonprofits, then set up the analytics so you know they're working.
      </p>
      <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-500">
        Before freelancing, I spent 5+ years as a software engineer and data scientist. Now I bring that experience to small businesses and nonprofits. Based in Kansas City.
      </p>

      <ul className="mb-8 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
        <li>Websites & online stores</li>
        <li>Analytics & reporting</li>
        <li>Automation for small teams</li>
      </ul>

      <div className="flex flex-wrap gap-6 mb-12">
        <Link
          href="/projects"
          className="text-sm underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em] transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          See my work →
        </Link>
        <Link
          href="/contact"
          className="text-sm underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em] transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          Get in touch →
        </Link>
      </div>

      <div className="mb-12">
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 tracking-tight">recent work</p>
        <Link
          href="/projects"
          className="font-medium underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em] transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          Ben's Custom Creations
        </Link>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          An online pottery shop for a local artist, with product catalog, Square checkout and order emails.
        </p>
      </div>

      <div className="my-8">
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 tracking-tight">writing</p>
        <BlogPosts />
      </div>
    </section>
  );
}
