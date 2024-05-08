import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">dfox</h1>
      <p className="mb-4">
        {`I'm a data scientist living in Kansas City, Missouri. I specialize in innovating creative experiences for the web, developing analytics architecture, and
          building deep learning models for graphical data structures.`}
      </p>
      <p className="mb-4">
        {`I received my degrees in CSIT, Data Science, & Math from Graceland University in 2021. Shortly after, I joined the Analytics Development team at Evolytics
          and started my Master's degree in Data Science & Analytics. I supported high-volume clients as they implemented and maintained analytics architecture and
          data collection strategies.`}
      </p>
      <p className="mb-4">
        {`I wrapped up my MS degree in the spring of 2023 and joined the Data Science & Analytics team at Honeywell FM&T, where I work as a Data Scientist. Outside of
          work, I enjoy serving in my local church, playing soccer, and running.`}
      </p>
      <p>{`<3`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
