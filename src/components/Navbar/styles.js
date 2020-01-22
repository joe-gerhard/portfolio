import styled, { css } from 'styled-components';

export const StyledNav = styled.nav(({ theme, visible }) => css`
  position: fixed;
  top: ${visible ? '0' : '-50px'};
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${theme.primary};
  height: 50px;
  width: 100vw;
  transition: .5s;

  &:hover {
    cursor: default;
  }
`);

export const StyledLink = styled.span(({ theme }) => css`
  margin: 0 10px;
  color: ${theme.light};
  transition: .5s;

  &:hover {
    cursor: pointer;
    color: ${theme.accent};
  }

  &:last-child {
    margin-right: 20px;
  }
`);

