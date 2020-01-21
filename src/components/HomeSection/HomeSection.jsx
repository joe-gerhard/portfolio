import React from 'react'
import { StyledHomeSection } from './styles';
import Button from '../Button';

const HomeSection = ({ homeRef }) => {
  return (
    <StyledHomeSection ref={homeRef}>
      
      <h2>Hi, my name is</h2>
      <h1>Joe Gerhard</h1>
      <p>
       I'm a front end developer based in Austin, TX.
      </p>
      <Button>Get in Touch</Button>
    </StyledHomeSection>
  )
}

export default HomeSection;
