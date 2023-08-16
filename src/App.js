import Navbar from "./Sections/Navbar";
import HeroSection from "./Sections/HeroSection";
import MoreAbout from "./Sections/MoreAbout";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import ContactMe from "./Sections/ContactMe";
import Social from "./Sections/Social";
import ScrollToTheTop from "./Sections/SrollToTheTop";
import Footer from "./Sections/Footer";

function App() {
  return <>
    <Navbar /> 
    <HeroSection />
    <MoreAbout />
    <Skills />
    <Projects />
    <ContactMe />
    <Social />
    <ScrollToTheTop />
    <Footer />
  </>
}

export default App;
