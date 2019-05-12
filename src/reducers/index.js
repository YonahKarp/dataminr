
import {SET_ACTIVE_INDEX, SET_FILTER} from "../actions";


function reducer(state, action) {
    switch(action.type){
        case SET_ACTIVE_INDEX:
            return{
                ...state,
                activeIndex: action.payload.index
            }
        case  SET_FILTER:
            return {
                ...state,
                activeIndex: undefined,
                filteredFeed: state.feed.filter(action.payload.filter)
            }
            
        default:
            return state;
    } 

    
}

export default reducer;