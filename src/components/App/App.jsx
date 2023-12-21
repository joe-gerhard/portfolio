import React, { useRef, useEffect, useState } from "react";
import { StyledApp, Sections } from "./styles";
import Navbar from "../Navbar";
import HomeSection from "../HomeSection/HomeSection";
import AboutSection from "../AboutSection/AboutSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer";

const App = () => {
    const [scrollY, setScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const DELTA = 5;
        const currentScrollY = window.scrollY;
        const isVisible = scrollY > currentScrollY || scrollY < 100;

        // if the user scrolls less than the value of DELTA, do nothing
        if (Math.abs(scrollY - currentScrollY) <= DELTA) {
            return;
        }

        setScrollY(currentScrollY);
        setVisible(isVisible);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll, {
                passive: true,
            });
        };
    });

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
