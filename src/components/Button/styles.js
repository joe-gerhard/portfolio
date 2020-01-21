import styled, { css } from 'styled-components';

export const StyledButton = styled.button(({ theme }) => css`
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid ${theme.accent};
  border-radius: 3px;
  background: transparent;
  color: ${theme.accent};
  font-size: 16px;
  transition: .5s;

  &:hover {
    background: ${theme.accent + '55'};
    cursor: pointer;
  }
`);