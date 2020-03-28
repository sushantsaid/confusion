import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Route,Switch,Redirect} from 'react-router-dom';

//imports required for Redux
import {withRouter} from 'react-router-dom'; //If we are using Redux, withRouter should be imported
import {connect} from 'react-redux';
import {postComment,fetchDishes,fetchComments,fetchPromos} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

const mapStateToProps = (state) => {
  return {
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  }
}

const mapDispatchToProps = dispatch =>({
  postComment : (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
  fetchDishes : ()=>{dispatch(fetchDishes())},
  resetFeedbackForm : ()=>{dispatch(actions.reset('feedback'))},
  fetchComments : ()=> {dispatch(fetchComments())},
  fetchPromos : ()=> {dispatch(fetchPromos())}
});

class Main extends Component{
/*
  constructor(props){
    super(props);
    
  }
  */

  //when the component is mounted then fetch the details of dishes
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render(){

    const HomePage = () => {
      return(
        <Home 
        dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}// pass the featured dish as props
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMsg={this.props.dishes.errMsg}
        promotion = {this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}// pass the featured promotion
        promosLoading = {this.props.promotions.isLoading}
        promosErrMsg = {this.props.promotions.errMsg}
        leader = {this.props.leaders.filter((leader)=>leader.featured)[0]} // pass the featured leader
        />
      );
    }

    const dishWithId = ({match})=>{
      var DISHID = match.params.dishId;
      console.log("dish id : ",DISHID);
      return(
        <DishDetail 
        dish = {this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(DISHID,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMsg={this.props.dishes.errMsg}
        comments = {this.props.comments.comments.filter((comment)=>comment.dishId === parseInt(DISHID,10))}
        commentsErrMsg = {this.props.comments.errMsg}
        //addComment attribute will add new comment submitted by user
        postComment = {this.props.postComment}
        />
      );
    }

    return (
      <div>
        {/*first component is navigation bar */}
        <Header/>

        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path = "/menu" component = {()=> <Menu dishes={this.props.dishes}/>}/> {/*()=><Menu> is equivalent to ()=>{return(<Menu></Menu>)}*/}
          <Route path = "/menu/:dishId" component = {dishWithId}/>
          <Route exact path = "/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
          <Route path = "/aboutus" component={()=><About leaders = {this.props.leaders}/>}/>
          <Redirect to="/home"/>{/*Default path when none of the Route paths are matched*/}
        </Switch>


        {/*last component is dish details of selected dish */}
        <Footer/>
      </div>
    );
  }  
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)); //connect the Main component to the State from the Redux store
//Also connect Action creators from ActionCreators.js to Main 
