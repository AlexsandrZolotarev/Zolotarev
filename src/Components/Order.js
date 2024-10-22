import React, { Component } from 'react'

import { BsX } from "react-icons/bs";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
            <img src ={"./img/" + this.props.item.img}></img>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.price}$</p>
            <BsX className='delete-icon' onClick={()=> this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order