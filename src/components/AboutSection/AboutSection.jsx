import React, { useState } from 'react'
import { StyledAboutSection, Text, Card, ImageContainer } from './styles';

const AboutSection = ({ aboutRef }) => {

  const [ hover, setHover ] = useState(false);

  return (
    <StyledAboutSection 
      ref={aboutRef}
    >
      <h1>About me</h1>
      <Card 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
      >
        <Text>
          <p>
          I come from a career in the event production industry, so I'm no stranger to bizarre 
          and ever-changing problems. I write clean code, have an eye for design, value quality relationships, and 
          absolutely cherish the feeling of a difficult job well done. At every position 
          I've ever held, I've been known as the "fastest-anyone's-ever-caught-on-to-this" kind 
          of person, and I take great pride in continuing that legacy. 
          </p>
          <p>
          After graduating at the top of the class from General Assembly's Software Engineering Immersive program, I've
          continued to work on various projects while also teaching myself many new skills and technologies. I'm an extremely fast learner,
          highly motivated, and have always been a high achiever--I recieved a full-ride academic scholarship
          from Arizona State, for example. 
          </p>
          
          <span>Some of my current favorite technologies to work with are:</span>
          
          <div>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
            </ul>
            <ul>
              <li>HTML/CSS</li>
              <li>Node.js</li>
              <li>styled-components</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </Text>
        <ImageContainer hover={hover}>
          <img src="/Small-Square.png" alt="Joe Gerhard" />
          <div />
        </ImageContainer>
      </Card>
    </StyledAboutSection>
  )
}

export default AboutSection;
