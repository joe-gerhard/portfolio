import React from 'react'
import { StyledHomeSection } from './styles';

const HomeSection = ({ homeRef }) => {
  return (
    <StyledHomeSection ref={homeRef}>
      <h2>Hi, my name is</h2>
      <h1>Joe Gerhard</h1>
      <h2>
       I'm a front end developer based in Austin, TX.
      </h2>
      <button>Contact Me</button>
    </StyledHomeSection>
  )
}

export default HomeSection;
