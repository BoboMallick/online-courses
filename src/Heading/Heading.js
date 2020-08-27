import React from 'react';
import './Heading.css'

const Heading = () => {
    return (
        <div className="heading">
            <h1 className="online"><strong>Online Courses</strong></h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/courses"> All Courses</a>
                <a href="/add"> Add Coursees</a>
            </nav>
        </div>
    );
};

export default Heading;