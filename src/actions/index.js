
export const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX';
export const SET_FILTER = 'SET_FILTER';
export const SET_FEED = 'SET_FEED';
export const SET_ALERTS = 'SET_ALERTS';

export function setFeed(feed) {
  return { 
      type: SET_FEED, 
      payload: {feed: feed} 
    }
}

export function setAlerts(alerts) {
  return { 
      type: SET_ALERTS, 
      payload: {alerts: alerts} 
    }
}

export function setActiveIndex(i) {
  return { 
      type: SET_ACTIVE_INDEX, 
      payload: {index: i} 
    }
}

export function setFilter(searchTerm) {
  return { 
      type: SET_FILTER, 
      payload: {
        searchTerm: searchTerm,
        filter: (e) => e.content.toLowerCase().includes(searchTerm.toLowerCase())
      }
    }
}