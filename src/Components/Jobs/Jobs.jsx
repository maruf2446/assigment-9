import React from 'react';

const Jobs = ({job}) => {
    const {id, title, jobsAvailable, jobs_img} = job;
    return (
        <div>
           <img src={jobs_img} alt="" />
           <h2>{title}</h2>
           <p>{jobsAvailable}</p>
        </div>
    );
};

export default Jobs;