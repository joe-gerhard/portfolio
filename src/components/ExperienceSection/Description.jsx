import React from 'react'
import { StyledDescription } from './styles';
import { JOBS } from '../../constants/jobs';

const Description = ({ selected }) => {
  const job = JOBS[selected]
  
  return (  
    <StyledDescription>
      <h1>{job.title}</h1>
      <h2>{job.location} | {job.dates}</h2>
      <ul>
        { job.description.map(bullet => 
          <li key={bullet}>{bullet}</li>
        ) }
      </ul>
    </StyledDescription>
  )
}

export default Description;
