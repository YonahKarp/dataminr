import { createStore } from "redux";
import {mockData} from "../mockData"
import reducer from "../reducers";

const initialState = {
    ...mockData,
    filteredFeed: mockData.feed,
    filteredAlerts: mockData.alerts

}
export const store = createStore(reducer, initialState);