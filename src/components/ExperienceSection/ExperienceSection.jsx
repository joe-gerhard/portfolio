import React, { useState } from "react";
import {
    StyledExperienceSection,
    ExperienceWrapper,
    Buttons,
    ExpButton,
} from "./styles";
import Description from "./Description";
import { JOBS } from "../../constants/jobs";

const ExperienceSection = ({ experienceRef }) => {
    const [selected, setSelected] = useState(0);

    return (
        <StyledExperienceSection ref={experienceRef}>
            <h2>Experience</h2>
            <ExperienceWrapper>
                <Buttons>
                    {JOBS.map((job, idx) => (
                        <ExpButton
                            key={job.name}
                            selected={selected === idx}
                            onClick={() => setSelected(idx)}
                        >
                            {job.name}
                        </ExpButton>
                    ))}
                </Buttons>
                <Description selected={selected} />
            </ExperienceWrapper>
        </StyledExperienceSection>
    );
};

export default ExperienceSection;
