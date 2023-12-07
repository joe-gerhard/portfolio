import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledButton = styled.button(
    ({ theme, margin, hide }) => css`
        padding: 10px 20px;
        margin: 0 ${margin || 0};
        border: 1px solid ${theme.accent};
        border-radius: 3px;
        background: transparent;
        color: ${theme.accent};
        font-size: 16px;
        transition: 0.5s;

        &:hover {
            background: ${theme.accent + "55"};
            cursor: pointer;
        }

        @media (max-width: ${breakpoints.medium}) {
            display: ${hide ? "none" : "block"};
        }
    `,
);
