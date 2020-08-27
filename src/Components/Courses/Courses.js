import React from 'react';
import fake from '../../fake/fake';
import { useState } from 'react';
import './Courses.css';
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';


const Courses = () => {
    const first15 = fake.slice(0,15)
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);
    
    const handleAddCourse = (subject) =>{
        const newCart = [...cart, subject];
        setCart(newCart);
    }

    return (
        <div className="course-container">
           <div className="sub-container">
                {
                    courses.map(course => <Subject
                    handleAddCourse = {handleAddCourse}
                         subject={course}
                         ></Subject>)
                }
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Courses;