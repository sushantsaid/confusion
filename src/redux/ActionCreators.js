import * as ActionType from './ActionTypes';
import {DISHES} from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId,rating,author,comment) => ({
    //define the type of action
    type : ActionType.ADD_COMMENT,

    //now define the payload field
    payload : {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment
    }
});

export const fetchDishes = () => (dispatch) =>{
    //first dispatch
    dispatch(dishesLoading(true));

    //second dispatch
    /*
    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    },2000);
    */

    //fetch dishes from server
    return fetch(baseUrl+'dishes')
        .then(response => response.json()) //convert response to JSON
        .then(dishes => dispatch(addDishes(dishes))); //dispatch the dishes fetched from server to the store
}

export const dishesLoading = () =>({
    type : ActionType.DISHES_LOADING
});

export const dishesFailed = (errmsg) =>({
    type : ActionType.DISHES_FAILED,
    payload : errmsg
});

export const addDishes = (dishes) =>({
    type : ActionType.ADD_DISHES,
    payload : dishes
});

//Functions for Comments
export const fetchComments = ()=>(dispatch)=>{
    return fetch(baseUrl+'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmsg) =>({
    type : ActionType.COMMENTS_FAILED,
    payload : errmsg
});

export const addComments=(comments)=>({
    type : ActionType.ADD_COMMENTS,
    payload : comments 
});

//Functions for Promotions
export const fetchPromos = () => (dispatch) =>{
    //first dispatch
    dispatch(promosLoading(true));

    //second dispatch
    /*
    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    },2000);
    */

    //fetch dishes from server
    return fetch(baseUrl+'promotions')
        .then(response => response.json()) //convert response to JSON
        .then(promos => dispatch(addPromos(promos))); //dispatch the dishes fetched from server to the store
}

export const promosLoading = () =>({
    type : ActionType.PROMOS_LOADING
});

export const promosFailed = (errmsg) =>({
    type : ActionType.PROMOS_FAILED,
    payload : errmsg
});

export const addPromos = (promos) =>({
    type : ActionType.ADD_PROMOS,
    payload : promos
});
