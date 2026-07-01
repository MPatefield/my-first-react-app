import React from 'react'

const CreateJob = () => {
    const jobCount = 1000000;
    const countJob = () => {
        
        /*if (jobCount > 0) {
            return jobCount;
        } else {
            return "No jobs available";
        }*/

        // Using ternary operator to simplify the if statement
        return jobCount === 0 ? "No jobs available" : jobCount;
    }


  return (
    <div>
      <p>Create Job</p>
      <h1>Jobs: {countJob()}</h1>
    </div>
  )
}

export default CreateJob
