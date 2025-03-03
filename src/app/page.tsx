import { Hero } from "./sections/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from "./sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2 max-w-7xl mx-auto mt-6">
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
}
