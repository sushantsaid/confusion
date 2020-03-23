import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {Route,Switch,Redirect} from 'react-router-dom';
class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }
  


  render(){

    const HomePage = () => {
      return(
        <Home/>
      );
    }

    return (
      <div>
        {/*first component is navigation bar */}
        <Header/>

        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path = "/menu" component = {()=> <Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home"/>{/*Default path when none of the Route paths are matched*/}
        </Switch>


        {/*fourth component is dish details of selected dish */}
        <Footer/>
      </div>
    );
  }  
}

export default Main;
