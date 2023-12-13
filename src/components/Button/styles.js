import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledButton = styled.button(({ theme, margin, hide, dark }) => {
    let color = dark ? "white" : theme.accent;
    let background = dark ? theme.accent : "transparent";
    let hoverBackground = dark ? theme.accentDark : theme.accent;

    return css`
        padding: 10px 20px;
        margin: 0 ${margin || 0};
        border: 1px solid ${theme.accent};
        border-radius: 3px;
        background: ${background};
        color: ${color};
        font-size: 16px;
        transition: 0.5s;

        &:hover {
            background: ${hoverBackground};
            border: 1px solid ${hoverBackground};
            color: white;
            cursor: pointer;
        }

        @media (max-width: ${breakpoints.medium}) {
            display: ${hide ? "none" : "block"};
        }
    `;
});
