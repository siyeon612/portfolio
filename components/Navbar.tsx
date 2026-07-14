export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800/80 bg-[#0d1117]/80 px-6 py-5 backdrop-blur-md md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="font-mono text-sm font-medium text-white">
          siyeonkim/portfolio
        </a>

        <div className="hidden items-center gap-8 font-mono text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition-colors hover:text-white">About</a>
          <a href="#experience" className="transition-colors hover:text-white">Experience</a>
          <a href="#projects" className="transition-colors hover:text-white">Projects</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}