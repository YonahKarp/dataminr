import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    feed: [],
    filteredFeed: [],
    alerts: [],
    filteredAlerts: [],
    searchTerm: ""
}
export const store = createStore(reducer, initialState);