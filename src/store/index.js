import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    feed: [],
    filteredFeed: [],
    alerts: [],
    filteredAlerts: []

}
export const store = createStore(reducer, initialState);