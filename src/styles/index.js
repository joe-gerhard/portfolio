import styled, { css } from 'styled-components';

export const Section = styled.section(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: ${theme.dark};
  padding: 100px 0;
  margin-bottom: 200px;
`);