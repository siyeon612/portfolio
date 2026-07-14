import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#10141d] text-zinc-100">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}