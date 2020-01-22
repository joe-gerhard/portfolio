import styled, { css } from 'styled-components';

export const StyledNav = styled.footer(({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.primary};
  color: ${theme.light};
  height: 50px;
  width: 100vw;
`);