import styled, { css } from 'styled-components';
import { breakpoints } from '../../constants/breakpoints'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledNav = styled.nav(({ theme, visible }) => css`
  position: fixed;
  top: ${visible ? '0' : '-50px'};
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${theme.primary};
  height: 60px;
  width: 100%;
  transition: .5s;

  &:hover {
    cursor: default;
  }

  button {
    @media (max-width: ${breakpoints.medium}) {
      display: none;
    }
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

  @media (max-width: ${breakpoints.medium}) {
    display: none;
  }
`);

export const Icon = styled(FontAwesomeIcon)(({ theme }) => css`
  font-size: 36px;
  color: ${theme.light};
  margin: 0 20px;
  display: none;

  @media (max-width: ${breakpoints.medium}) {
    display: block;
  }
`);

