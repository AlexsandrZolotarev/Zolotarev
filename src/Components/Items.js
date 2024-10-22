import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
        <main>
            {this.props.items.map(i => (
                <Item  onShowItem = {this.props.onShowItem} key= {i.id} item = {i} onAdd ={this.props.onAdd}/>
            ))}
        </main>
    )
  }
}

export default Items