import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items';
import Categories from './Components/Categories';
import ShowFullItem from './Components/ShowFullItem';
import Contacts from './Components/Contacts';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      orders :[],
      currentItems : [],
      items:[
      {
        id:1,
        title:'Corner Sofa',
        img:'corner-sofa.jpg',
        desc : 'Natural leather, GALA, Russia',
        category: 'Sofa',
        price : '1080',
      },
      {
        id:2,
        title:'Rocking chair',
        img:'rocking chair.jpg',
        desc : 'Wood, Russia Furniture, Russia',
        category: 'Chair',
        price : '194,26',
      },
      {
        id:3,
        title:'Chair',
        img:'ChairItaly.jpg',
        desc : 'Wood, Cavio-mod.Francesca, Italiana',
        category: 'Chair',
        price : '377,73',
      },
      {
        id:4,
        title:'Table',
        img:'Table1iTALY.webp',
        desc : 'Wood, Cavio-mod.Francesca, Italiana',
        category: 'Table',
        price : '800,99',
      },
      {
        id:5,
        title:'Table',
        img:'Table2Italy.png',
        desc : 'Wood, Cavio-mod.Francesca, Italiana',
        category: 'Table',
        price : '150',
      },
      {
        id:6,
        title:'Sofa',
        img:'SofaBarga.webp',
        desc : 'Leather, BM Style, Italiana',
        category: 'Sofa',
        price : '150',
      },
    
      ],
      showFullItem : false,
      fullItem: {},
      contacts : []
  }

    this.state.currentItems = this.state.items;

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategories = this.chooseCategories.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.onShowContacts = this.onShowContacts.bind(this);
  }
  render()
  {
    return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete = {this.deleteOrder}/>
      <Categories chooseCategories = {this.chooseCategories} />
      <Items  onShowItem= {this.onShowItem} items= {this.state.currentItems} onAdd ={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onAdd ={this.addToOrder} onShowItem= {this.onShowItem} item = {this.state.fullItem}/>}
      <Contacts contacts={this.state.contacts}  onShowContacts ={this.onShowContacts}/>
      <Footer/>
    </div>)
  } 

  onShowContacts(value)
  {
    console.log(value);
  }

  onShowItem(item)
  { 
    this.setState({fullItem : item})
    this.setState({showFullItem : !this.state.showFullItem})
  }

  chooseCategories(category)
  {
    if(category === 'All') {
      this.setState({
        currentItems : this.state.items});
        return;
    }
   
    this.setState({
        currentItems : this.state.items.filter(i => i.category === category)})
  }

  deleteOrder(id)
  {
    this.setState({orders : this.state.orders.filter(el => el.id !== id)});
  } 


  addToOrder(item)
  {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id)  isInArray = true;
    });
    if(!isInArray) this.setState({orders : [...this.state.orders,item]})
  }
}

export default App;
