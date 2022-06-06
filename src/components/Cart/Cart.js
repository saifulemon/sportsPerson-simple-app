import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    for(let player of cart) {
        total =  total + parseInt(player.salary);
    }

    return (
        <div className='cart'>
            <p><FontAwesomeIcon icon={faUser} /> Players Added: {cart.length}</p>
            <br />
            {
                cart.length 
                ? cart?.map(item => <p>{item.name}</p>)
                :null
            }
            <span>Total: {total}</span>
        </div>
    );
};

export default Cart;