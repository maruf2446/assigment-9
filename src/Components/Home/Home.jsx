import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Home = () => {
    const jobLists = useLoaderData();
    return (
        <div>
            <h2>this is home: {jobLists.length}</h2>
        </div>
    );
};

export default Home;