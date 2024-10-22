import React, { Component } from 'react'

export class Category extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            categories : [
                {
                    key : 'All',
                    name : 'All'
                },
                {
                    key : 'Sofa',
                    name : 'Sofa'
                },
                {
                    key : 'Table',
                    name : 'Table'
                },
                {
                    key : 'Chair',
                    name : 'Chair'
                },

            ],
        }

    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(i => (
            <div key={i.key} onClick={() => this.props.chooseCategories(i.key)}>{i.name}</div>
        ))}
      </div>
    )
  }
}

export default Category