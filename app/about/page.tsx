import Image from 'next/image'

export const metadata = {
  title: 'About',
  description:
    'Dylan Fox is a web developer and data scientist based in Kansas City. He holds degrees in CSIT, Data Science, and Math from Graceland University and an MS in Data Science & Analytics.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <div className="text-neutral-800 dark:text-neutral-200">
        <Image
          src="/avatar.jpg"
          alt="Dylan Fox"
          width={160}
          height={160}
          className="rounded-lg float-left mr-6 mb-2"
          priority
        />
        <p className="mb-4">
          {`I received my degrees in CSIT, Data Science, & Math from Graceland University in 2021. Shortly after, I joined the Analytics Development team at Evolytics and started my MS degree in Data Science & Analytics. I supported high-volume clients as they implemented and maintained analytics architecture and data collection strategies.`}
        </p>
        <p className="mb-4">
          {`I wrapped up my MS degree in the spring of 2023 and joined the Data Science & Analytics team at Honeywell FM&T, where I worked as a data scientist. I researched graph-based neural networks and led internal development on various full-stack projects.`}
        </p>
        <p>
          {`In August of 2025, I left to pursue my MDiv degree at Midwestern Baptist Theological Seminary where I study Greek & Hebrew. I work as a Pastoral Assistant at my local church in addition to my studies. Outside of work, I enjoy serving in my local church, playing soccer, and running.`}
        </p>
      </div>
    </section>
  )
}
