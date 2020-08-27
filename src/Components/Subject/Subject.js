import React from 'react';
import './Subject.css'

const Subject = (props) => {
    console.log(props);
    const { name, mentor, price} = props.subject;
    return (
        <div className="courses-box">
            <h4>Name: {name}</h4>
            <br></br>
            <p>Mentor: {mentor}</p>
            <br></br>
            <p>Price: {price}$</p>
            <br></br>
            <button className="btn btn-success">Enroll Now</button>

        </div>
    );
};

export default Subject;