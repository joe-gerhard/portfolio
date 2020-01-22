import styled, { css } from 'styled-components';

export const StyledSocialBar = styled.div(({ theme }) => css`
  position: fixed;
  top: 100px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px; 
  background: transparent;

  a {
    position: relative;
    bottom: 0;
    color: ${theme.dark + '55'};
    font-size: 24px;
    margin: 5px 0;
    transition: .3s;

    &:hover {
      color: ${theme.dark};
      bottom: 3px;
    }

    &:last-child {
      margin-bottom: 60px;
    }
  }
`);