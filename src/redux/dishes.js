import * as ActionType from './ActionTypes';

export const Dishes = (state = {
    isLoading:true,
    errMsg:null,
    dishes:[]
    }, action)=>{
    switch(action.type){
        case ActionType.ADD_DISHES:
            return {...state,isLoading:false,errMsg:null,dishes:action.payload}
        case ActionType.DISHES_LOADING:
            return {...state,isLoading:true,errMsg:null,dishes:[]}
        case ActionType.DISHES_FAILED:
            return {...state,isLoading:false,errMsg:action.payload,dishes:[]}
        default : return state;
    }
}