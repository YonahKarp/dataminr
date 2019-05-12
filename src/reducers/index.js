import {mockData} from "../mockData";

const initialState = mockData;

function reducer(state = initialState, action) {
    switch(action.type){
        case "setActiveIndex":
            return{
                ...state,
                activeIndex: action.payload.index
            }
    } 

    return state;
}

export default reducer;