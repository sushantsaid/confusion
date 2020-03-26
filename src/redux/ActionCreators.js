import * as ActionType from './ActionTypes';
import {DISHES} from '../shared/dishes';

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
    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    },2000);
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
