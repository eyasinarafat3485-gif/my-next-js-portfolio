import AboutMe from "./about/page";
import Banner from "./components/Banner/page";
import CraftedProjects from "./components/CraftedProjects/page";
import Experience from "./components/Experience/page";
import RecentProjects from "./projects/page";
import LetsWork from "./lets-Work/page";
import Service from "./services/page";
import Preloader from "./components/Preloader";


export default function Home() {
  return (
    <div>
      <Preloader>
      <Banner />
      <AboutMe />
      {/* <CraftedProjects /> */}
      <RecentProjects />
      <Experience />
      <Service />
      <LetsWork />
      </Preloader>
    </div>
  );
}
