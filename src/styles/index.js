import styled, { css } from "styled-components";

export const Section = styled.section(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        color: ${theme.dark};
        min-height: calc(100vh - 5rem);
        margin-bottom: 5rem;

        &:last-child {
            min-height: 0vh;
            margin-bottom: 5rem;
        }
    `,
);
