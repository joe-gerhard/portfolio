import styled, { css } from 'styled-components';

export const StyledNav = styled.nav(({ theme }) => css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${theme.primary};
  height: 50px;
  width: 100vw;

  &:hover {
    cursor: default;
  }
`);

export const StyledLink = styled.span(({ theme }) => css`
  margin: 0 10px;
  color: ${theme.dark};
  transition: .5s;

  &:hover {
    cursor: pointer;
    color: ${theme.light};
  }

  &:last-child {
    margin-right: 20px;
  }
`);

