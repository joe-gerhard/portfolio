import React, { useState } from 'react'
import { StyledAboutSection, Text, Card } from './styles';

const AboutSection = ({ aboutRef }) => {

  const [ hover, setHover ] = useState(false);

  return (
    <StyledAboutSection 
      ref={aboutRef}
      hover={hover}
    >
      
      <h1>About me</h1>
      <Card 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
      >
        <Text>
          <p>
          I come from a career in the event production industry, so I'm no stranger to bizarre 
          and ever-changing problems to tackle. I'm good with code, design, and relationships; and 
          there's nothing I love more than the feeling of a hard job well done. At every position 
          I've ever held, I've always been the "fastest-anyone's-ever-caught-on-to-this" kind 
          of person, and I take great pride in continuing that legacy. 
          </p>
          <p>
          Last year I graduated at the top of my class from a software engineering boot camp, and
          have since continued to teach myself many new technologies. I'm an extremely fast learner,
          highly motivated, and have always been a high achiever--I was a full-ride academic scholar
          at my university, for example. 
          </p>
          
          <span>Some of my favorite technologies to work with are:</span>
          
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
        <img src="/Small-Square.png" alt="Joe Gerhard" />
      </Card>
    </StyledAboutSection>
  )
}

export default AboutSection;
