import React from 'react'
import { StyledContactSection } from './styles';
import Button from '../Button';

const ContactSection = ({ contactRef }) => {

  const handleEmailMe = () => {
    window.open('mailto:JLGerhard@gmail.com', '_blank');
  }

  return (
    <StyledContactSection ref={contactRef}>
      <h1>Contact</h1>
      <p>
        I am actively seeking new work opportinities, so please feel free to contact me at any time. Looking forward to hearing from you!
      </p>
      <Button onClick={handleEmailMe}>Email Me</Button>
    </StyledContactSection>
  )
}

export default ContactSection;
