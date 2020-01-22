import styled, { css } from 'styled-components';

export const Section = styled.section(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 200px;
  color: ${theme.dark};
  margin-bottom: 15vh;
`);