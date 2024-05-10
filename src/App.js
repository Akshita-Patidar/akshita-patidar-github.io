
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AboutMe from "./components/AboutMe"
import EducationCard from "./components/Education"
// import { ExperienceSection } from "./components/ExperienceSection"
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe/>

      <Skills />
      <ExperienceSection/>
      <EducationCard/>

      <Projects />
      <Contact />
      <Footer/>
     
    </div>
  );
}

export default App;