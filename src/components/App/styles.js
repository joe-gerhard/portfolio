import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Sections = styled.div`
    width: 80vw;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    @media (max-width: ${breakpoints.medium}) {
        width: 85vw;
    }
`;
