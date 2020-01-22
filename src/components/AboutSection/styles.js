import styled, { css } from 'styled-components';
import { Section } from '../../styles';

export const StyledAboutSection = styled(Section)(({ theme }) => css`
  width: 100%;
  
  h1 { 
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid ${theme.dark};
  }
`);

export const Card = styled.div(({ theme }) => css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 40px 0;
  width: 100%;
`);

export const Text =  styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  width: 60%;

  div {
    display: flex;
  }

  p {
    padding-right: 40px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  span {
    margin-bottom: 10px;
  }

  ul {
    margin: 0 30px;
    line-height: 24px;
    list-style: inside;
  }
`);

export const ImageContainer = styled.div(({ theme, hover }) => css`
  position: relative;
  width: 40%;

  img {
    filter: ${hover ? 'grayscale(0)' : 'grayscale(1)'};
    transition: 2s;
    object-fit: fill;
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${hover ? 'transparent' : theme.accent + '55'};
    transition: 2s;
  }
`);