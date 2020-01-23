import styled, { css } from 'styled-components';
import { Section } from '../../styles';
import { breakpoints } from '../../constants/breakpoints';

export const StyledExperienceSection = styled(Section)(({ theme }) => css`
  width: 100%;

  p {
    padding: 40px;
    line-height: 24px;
  }

  h1 {
    width: 70%;
    border-bottom: 1px solid ${theme.dark};

    @media (max-width: ${breakpoints.large}) {
      width: 100%;
    }
  }
`);

export const ExperienceWrapper = styled.div(({ theme }) => css`
  display: flex;
  width: 70%;
  margin-top: 40px;

  @media (max-width: ${breakpoints.large}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`);

export const Buttons = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.medium}) {
    position: relative;
    left: -10vw;
    width: 100vw;
    overflow-x: scroll;
    flex-direction: row;
    height: 50px;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`);

export const ExpButton = styled.button(({ theme, selected }) => css`
  width: 200px;
  min-width: 200px;
  height: 50px;
  background: ${selected ? theme.accent + '22' : 'transparent'};
  color: ${selected ? theme.dark : theme.light};
  font-size: 16px;
  border: none;
  border-left: 2px solid ${selected ? theme.accent : theme.dark};
  border-radius: none;
  transition: .5s;
  text-align: left;
  padding-left: 25px;

  &:hover {
    background: ${theme.accent + '22'};
    color: ${theme.dark};
  }

  @media (max-width: ${breakpoints.medium}) {
    text-align: center;
    padding-left: 0;
    min-width: 180px;
    border-left: none;
    border-bottom: 2px solid ${selected ? theme.accent : theme.dark};

    &:first-child {
      margin-left: 10vw;
    }
  }
`);

export const StyledDescription = styled.div(({ theme }) => css`
  width: 100%;
  padding: 0 20px;
  color: ${theme.dark};

  h1 {
    font-size: 24px;
    margin: 10px 0;
    border: none;
  }

  h2 {
    font-size: 18px;
    margin: 10px 0;
  }

  ul {
    list-style: disc outside;
    margin-left: 20px;
  }
  li {
    margin: 10px 0;
  }
`);