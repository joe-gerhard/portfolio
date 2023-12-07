import styled, { css } from "styled-components";

export const StyledFooter = styled.footer(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 10px;
        align-items: center;
        background: ${theme.primary};
        color: ${theme.light};
        height: 80px;
        width: 100vw;

        div {
            margin-bottom: 10px;
        }

        a {
            color: ${theme.light};
            transition: 0.3s;

            &:hover {
                color: ${theme.accent};
            }
        }
    `,
);
