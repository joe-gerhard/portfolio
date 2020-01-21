import styled, { css } from 'styled-components';
import { Section } from '../../styles';

export const StyledHomeSection = styled(Section)(({ theme }) => css`
  
`);

export const Card = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h1 {
    font-size: 80px;
    margin: 10px 0;
  }

  h3 {
    font-size: 24px;
    color: ${theme.accent};
  }

  p {
    font-size: 16px;
    margin: 40px 0;
    width: 50%;
    line-height: 24px;
  }
`);

