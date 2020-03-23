import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';
import {Route,Switch,Redirect} from 'react-router-dom';
class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      comments : COMMENTS
    };
  }
  


  render(){

    const HomePage = () => {
      return(
        <Home 
        dish={this.state.dishes.filter((dish)=>dish.featured)[0]}// pass the featured dish as props
        promotion = {this.state.promotions.filter((promo)=>promo.featured)[0]}// pass the featured promotion
        leader = {this.state.leaders.filter((leader)=>leader.featured)[0]} // pass the featured leader
        />
      );
    }

    const dishWithId = ({match})=>{
      var DISHID = match.params.dishId;
      console.log("dish id : ",DISHID);
      return(
        <DishDetail 
        dish = {this.state.dishes.filter((dish)=>dish.id === parseInt(DISHID,10))[0]}
        comments = {this.state.comments.filter((comment)=>comment.dishId === parseInt(DISHID,10))}
        />
      );
    }

    return (
      <div>
        {/*first component is navigation bar */}
        <Header/>

        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path = "/menu" component = {()=> <Menu dishes={this.state.dishes}/>}/>
          <Route path = "/menu/:dishId" component = {dishWithId}/>
          <Route exact path = "/contactus" component={Contact}/>
          <Redirect to="/home"/>{/*Default path when none of the Route paths are matched*/}
        </Switch>


        {/*last component is dish details of selected dish */}
        <Footer/>
      </div>
    );
  }  
}

export default Main;
