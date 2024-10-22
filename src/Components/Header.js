import React, { useState } from 'react'
import { BsBag } from "react-icons/bs";
import Order from './Order';

const showOrders = (props) =>{
  let sum = 0;
  props.orders.forEach(element => {
    sum += Number.parseFloat(element.price);
  });
    return <div>
       {props.orders.map(i => (<Order onDelete = {props.onDelete} key={i.id} item ={i}/>))}
       <p className='sum'>Sum : {new Intl.NumberFormat().format(sum)}$</p>
    </div>
}

const showNothing = () => {
  return <div className='empty'>
    <h2>No product</h2>
  </div>
}

export default function Header(props) {

  let [cartOpen,setCartOpen] = useState(false);

  return (
    <header>
        <div>
            <span className='logo'>Zolotorev</span>
            <ul className='nav'>
              <li>About us</li>
              <li><a href ='#Contacts' target= "_self"> Contacts</a></li>
              <li>Office</li>
            </ul>
            <BsBag onClick={() => setCartOpen(cartOpen = !cartOpen) } className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && 
            (
              <div className='shop-cart'> 

                {props.orders.length > 0 ? showOrders(props) : showNothing()}

              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
