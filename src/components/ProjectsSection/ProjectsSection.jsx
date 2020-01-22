import React, { useState } from 'react'
import { StyledProjectsSection, Project, Description, Text, Technologies, Icons, ImageContainer } from './styles';
import { PROJECTS } from '../../constants/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectsSection = ({ projectsRef }) => {
  
  const [ hover, setHover ] = useState('');

  return (
    <StyledProjectsSection ref={projectsRef}>
      <h1>Projects</h1>
      {PROJECTS.map(project => 
        <Project 
          key={project.name} 
          onMouseEnter={() => setHover(project.name)}
          onMouseLeave={() => setHover('')}
        >
          <ImageContainer hover={hover === project.name} onClick={() => window.open(project.link)}>
            <img src={project.image} alt={project.name} />
            <div />
          </ImageContainer>
          <Text>
            <h2><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h2>
            <Description hover={hover === project.name}>
              {project.description}
            </Description>
            <Technologies>
             {project.technologies.map(tech => 
              <span key={tech}>{tech}</span>
              )} 
            </Technologies>
            <Icons>
              <a href={project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              <a href={project.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            </Icons>
          </Text>
        </Project>
      )}
    </StyledProjectsSection>
  )
}

export default ProjectsSection;
