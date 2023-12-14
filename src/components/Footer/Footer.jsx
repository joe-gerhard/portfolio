import React from "react";
import { StyledFooter } from "./styles";

const Footer = ({ executeScroll, homeRef, aboutRef, projectsRef }) => {
    return (
        <StyledFooter>
            <div>Developed by Joe Gerhard</div>
            <div>
                <a href="mailto:JLGerhard@gmail.com">JLGerhard@gmail.com</a>
            </div>
        </StyledFooter>
    );
};

export default Footer;
