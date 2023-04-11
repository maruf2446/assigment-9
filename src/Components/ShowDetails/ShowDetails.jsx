import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ShowDetails = () => {

    const jobData = useLoaderData();
    const { id } = useParams();

    // console.log();

    const jobDetailsData = jobData.find(item => item.id === id);
    console.log(jobDetailsData);
    const { jobDescription, jobResponsibilities, educationRequirements, experience, salary, jobTitle, phoneNumber, email, location } = jobDetailsData;

    return (
        <div>
            <h2 className='text-2xl text-black'>Job Details</h2>
            <div className='flex'>
                <div>
                    <p>Job Description: {jobDescription}</p>
                    <p>Job Resposibility: {jobResponsibilities}</p>
                    <p>Educational requirements: {educationRequirements}</p>
                    <p>Experiences: {experience}</p>
                    <p>2-3 Year in this field.</p>
                </div>
                <div className='bg-slate-600 text-white'>
                    <p>Job Details</p>
                    <p>Salary: {salary}</p>
                    <p>Job Title :{jobTitle}</p>
                    <p>Contact Information</p>
                    <p>Phone :{phoneNumber}</p>
                    <p>Email: {email}</p>
                    <p>Address :{location}</p>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;