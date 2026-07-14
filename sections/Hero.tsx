import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-black text-white">
        <section className="flex min-h-screen items-center px-6 md:px-12 lg:px-20">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
              Software Engineer
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Building software that solves real-world problems.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
              I&apos;m Siyeon Kim, a software engineering graduate based in
              Auckland, with experience in commercial software testing,
              automation, and full-stack product development.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}