import React, { useRef, useEffect } from 'react';
import Navbar from '../Navbar';
import HomeSection from '../HomeSection/HomeSection';
import AboutSection from '../AboutSection/AboutSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import Footer from '../Footer';
import { StyledApp } from './styles';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import ContactSection from '../ContactSection/ContactSection';
import SocialBar from '../SocialBar';
import { useState } from 'react';

const App = () => {

  const [ prevScrollY, setPrevScrollY ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  const handleScroll = () => {
    const DELTA = 5;
    const currentScrollY = window.scrollY;
    const visible = prevScrollY > currentScrollY;

    // if the user scrolls less than the value of DELTA, do nothing
    if(Math.abs(prevScrollY - currentScrollY) <= DELTA) {
      return 
    }
    
    setPrevScrollY(currentScrollY);
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
