import React, { useRef, useEffect, useState } from "react";
import { StyledApp, Sections } from "./styles";
import Navbar from "../Navbar";
import HomeSection from "../HomeSection/HomeSection";
import AboutSection from "../AboutSection/AboutSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer";
import useScrollListener from "../../hooks/useScrollListener";

const App = () => {
    const [visible, setVisible] = useState(true);
    const scroll = useScrollListener();

    useEffect(() => {
        // if user has scrolled down more than 150px
        // hide the navbar, otherwise show it
        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }, [scroll.y, scroll.lastY]);

    const aboutRef = useRef();
    const experienceRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();
    const refs = { aboutRef, experienceRef, projectsRef, contactRef };

    const executeScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <StyledApp>
            <Navbar executeScroll={executeScroll} {...refs} visible={visible} />
            <Sections>
                <HomeSection {...refs} />
                <AboutSection {...refs} />
                <ExperienceSection {...refs} />
                <ProjectsSection {...refs} />
                <ContactSection {...refs} />
            </Sections>
            <Footer executeScroll={executeScroll} {...refs} />
        </StyledApp>
    );
};

export default App;
