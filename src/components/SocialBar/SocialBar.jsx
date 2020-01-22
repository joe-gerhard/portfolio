import React from 'react'
import { StyledSocialBar } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const SocialBar = () => {
  return (
    <StyledSocialBar>
      <a href="https://www.github.com/joe-gerhard" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/joe-gerhard" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      <a href="https://www.facebook.com/profile.php?id=10044811" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="https://www.instagram.com/joedoesnotsuckatlife/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://twitter.com/joegerhard" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
    </StyledSocialBar>
  )
}

export default SocialBar;
