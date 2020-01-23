import React, { useRef, useEffect } from 'react';
import Navbar from '../Navbar';
import HomeSection from '../HomeSection/HomeSection';
import AboutSection from '../AboutSection/AboutSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import Footer from '../Footer';
import { StyledApp, Sections } from './styles';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import ContactSection from '../ContactSection/ContactSection';
import SocialBar from '../SocialBar';
import { useState } from 'react';

const App = () => {

  const [ scrollY, setScrollY ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  const handleScroll = () => {
    const DELTA = 5;
    const currentScrollY = window.scrollY;
    const visible = scrollY > currentScrollY;

    // if the user scrolls less than the value of DELTA, do nothing
    if(Math.abs(scrollY - currentScrollY) <= DELTA) {
      return 
    }
    
    setScrollY(currentScrollY);
    setVisible(visible);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true});
    }
  });

  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const refs = { aboutRef, experienceRef, projectsRef, contactRef }

  const executeScroll = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <StyledApp>
      <SocialBar />
      <Navbar executeScroll={executeScroll} {...refs} visible={visible}/>
      <Sections>
        <HomeSection {...refs} scrollY={scrollY}/>
        <AboutSection {...refs} scrollY={scrollY}/>
        <ExperienceSection {...refs} scrollY={scrollY}/>
        <ProjectsSection {...refs} scrollY={scrollY}/>
        <ContactSection {...refs} scrollY={scrollY}/>
      </Sections>
      <Footer executeScroll={executeScroll} {...refs}/>
    </StyledApp>
  );
}

export default App;
