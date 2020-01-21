import React, { useRef } from 'react';
import Navbar from '../Navbar';
import HomeSection from '../HomeSection/HomeSection';
import AboutSection from '../AboutSection/AboutSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import Footer from '../Footer';
import { StyledApp } from './styles';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import ContactSection from '../ContactSection/ContactSection';

const App = () => {

  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const refs = { aboutRef, experienceRef, projectsRef, contactRef }

  const executeScroll = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  return (
    <StyledApp>
      <Navbar executeScroll={executeScroll} {...refs}/>
      <div>
        <HomeSection {...refs} />
        <AboutSection {...refs}/>
        <ExperienceSection {...refs}/>
        <ProjectsSection {...refs}/>
        <ContactSection {...refs}/>
      </div>
      <Footer executeScroll={executeScroll} {...refs}/>
    </StyledApp>
  );
}

export default App;
