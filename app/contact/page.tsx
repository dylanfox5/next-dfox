export const metadata = {
  title: 'Hire a Freelance Web Developer',
  description:
    'Get in touch with Dylan Fox, a Kansas City freelance web developer offering websites, analytics setup and automation for small businesses and nonprofits.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>

      <h2 className="font-semibold text-lg tracking-tight mb-2">
        Have a project in mind? Let's talk.
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Tell me what you're trying to do, whether that's launching a site, selling online or figuring out where your visitors come from, and I'll tell you how I'd approach it.
      </p>

      <h2 className="font-semibold text-lg tracking-tight mb-3">
        What can I help with?
      </h2>
      <div className="space-y-4 mb-8">
        <div>
          <p className="font-medium">Websites & online stores</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Fast, mobile-friendly sites you can actually update.
          </p>
        </div>
        <div>
          <p className="font-medium">Analytics setup</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            See where visitors come from and what they do. While at Evolytics, I built clickstream analytics for real estate sites like Realtor.com.
          </p>
        </div>
        <div>
          <p className="font-medium">Automation & data</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Turn repetitive spreadsheet and admin work into something that runs itself.
          </p>
        </div>
      </div>

      <h2 className="font-semibold text-lg tracking-tight mb-3">Pricing</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        Every project is different. After a short call, you'll get a fixed quote.
      </p>

      <h2 className="font-semibold text-lg tracking-tight mb-3">
        Want to chat?
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
        What to include: what you need, your timeline, and a rough budget. I reply within two business days.
      </p>
      <a
        href="mailto:dylan@dylanfox.net"
        className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-600 decoration-[0.1em]"
      >
        dylan@dylanfox.net
      </a>
    </section>
  )
}
