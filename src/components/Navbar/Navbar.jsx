import React from 'react';
import { StyledNav, StyledLink, Icon } from './styles';
import Button from '../Button';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ executeScroll, aboutRef, experienceRef, projectsRef, contactRef, visible }) => {

  const handleOpenResume = () => {
    window.open('/joe_gerhard_resume.pdf', '_blank')
  }

  const handleOpenMenu = () => {
    // TODO: add dropdown menu
  }
  
  return (
    <StyledNav visible={visible}>
      <StyledLink onClick={() => executeScroll(aboutRef)}>About</StyledLink>
      <StyledLink onClick={() => executeScroll(experienceRef)}>Experience</StyledLink>
      <StyledLink onClick={() => executeScroll(projectsRef)}>Projects</StyledLink>
      <StyledLink onClick={() => executeScroll(contactRef)}>Contact</StyledLink>
      <Button onClick={handleOpenResume} margin={'20px'}>Resumé</Button>
      <Icon icon={faBars} onClick={handleOpenMenu} />
    </StyledNav>

  )
}

export default Navbar;


