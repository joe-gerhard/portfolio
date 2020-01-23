import React from 'react'
import { StyledContactSection } from './styles';
import Button from '../Button';
import SocialBar from '../SocialBar';

const ContactSection = ({ contactRef }) => {

  const handleEmailMe = () => {
    window.open('mailto:JLGerhard@gmail.com', '_blank');
  }

  return (
    <StyledContactSection ref={contactRef}>
      <h1>Contact</h1>
      <SocialBar />
      <p>
        I am actively seeking new work opportinities, so please feel free to contact me any time. Looking forward to hearing from you!
      </p>
      <Button onClick={handleEmailMe}>Email</Button>
    </StyledContactSection>
  )
}

export default ContactSection;
