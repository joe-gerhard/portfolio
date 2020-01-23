import styled, { css } from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export const StyledSocialBar = styled.div(({ theme }) => css`
  position: fixed;
  top: 100px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px; 
  background: transparent;

  @media (max-width: ${breakpoints.medium}) {
    display: none;
  }

  a {
    position: relative;
    bottom: 0;
    color: ${theme.light};
    font-size: 24px;
    margin: 5px 0;
    transition: .3s;

    &:hover {
      color: ${theme.accent};
      bottom: 3px;
    }

    &:last-child {
      margin-bottom: 60px;
    }
  }
`);