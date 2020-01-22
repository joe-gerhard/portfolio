import React from 'react';
import { StyledNav, StyledLink } from './styles';
import Button from '../Button';

const Navbar = ({ executeScroll, aboutRef, experienceRef, projectsRef, contactRef, visible }) => {

  const handleOpenResume = () => {
    window.open('/joe_gerhard_resume.pdf', '_blank')
  }
  return (
    <StyledNav visible={visible}>
      <StyledLink onClick={() => executeScroll(aboutRef)}>About</StyledLink>
      <StyledLink onClick={() => executeScroll(experienceRef)}>Experience</StyledLink>
      <StyledLink onClick={() => executeScroll(projectsRef)}>Projects</StyledLink>
      <StyledLink onClick={() => executeScroll(contactRef)}>Contact</StyledLink>
      <Button onClick={handleOpenResume} margin={'10px'}>Resumé</Button>
    </StyledNav>

  )
}

export default Navbar;


