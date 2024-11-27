import { Hero } from "./sections/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Proyects } from "./sections/Proyects/Proyects";

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center py-2">
      <NavBar />
      <Hero />
      <Proyects />
    </div>
  );
}
