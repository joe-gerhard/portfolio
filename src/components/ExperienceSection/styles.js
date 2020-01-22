import styled, { css } from 'styled-components';
import { Section } from '../../styles';

export const StyledExperienceSection = styled(Section)`
  p {
    padding: 40px;
    line-height: 24px;
  }
`;

export const ExperienceWrapper = styled.div(({ theme }) => css`
  display: flex;
  width: 70%;
  margin-top: 40px;
`);

export const Buttons = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
`);

export const ExpButton = styled.button(({ theme, selected }) => css`
  width: 200px;
  height: 50px;
  background: ${selected ? theme.accent + '55' : 'transparent'};
  color: ${selected ? theme.dark : theme.light};
  font-size: 16px;
  border: none;
  border-radius: none;
  transition: .5s;
  text-align: left;
  padding-left: 25px;

  &:hover {
    background: ${theme.accent + '55'};
  }
`);

export const StyledDescription = styled.div(({ theme }) => css`
  width: 100%;
  padding: 20px;
`);