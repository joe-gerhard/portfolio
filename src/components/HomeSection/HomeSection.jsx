import React from 'react'
import { StyledHomeSection, Card } from './styles';
import Button from '../Button';

const HomeSection = ({ homeRef }) => {
  
  const handleEmailMe = () => {
    window.open('mailto:JLGerhard@gmail.com', '_blank');
  }

  return (
    <StyledHomeSection ref={homeRef}>
      <Card>
        <h3>Hi, my name is</h3>
        <h1>Joe Gerhard</h1>
        <p>
        I'm a web developer based in Austin, TX with a professional background in the music industry including lighting design, audio production, stage management, and tour management.
        </p>
        <Button onClick={handleEmailMe}>Get in Touch</Button>
      </Card>
    </StyledHomeSection>
  )
}

export default HomeSection;
