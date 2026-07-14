export default function Hero() {
  return (
    <section className="min-h-screen px-6 pb-20 pt-32 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
            Repository
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-mono text-2xl font-semibold text-zinc-100">
              siyeonkim/portfolio
            </h2>

            <span className="rounded-full border border-zinc-600 px-3 py-1 font-mono text-xs text-zinc-300">
              Public
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
          <article className="overflow-hidden rounded-xl border border-zinc-700 bg-[#0b0f16]">
            <div className="border-b border-zinc-700 px-5 py-3">
              <span className="font-mono text-sm text-zinc-200">README.md</span>
            </div>

            <div className="px-6 py-10 md:px-10 md:py-12">
              <h1 className="flex items-center gap-2 font-mono text-2xl font-semibold text-zinc-100">
                <span className="text-zinc-500">#</span>
                <span>Hi, I&apos;m Siyeon 👋</span>
              </h1>

              <p className="mt-4 text-lg text-zinc-300">
                Software Engineer based in Auckland, New Zealand.
              </p>

              <hr className="my-8 border-zinc-800" />

              <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
                Building software <br /> that solves <br />real-world problems.
              </h2>

              <div className="mt-10">
                <h2 className="flex items-center gap-2 font-mono text-xl font-semibold text-zinc-100">
                  <span className="text-zinc-500">##</span>
                  <span>Currently</span>
                </h2>

                <ul className="mt-4 space-y-3 text-base text-zinc-300">
                  <li className="flex gap-3">
                    <span className="font-mono text-zinc-500">-</span>
                    <span>Solution Tester at IoT Ventures</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="font-mono text-zinc-500">-</span>
                    <span>Building Modun Medical</span>
                  </li>

                  <li className="flex gap-3">
                    <span className="font-mono text-zinc-500">-</span>
                    <span>
                      Bachelor of Software Engineering, University of Auckland
                    </span>
                  </li>
                </ul>
              </div>

              <a
                href="#projects"
                className="group mt-10 inline-flex items-center gap-2 font-mono text-sm font-medium text-zinc-100"
              >
                View projects
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </article>

          <aside className="h-fit border-t border-zinc-700 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h2 className="font-mono text-base font-semibold text-zinc-100">
              About
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-300">
              Building practical software through
              commercial experience, automation,
              and full-stack development.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Location
                </p>
                <p className="mt-1 text-zinc-300">Auckland, New Zealand</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Focus
                </p>
                <p className="mt-1 text-zinc-300">
                  Full-stack · Automation · Commercial Products
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-700 pt-6">
              <h3 className="font-mono text-sm font-semibold text-zinc-100">
                Core Technologies
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Java",
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "MySQL",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}