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

export const Project = styled.div(({ theme }) => css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin: 40px 0 100px 0;

  h2 {
    font-size: 24px;
    text-align: right;
    margin-top: 30px;
    font-weight: 900;
  }

  a {
    color: ${theme.dark};
    transition: .3s;

    &:hover {
      color: ${theme.accent};
      cursor: pointer;
    }
  }
`);

export const Description = styled.div(({ theme, hover }) => css`
  position: absolute;
  display: flex;
  border-radius: 3px;
  line-height: 20px;
  top: 30%;
  right: ${hover ? '20px' : '0'};
  width: 50%;
  z-index: 1;
  padding: 40px;
  background: ${theme.primary};
  color: ${theme.light};
  transition: 1s;
`);

export const Text = styled.div`
  width: 100%;
`;

export const Technologies = styled.div`
  margin-top: 36%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  line-height: 20px;

  span {
    font-size: 12px;
    margin: 0 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Icons = styled.div(({ theme }) => css`
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 40px;

  a {
    position: relative;
    bottom: 0;
    color: ${theme.dark};
    margin: 0 5px;
    transition: .3s;

    &:hover {
      color: ${theme.accent};
      bottom: 3px;
    }
  }
`);

export const ImageContainer = styled.div(({ theme, hover }) => css`
  position: relative;
  max-width: 50%;
  width: 1000px;
  height: 350px;
  overflow: hidden;

  img {
    object-fit: cover;
    filter: grayscale(${hover ? 0 : 1});
    width: 100%;
    height: 100%;
    transition: 1s;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${hover ? 'transparent' : theme.accent + '55'};
    transition: 1s;
  }
`);