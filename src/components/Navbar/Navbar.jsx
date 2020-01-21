import React from 'react';
import { StyledNav, StyledLink } from './styles';

const Navbar = ({ executeScroll, aboutRef, experienceRef, projectsRef, contactRef }) => {
  return (
    <StyledNav>
      <StyledLink onClick={() => executeScroll(aboutRef)}>About</StyledLink>
      <StyledLink onClick={() => executeScroll(experienceRef)}>Experience</StyledLink>
      <StyledLink onClick={() => executeScroll(projectsRef)}>Projects</StyledLink>
      <StyledLink onClick={() => executeScroll(contactRef)}>Contact</StyledLink>
      <button>Resumé</button>
    </StyledNav>

  )
}

export default Navbar;


