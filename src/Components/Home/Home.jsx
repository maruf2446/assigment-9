import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';
import './Home.css'

const Home = () => {
    const jobLists = useLoaderData();
    return (
        <div className='Home-container'>
            <div className='job-container'>
                {
                    jobLists.map(job => <Jobs
                        key={job.id}
                        job={job}
                    ></Jobs>)
                }
            </div>
        </div>
    );
};

export default Home;