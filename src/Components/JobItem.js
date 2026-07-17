import React from 'react'

const JobItem = (props) => {
  return (
    <div>
      <h1>{props.job.name}</h1>
      <p>{props.job.status}</p>
      <button onClick={()=>props.deleteJob(props.job.id)}>Delete Job</button>
    </div>
  )
}

export default JobItem
