import * as ActionType from './ActionTypes';

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