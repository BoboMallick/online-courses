import React from 'react';
import './Cart.css'

const Cart = (props) => {
const cart = props.cart;
let total = 0;
for (let i = 0; i < cart.length; i++) {
    const subject = cart[i];
    total = total + subject.price;
}

    return (
        <div>
            <h4 className="order">Order Summary</h4>
            <p>Course Ordered: {cart.length}</p>
            <p>Total Price: {total}$</p> 
        </div>
    );
};

export default Cart;