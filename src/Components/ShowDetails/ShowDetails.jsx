import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetails = () => {

    const jobData = useLoaderData();
    const {id} = useParams();
    
    // console.log();

    const jobDetailsData = jobData.find(item => item.id === id);
    console.log(jobDetailsData);
    const { jobDescription, jobResponsibilities, educationRequirements, experience, salary, jobTitle, phoneNumber, email, location } = jobDetailsData;

    return (
        <div>
            <h2 className='text-2xl text-black'>Job Details</h2>
        <div>
            <p>Job Description: {}</p>
        </div>
        </div>
    );
};

export default ShowDetails;