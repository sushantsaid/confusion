import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';

export const initialState = {
    dishes : DISHES,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      comments : COMMENTS
};

// Reducer is a function here which takes two parameters : state and action
// When the function is called for first time, it will not have any state so we initialize it to some default state
// state = initialState
// Based on the action, state will be created and returned

export const Reducer = (state = initialState, action)=>{
    return state;
};