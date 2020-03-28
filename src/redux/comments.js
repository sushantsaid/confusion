import * as ActionType from './ActionTypes';


export const Comments = (state = {
    errMsg : null,
    comments : []},
    action)=>{
    switch(action.type){

        case ActionType.ADD_COMMENTS:
                        return {...state, errMsg : null, comments : action.payload}

        case ActionType.COMMENTS_FAILED:
                        return {...state, errMsg : action.payload}

        case ActionType.ADD_COMMENT:
                        //copy the payload to local variable(comment)
                        var comment = action.payload;
                        //assign id to the comment
                        //comment.id = state.comments.length;
                        //assign the date to comment
                        //comment.date = new Date().toISOString();
                        //return the new state by adding comment to the state object
                        //original state is not mutated; instead a copy of original state is made
                        return {...state, comments : state.comments.concat(comment)}

        default : return state;
    }
}