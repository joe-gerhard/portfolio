import React from "react";
import { StyledProjectsSection } from "./styles";
import { PROJECTS } from "../../constants/projects";
import Project from "./Project";
import { H2 } from "../../styles";

const ProjectsSection = ({ projectsRef, scrollY }) => {
    return (
        <StyledProjectsSection ref={projectsRef}>
            <H2>Projects</H2>
            {PROJECTS.map((project) => (
                <Project
                    key={project.name}
                    project={project}
                    scrollY={scrollY}
                />
            ))}
        </StyledProjectsSection>
    );
};

export default ProjectsSection;
