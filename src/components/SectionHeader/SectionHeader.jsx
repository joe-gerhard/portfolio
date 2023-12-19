import React, { useState, useRef, useEffect } from "react";
import { StyledSectionHeader } from "./styles";

const SectionHeader = ({ children, ...props }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: "100px" },
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <StyledSectionHeader
            ref={ref}
            isIntersecting={isIntersecting}
            {...props}
        >
            {children}
        </StyledSectionHeader>
    );
};

export default SectionHeader;
