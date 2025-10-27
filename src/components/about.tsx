"use client";

const About = () => {
  return (
    <section className="bg-secondary pb-24">
      {/* Full Width Hero */}
      <div className="bg-blue-800 pt-38 pb-24">
        <div className="container flex flex-col items-left lg:my-0 lg:flex-row lg:justify-center lg:gap-8 mx-auto max-w-7xl lg:px-24 text-white">
          <h1 className="text-5xl font-bold tracking-tight md:text-5xl lg:text-6xl md:p-0 px-10  lg:items-start gap-5 lg:flex-1">
           About us
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="px-6">
      <div className="py-8">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8 text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Digitalizing the way we network, one click at a time.
            </h2>
            <p className="text-muted-foreground text-xl leading-7">
              Inspired Work in Progress (IWIP) is a global networking organization dedicated to creating an inclusive community where professionals from diverse backgrounds can connect, collaborate, and grow together.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-5">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold pb-5">Our Values</h2>
            <ul className="list-disc list-inside">
              <li>User research and persona development</li>
              <li>Information architecture and user journey mapping</li>
              <li>Wireframing and interactive prototyping</li>
              <li>Visual design and brand integration</li>
            </ul>

            <h2 className="text-2xl font-semibold py-5" >What we offer</h2>
            <ul className="list-disc list-inside">
              <li>User research and persona development</li>
              <li>Information architecture and user journey mapping</li>
              <li>Wireframing and interactive prototyping</li>
              <li>Visual design and brand integration</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export { About };
