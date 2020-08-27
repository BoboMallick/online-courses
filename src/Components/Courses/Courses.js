import React from 'react';
import fake from '../../fake/fake';
import { useState } from 'react';
import './Courses.css';
import Subject from '../Subject/Subject';


const Courses = () => {
    const first15 = fake.slice(0,15)
    const [courses, setCourses] = useState(first15);
    
    const handleAddCourse = () =>{
        console.log('Product added');
    }

    return (
        <div className="course-container">
           <div className="sub-container">
                {
                    courses.map(course => <Subject
                    
                         subject={course}
                         ></Subject>)
                }
           </div>
           <div className="cart-container">
               <h3>Cart</h3>
           </div>
        </div>
    );
};

export default Courses;