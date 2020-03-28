import * as ActionType from './ActionTypes';

export const Promotions = (state = {
    isLoading : true,
    promotions : [],
    errMsg : null
    }, action)=>{
    
    switch(action.type){
        case ActionType.ADD_PROMOS:
            return {...state,isLoading:false,errMsg:null,promotions:action.payload}
        case ActionType.PROMOS_LOADING:
            return {...state,isLoading:true,errMsg:null,promotions:[]}
        case ActionType.PROMOS_FAILED:
            return {...state,isLoading:false,errMsg:action.payload,promotions:[]}
        
        default : return state;
    }
}