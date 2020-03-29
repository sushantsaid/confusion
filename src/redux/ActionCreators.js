import * as ActionType from './ActionTypes';
import {DISHES} from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    //define the type of action
    type : ActionType.ADD_COMMENT,

    //now define the payload field
    payload : comment
});

export const postComment = (dishId,rating,author,comment)=>(dispatch)=>{
    const newComment = {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment
    }
    newComment.date = new Date().toISOString();
//By default the method is GET. Below is the way to use POST method
//We are sending the newComment to the server
    return fetch(baseUrl + 'comments',{
        method : 'POST',
        body : JSON.stringify(newComment),
        headers : {
            'Content-Type' : 'application/json'
        },
        credentials : 'same-origin'
    })
    .then(response=>{
        if(response.ok){
            return response; //return the response to the next .then()
        }
        else{
            //contact was made to server but server gave some error
            var error = new Error('Error : '+response.status+' '+response.statusText);
            error.response = response;
            throw error;
        }
    },//contact couldn't be made to the server and we have received some error
    error=>{
        var errMsg = new Error(error.message);
        throw errMsg;
    })
    .then(response => response.json()) //convert response to JSON
    .then(response => dispatch(addComment(response))) //dispatch the updated comments fetched from server to the store
    .catch(error=>{
        console.log("POST comments",error.message);
        alert("Couldn't post your commnet : "+error.message);});
}

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
        .then(response=>{
            if(response.ok){
                return response; //return the response to the next .then()
            }
            else{
                //contact was made to server but server gave some error
                var error = new Error('Error : '+response.status+' '+response.statusText);
                error.response = response;
                throw error;
            }
        },//contact couldn't be made to the server and we have received some error
        error=>{
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(response => response.json()) //convert response to JSON
        .then(dishes => dispatch(addDishes(dishes))) //dispatch the dishes fetched from server to the store
        .catch(error=>dispatch(dishesFailed(error.message)));
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
        .then(response=>{
            if(response.ok){
                return response; //return the response to the next .then()
            }
            else{
                //contact was made to server but server gave some error
                var error = new Error('Error : '+response.status+' '+response.statusText);
                error.response = response;
                throw error;
            }
        },//contact couldn't be made to the server and we have received some error
        error=>{
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error.message)));
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
    dispatch(promosLoading(true));
    //fetch promotions from server
    return fetch(baseUrl+'promotions')
        .then(response=>{
            if(response.ok){
                return response; //return the response to the next .then()
            }
            else{
                //contact was made to server but server gave some error
                var error = new Error('Error : '+response.status+' '+response.statusText);
                error.response = response;
                throw error;
            }
        },//contact couldn't be made to the server and we have received some error
        error=>{
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(response => response.json()) //convert response to JSON
        .then(promos => dispatch(addPromos(promos))) //dispatch the dishes fetched from server to the store
        .catch(error=>dispatch(promosFailed(error.message)));
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

//Functions for Leaders
export const fetchLeaders = () => (dispatch) =>{
    dispatch(leadersLoading(true));
    //fetch leaders from server
    return fetch(baseUrl+'leaders')
        .then(response=>{
            if(response.ok){
                return response; //return the response to the next .then()
            }
            else{
                //contact was made to server but server gave some error
                var error = new Error('Error : '+response.status+' '+response.statusText);
                error.response = response;
                throw error;
            }
        },//contact couldn't be made to the server and we have received some error
        error=>{
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(response => response.json()) //convert response to JSON
        .then(leaders => dispatch(addLeaders(leaders))) //dispatch the leaders fetched from server to the store
        .catch(error=>dispatch(leadersFailed(error.message)));
    }

export const leadersLoading = () =>({
    type : ActionType.LEADERS_LOADING
});

export const leadersFailed = (errmsg) =>({
    type : ActionType.LEADERS_FAILED,
    payload : errmsg
});

export const addLeaders = (leaders) =>({
    type : ActionType.ADD_LEADERS,
    payload : leaders
});
