import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">CareeHub</Link>
            <Link to="/statis">Statistics</Link>
            <Link to="/"applied>Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/star">Star Applying</Link>
        </nav>
    );
};

export default Header;