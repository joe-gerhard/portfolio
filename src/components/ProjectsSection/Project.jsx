import React, { useRef } from "react";
import {
    Description,
    Text,
    Technologies,
    Icons,
    ImageContainer,
    StyledProject,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useIntersectionObserver } from "../../util/useIntersectionObserver";

const Project = ({ project }) => {
    const ref = useRef(null);
    const isIntersecting = useIntersectionObserver(ref, "-25%");

    return (
        <StyledProject ref={ref}>
            <ImageContainer
                hover={isIntersecting}
                onClick={() => window.open(project.link)}
            >
                <img src={project.image} alt={project.name} />
            </ImageContainer>
            <Text>
                <h3>Featured Project</h3>
                <h2>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.name}
                    </a>
                </h2>
                <Description hover={isIntersecting}>
                    {project.description}
                </Description>
                <Technologies>
                    {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </Technologies>
                <Icons>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </Icons>
            </Text>
        </StyledProject>
    );
};

export default Project;
