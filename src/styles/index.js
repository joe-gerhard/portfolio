import styled, { css } from "styled-components";
import { breakpoints } from "../constants/breakpoints";

export const Section = styled.section(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        color: ${theme.dark};
        min-height: calc(100vh - 5rem);
        margin-bottom: 5rem;
        scroll-margin: 1.5rem;

        &:last-child {
            min-height: 0vh;
            margin-bottom: 5rem;
        }

        @media (min-width: ${breakpoints.small}) {
            scroll-margin: 7rem;
        }
    `,
);

export const H2 = styled.h2(
    ({ theme, textAlign }) => css`
        text-align: ${textAlign ? textAlign : "left"};
        width: 100%;
        border-bottom: 1px solid ${theme.dark};
        margin-bottom: 1.5rem;
    `,
);
