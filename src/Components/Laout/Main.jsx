import React from 'react';
import Header from '../Header/Header';
import {Outlet} from 'react-router-dom'
import JobList from '../JobList/JobList';
import DreamJob from '../DreamJob/DreamJob';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <DreamJob></DreamJob>
            <JobList></JobList>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;