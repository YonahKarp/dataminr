
export const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX'
export const SET_FILTER = 'SET_FILTER'


export function setActiveIndex(i) {
  return { 
      type: SET_ACTIVE_INDEX, 
      payload: {index: i} 
    }
}

export function setFilter(filter) {
  return { 
      type: SET_FILTER, 
      payload: {filter: filter}
    }
}