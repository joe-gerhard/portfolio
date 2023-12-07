import styled, { css } from "styled-components";
import { Section } from "../../styles";
import { breakpoints } from "../../constants/breakpoints";

export const StyledAboutSection = styled(Section)(
    ({ theme }) => css`
        width: 100%;

        h1 {
            width: 100%;
            padding-bottom: 5px;
            border-bottom: 1px solid ${theme.dark};
        }
    `,
);

export const Card = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 40px 0;
        width: 100%;

        @media (max-width: ${breakpoints.large}) {
            flex-direction: column;
            align-items: center;
        }
    `,
);

export const Text = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        width: 60%;

        @media (max-width: ${breakpoints.large}) {
            width: 100%;
            margin-bottom: 20px;
        }

        div {
            display: flex;

            @media (max-width: ${breakpoints.small}) {
                justify-content: space-around;
            }
        }

        p {
            padding-right: 40px;
            line-height: 24px;
            margin-bottom: 20px;
            text-align: left;

            @media (max-width: ${breakpoints.medium}) {
                padding: 0;
            }
        }

        span {
            margin-bottom: 10px;
            line-height: 24px;

            @media (max-width: ${breakpoints.small}) {
                text-align: left;
            }
        }

        ul {
            margin: 0 30px;
            line-height: 24px;
            list-style: inside;
            font-size: 14px;
            list-style-type: "- ";

            @media (max-width: ${breakpoints.small}) {
                margin: 0;
            }
        }
    `,
);

export const ImageContainer = styled.div(
    ({ theme, hover }) => css`
        position: relative;
        width: 40%;

        @media (max-width: ${breakpoints.large}) {
            width: 70%;
        }

        @media (max-width: 600px) {
            width: 100%;
        }

        img {
            filter: ${hover ? "grayscale(0)" : "grayscale(1)"};
            transition: 2s;
            object-fit: fill;
            width: 100%;
            height: 100%;
        }

        div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${hover ? "transparent" : theme.accent + "55"};
            transition: 2s;
        }
    `,
);
