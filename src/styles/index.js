import styled, { css } from 'styled-components';

export const Section = styled.section(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80vh;
  padding: 100px 200px;
  color: ${theme.dark};
`);