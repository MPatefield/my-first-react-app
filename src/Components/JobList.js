import React from 'react'
import JobItem from './JobItem'

const JobList = (props) => {
  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {props.jobs.map((job) => (
          <JobItem key={job.id} job={job} deleteJob={props.deleteJob} />
        ))}
      </ul>
    </div>
  )
}

export default JobList
