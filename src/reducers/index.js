
import {SET_FEED, SET_ALERTS, SET_ACTIVE_INDEX, SET_FILTER} from "../actions";


function reducer(state, action) {
    switch(action.type){
        case SET_FEED:
            return{
                ...state,
                feed: action.payload.feed,
                filteredFeed: action.payload.feed
            }
        case SET_ALERTS:
            return{
                ...state,
                alerts: action.payload.alerts,
                filteredAlerts: action.payload.alerts

            }
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