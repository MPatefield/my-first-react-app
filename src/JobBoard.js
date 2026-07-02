import React, {useState} from 'react';

const JobBoard = () => {
    const companyName = "Redacted";
    const [disabledProperty, setDisabledProperty] = useState(false);
    const pStyle = {
        color: 'blue',
        fontSize: '20px',
        fontWeight: 'bold'
    }
    const h1Style = {
        color: 'green',
        fontSize: '30px',
        fontWeight: 'bold',
        textAlign: 'center'
    }
    const toggleDisabledProperty = () => {
        setDisabledProperty(!disabledProperty);
    }
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
        {/*Using style object to style the h1 element*/}
        <h1 style={h1Style}>{companyName} Job Board</h1>
        {/*Using style object to style the paragraph element*/}
        <p style={pStyle}>{getJobMessage()}</p>
        {/*Using inline style to style the button element*/}
        <button className="create-job-button" style={{color: 'black', backgroundColor: 'lightgray', border: '1px solid #ccc', borderRadius: '5px', padding: '10px'}} disabled={disabledProperty} value="Create Job" onClick={toggleDisabledProperty}>
            Create a Job
        </button>
    </div>
  )
}

export default JobBoard
