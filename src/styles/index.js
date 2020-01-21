import styled, { css } from 'styled-components';

export const Section = styled.section(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 50px;
  color: ${theme.dark}
`);