
import {SET_FEED, SET_ALERTS, SET_ACTIVE_FEED_INDEX, SET_ACTIVE_ALERT_INDEX, SET_FILTER} from "../actions";


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
        case SET_ACTIVE_FEED_INDEX:
            return{
                ...state,
                activeFeedIndex: action.payload.index,
                activeAlertIndex: undefined,
                mapCenter: state.feed[action.payload.index].location.coords
            }
        case SET_ACTIVE_ALERT_INDEX:
            return{
                ...state,
                activeAlertIndex: action.payload.index,
                activeFeedIndex: undefined,
                mapCenter: state.alerts[action.payload.index].location.coords
            }
        case  SET_FILTER:
            return {
                ...state,
                activeFeedIndex: undefined,
                activeAlertIndex: undefined,

                searchTerm: action.payload.searchTerm,
                filteredFeed: state.feed.filter(action.payload.filter),
                filteredAlerts: state.alerts.filter(action.payload.filter)
            }
            
        default:
            return state;
    } 
}

export default reducer;