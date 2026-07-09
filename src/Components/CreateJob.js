
import React, { useState } from 'react';

const CreateJob = () => {
  const [jobTitle, setJobTitle] = useState("");
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

    const handleChange = (event) => {
      setJobTitle(event.target.value);
    }

  return (
    <div>
      <p>Create Job</p>
      <h1>Jobs: {countJob()}</h1>
      <input type="text" placeholder="Enter job title" onChange={handleChange} />
      <h2>Job Title: {jobTitle}</h2>
    </div>
  )
}

export default CreateJob
