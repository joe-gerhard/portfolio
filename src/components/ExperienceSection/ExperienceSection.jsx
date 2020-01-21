import React from 'react'
import { StyledExperienceSection } from './styles';

const ExperienceSection = ({ experienceRef }) => {
  return (
    <StyledExperienceSection ref={experienceRef}>
      <h1>Experience</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptates earum! Tempore debitis inventore odit temporibus id blanditiis pariatur adipisci quisquam laborum voluptatibus? Maiores consequatur et, cumque similique impedit dolor.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem ab pariatur officiis, nulla repellendus obcaecati? Voluptas blanditiis accusantium fuga itaque optio. Eligendi, fugiat quasi. Odio deleniti quas quaerat nobis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ad, deleniti doloremque est quos soluta aliquam debitis voluptate facere eius, nam labore dolores voluptatum eveniet, ut corporis quaerat distinctio! Magnam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore amet sunt vel dicta nulla nostrum minima earum voluptates, tempora suscipit quo est, consequatur accusamus hic possimus quas et ea deleniti.
      </p>
    </StyledExperienceSection>
  )
}

export default ExperienceSection;
