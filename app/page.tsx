import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">dfox</h1>
      <p className="mb-4">
        {`My name is Dylan Fox. I'm a pastoral assistant, MDiv student, and freelance web developer living in Kansas City, Missouri.
          I specialize in innovating creative experiences for the web and developing analytics architecture.`}
      </p>
      <p className="mb-4">
        {`I received my degrees in CSIT, Data Science, & Math from Graceland University in 2021. Shortly after, I joined the Analytics Development team at Evolytics
          and started my MS degree in Data Science & Analytics. I supported high-volume clients as they implemented and maintained analytics architecture and
          data collection strategies.`}
      </p>
      <p className="mb-4">
        {`I wrapped up my MS degree in the spring of 2023 and joined the Data Science & Analytics team at Honeywell FM&T, where I worked as a data scientist.
          I researched graph-based neural networks and led internal development on various full-stack projects.`}
      </p>
      <p className="mb-4">
        {`In August of 2025, I left to pursue my Master of Divinity degree at Midwestern Baptist Theological Seminary. I work as a Pastoral Assistant
          at my local church in addition to my studies. Outside of work, I enjoy serving in my local church, playing soccer, and running.`}
      </p>
      <p className="mb-4">
        {`I'm available for work! Head to /contact to see if we can collaborate on some projects together.`}
      </p>
      <p>{`<3`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
