import React, { useEffect } from 'react'
import { Description, Text, Technologies, Icons, ImageContainer, StyledProject } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRef } from 'react';

const Project = ({ project, scrollY }) => {

  const [ hover, setHover ] = useState(false);
  const projectRef = useRef();
  console.log(projectRef.current && projectRef.current.offsetTop)

  useEffect(() => {
    if(!projectRef.current) return;
    const projectTop = projectRef.current.offsetTop;
    const projectBottom = projectTop + projectRef.current.offsetHeight;
    if((scrollY > (projectTop - 400)
      && scrollY < (projectBottom - 200)
    )) {
      setHover(true)
    } else {
      setHover(false)
    }
  }, [scrollY]);

  return (
    <StyledProject 
    ref={projectRef}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
    <ImageContainer hover={hover} onClick={() => window.open(project.link)}>
      <img src={project.image} alt={project.name} />
      <div />
    </ImageContainer>
    <Text>
      <h2><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h2>
      <Description hover={hover}>
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
  </StyledProject>
  )
}

export default Project;
