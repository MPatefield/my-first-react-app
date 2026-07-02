import React, { useState } from 'react';

const JobBoard = () => {
    const companyName = "Redacted";
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
    const h2Style = {
        color: 'orange',
        fontSize: '25px',
    }
    const [jobenvironment, setJobEnvironment] = useState("production");
    //Using useState hook to manage jobCount state
    const [developmentJobCount, setDevelopmentJobCount] = useState(0);
    const [productionJobCount, setProductionJobCount] = useState(0);
    //Function to increase jobCount state by 1
    const increaseJobCount = () => {
        if (jobenvironment === "production") {
            setProductionJobCount(productionJobCount + 1);
        } else {
            setDevelopmentJobCount(developmentJobCount + 1);
        }
    }
    const decreaseJobCount = () => {
        if (jobenvironment === "production") {
            if (productionJobCount > 0) {
                setProductionJobCount(productionJobCount - 1);
            }
        } else {
            if (developmentJobCount > 0) {
                setDevelopmentJobCount(developmentJobCount - 1);
            }
        }
    }
    const resetJobCount = () => {
        setProductionJobCount(0);
        setDevelopmentJobCount(0);
    }


    const changeJobEnvironment = () => {
        //Using ternary operator to toggle between production and development environment
        setJobEnvironment(jobenvironment === "production" ? "development" : "production");
    }

    const getJobMessage = () => {

        //return jobCount === 0 ? "No jobs available" : `There are ${jobCount} jobs available at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;

        /*if (jobCount === 0) {
            return "No jobs available";
        } else if (jobCount < 10){
            return `There are plenty of jobs available at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
        } else if (jobCount < 50) {
            return `There are a moderate number of jobs available at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
        */


        /*switch (true) {
            case jobCount === 0:
                //returning JSX elemtent instead of string to display message in red color
                return (<span style={{ color: 'red' }}><strong>No jobs available</strong></span>);
            case jobCount >= 0 && jobCount < 10:
                //return template literal with jobCount and companyName variables
                return `There are plenty of jobs available (${jobCount}) at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
            case jobCount >= 10 && jobCount < 20:
                return `There are a moderate number of jobs available (${jobCount}) at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
            case jobCount >= 20 && jobCount < 50:
                return `There are loads of jobs available (${jobCount}) at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
            default:
                return `There are a huge number of jobs available (${jobCount}) at ${companyName}. There will be approximately ${Math.floor(jobCount * 1.5)} new jobs posted next week.`;
        }*/

        if (jobenvironment === "production" && productionJobCount === 0) {
            return (
                <div>
                    <span style={{ color: 'red' }}><strong>No jobs available</strong></span>
                </div>
            );
        } else if (jobenvironment === "production" && productionJobCount < 10) {
            return `There are plenty of jobs available (${productionJobCount}) at ${companyName}. There will be approximately ${Math.floor(productionJobCount * 1.5)} new jobs posted next week.`;
        } else if (jobenvironment === "production" && productionJobCount < 20) {
            return `There are a moderate number of jobs available (${productionJobCount}) at ${companyName}. There will be approximately ${Math.floor(productionJobCount * 1.5)} new jobs posted next week.`;
        } else if (jobenvironment === "production" && productionJobCount < 50) {
            return `There are loads of jobs available (${productionJobCount}) at ${companyName}. There will be approximately ${Math.floor(productionJobCount * 1.5)} new jobs posted next week.`;
        } else if (jobenvironment === "production" && productionJobCount >= 50) {
            return `There are a huge number of jobs available (${productionJobCount}) at ${companyName}. There will be approximately ${Math.floor(productionJobCount * 1.5)} new jobs posted next week.`;
        }

        if (jobenvironment === "development" && developmentJobCount === 0) {
            return (
                <div>
                    <span style={{ color: 'red' }}><strong>No jobs available</strong></span>
                </div>
            );
        } else if (jobenvironment === "development" && developmentJobCount < 10) {
            return `There are plenty of jobs available (${developmentJobCount}) at ${companyName}. There will be approximately ${Math.floor(developmentJobCount * 1.5)} new jobs posted next week.`;
        } else if (jobenvironment === "development" && developmentJobCount < 20) {
            return `There are a moderate number of jobs available (${developmentJobCount}) at ${companyName}. There will be approximately ${Math.floor(developmentJobCount * 1.5)} new jobs posted next week.`;
        } else if (jobenvironment === "development" && developmentJobCount < 50) {
            return `There are loads of jobs available (${developmentJobCount}) at ${companyName}. There will be approximately ${Math.floor(developmentJobCount * 1.5)} new jobs posted next week.`;
        } else {
            return `There are a huge number of jobs available (${developmentJobCount}) at ${companyName}. There will be approximately ${Math.floor(developmentJobCount * 1.5)} new jobs posted next week.`;
        }
    }

    return (
        <div>
            {/*Using style object to style the h1 element*/}
            <h1 style={h1Style}>{companyName} Job Board</h1>
            {jobenvironment === "production" ? (
                <p>Production Jobs: {productionJobCount}</p>
            ) : (
                <p>Development Jobs: {developmentJobCount}</p>
            )}
            {/*Using style object to style the paragraph element*/}
            <p style={pStyle}>{getJobMessage()}</p>
            {/*Using inline style to style the button element*/}
            <button className="create-job-button" style={{ margin: '10px 10px' }} value="Create Job" onClick={increaseJobCount}>Create a Job</button>
            <button className="remove-job-button" style={{ margin: '10px 10px' }} value="Remove Job" onClick={decreaseJobCount}>Remove a Job</button>
            <button className="reset-job-button" style={{ margin: '10px 10px' }} value="Reset Jobs" onClick={resetJobCount}>Reset Jobs</button>
            <p>Current Job Environment: {jobenvironment}</p>
            <button className="change-environment-button" style={{ margin: '10px 10px' }} value="Change Environment" onClick={changeJobEnvironment}>Change Environment</button>
        </div>
    )
}


export default JobBoard
