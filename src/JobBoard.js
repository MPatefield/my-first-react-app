import React from 'react'

const JobBoard = () => {
    const companyName = "Redacted";
    const jobCount = 60;
    const getJobMessage = () => {

        //return jobCount === 0 ? "No jobs available" : `There are ${jobCount} jobs available at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
        
        /*if (jobCount === 0) {
            return "No jobs available";
        } else if (jobCount < 10){
            return `There are plenty of jobs available at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
        } else if (jobCount < 50) {
            return `There are a moderate number of jobs available at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
        */


        switch (true) {
            case jobCount === 0:
                //returning JSX elemtent instead of string to display message in red color
                return (<span style={{ color: 'red' }}><strong>No jobs available</strong></span>);
            case jobCount >=0 && jobCount < 10:
                //return template literal with jobCount and companyName variables
                return `There are plenty of jobs available (${jobCount}) at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
            case jobCount >= 10 && jobCount < 20:
                return `There are a moderate number of jobs available (${jobCount}) at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
            case jobCount >= 20 && jobCount < 50:
                return `There are loads of jobs available (${jobCount}) at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
            default:
                return `There are a huge number of jobs available (${jobCount}) at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
        }
    }
  return (
    <div>
        <h1>{companyName} Job Board</h1>
        <p>{getJobMessage()}</p>
    </div>
  )
}

export default JobBoard
