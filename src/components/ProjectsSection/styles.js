import styled, { css } from 'styled-components';
import { Section } from '../../styles';

export const StyledProjectsSection = styled(Section)(({ theme }) => css`
  h1 { 
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid ${theme.dark};
  }

  p {
    padding: 40px;
    line-height: 24px;
  }
`);