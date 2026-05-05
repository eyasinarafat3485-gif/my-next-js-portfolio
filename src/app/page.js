import AboutMe from "./about/page";
import Banner from "./components/Banner/page";
import CraftedProjects from "./components/Crafted Projects/page";
import Experience from "./components/Experience/page";
import LetsWork from "./let's Work/page";
import Service from "./services/page";
import RecentProjects from "./components/Recent Projects";


export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <CraftedProjects />
      <RecentProjects />
      <Experience />
      <Service />
      <LetsWork />
    </div>
  );
}
