import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }
  
  onDishSelected(dishId){
    this.setState({selectedDish : dishId});
}

  render(){
    return (
      <div>
        {/*first component is navigation bar */}
        <Header/>
        
        {/*second component is menu of dishes */}
        <Menu dishes={this.state.dishes}
        onClick={(dishId)=>this.onDishSelected(dishId)}/>
        
        {/*third component is dish details of selected dish */}
        <DishDetail selectedDish={
            this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]
            /* => allows to iterate over a javascript object(json)
            above line will find out array of dishes whose id matches with id of selected dish id
            here as each dish has unique id, array will contain only one element which will be at 0th index*/
            }/>

        {/*fourth component is dish details of selected dish */}
        <Footer/>
      </div>
    );
  }  
}

export default Main;
