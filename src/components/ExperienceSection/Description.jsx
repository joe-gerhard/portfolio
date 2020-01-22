import React from 'react'
import { StyledDescription } from './styles';
import { JOBS } from '../../constants/jobs';

const Description = ({ selected }) => {
  const job = JOBS[selected]
  
  return (  
    <StyledDescription>
      <h2>{job.title}</h2>
      <h3>{job.location} | {job.dates}</h3>
      <ul>
        { job.description.map(bullet => 
          <li key ={bullet}>{bullet}</li>
        ) }
      </ul>
    </StyledDescription>
  )
}

export default Description;
