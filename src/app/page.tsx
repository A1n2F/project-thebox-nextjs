import { AboutUs } from "./components/aboutUs";
import { Consultation } from "./components/consultation";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Footer } from "./components/footer";
import { Projects } from "./components/projects";
import { Reputation } from "./components/reputation";
import { SectionHero } from "./components/section-hero";
import { Services } from "./components/services";

export default function Home() {
  return (
   <>
    <SectionHero />
    <Reputation />
    <AboutUs />
    <Services />
    <Experience />
    <Consultation />
    <Projects />
    <Contact />
    <Footer />
   </>
  )
}
