import styled, { css } from 'styled-components';

export const StyledNav = styled.nav(({ theme }) => css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${theme.primary};
  height: 50px;
  width: 100vw;
`);

export const StyledLink = styled.span`
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    margin-right: 20px;
  }
`;