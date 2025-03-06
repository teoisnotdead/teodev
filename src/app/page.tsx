import { NavBar } from "./components";
import { Hero, Projects, Experience, Contact, Footer } from "./sections";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2 max-w-7xl mx-auto mt-6">
      <NavBar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
