import styled, { css } from 'styled-components';
import { Section } from '../../styles';

export const StyledAboutSection = styled(Section)(({ theme, hover }) => css`

  h1 { 
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid ${theme.dark};
  }

  div {
    display: flex;
    margin: 40px 0;
  }

  p {
    padding-right: 40px;
    line-height: 24px;
  }

  img {
    filter: ${hover ? 'grayscale(0)' : 'grayscale(1)'};
    transition: 1s;
  }
`);