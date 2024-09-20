export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <h1 className="font-semibold text-xl tracking-tighter">
        Looking for help on a project? Let's talk
      </h1>
      <p className="mb-4">
        {`For the last five years, I've been accumulating professional experience in industries like full-stack development,
        analytics implementation, and data science. Do you have a need for help in one of these areas? I'd love to help!`}
      </p>
      <h1 className="font-semibold text-xl tracking-tighter">
        What I can help with:
      </h1>
      <ul className="mb-4">
        <li className="mb-2">
          <span className="font-semibold">Website Development</span>: I've built
          several websites over the years for various projects. I'm proficient
          in languages like JavaScript, HTML, CSS, TypeScript, as well as
          frameworks like React & NextJS.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Analytics Implementations</span>: For
          two years, I worked as an analytics developer. I designed,
          implemented, & documented how websites track clickstream analytics.
          I'm experienced in Adobe Analytics, Adobe Launch, Google Analytics, &
          Google Tag Management. Most notably, I worked on sites like
          Realtor.com & Highrises.com that see millions of users each day.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Data Science</span>: I'm a
          professional data scientist, in addition to having my terminal degree
          in Data Science. I'm proficient in Python and experienced in
          Tensorflow & PyTorch. I've completed various projects that utilize
          machine learning, such as a model to predict marathon completion times
          and a deep learning model on vast graphical data structures.
        </li>
        <li className="mb-2">
          <span className="font-semibold">Technical Writing</span>: I've written
          lots of technical documentation in my professional experience.
          Anywhere from documenting code respositories to documenting analytics
          architecture.
        </li>
      </ul>
      <h1 className="font-semibold text-xl tracking-tighter">Why me:</h1>
      <ul className="mb-4">
        <li>Excellent communicator & organizer</li>
        <li>Fast learner</li>
        <li>Strong technical abilities</li>
      </ul>
      <h1 className="font-semibold text-xl tracking-tighter">Want to chat?</h1>
      <p className="mb-4">
        {`Shoot me a message at dfox@dylanfox.net`}
      </p>
    </section>
  );
}
