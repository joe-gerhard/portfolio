import React from 'react'
import { StyledButton } from './styles'

const Button = ({ children, href, onClick }) => {
  return (
    <>
      { href 
        ?
        <StyledButton as="a" href={href}>
          {children}
        </StyledButton>
        :
        <StyledButton onClick={onClick}>
          {children}
        </StyledButton>
      }
    </>
  )
}

export default Button;
