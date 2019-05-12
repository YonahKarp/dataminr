import { createStore } from "redux";
import {mockData} from "../mockData"
import reducer from "../reducers";

const initialState = {
    feed: mockData
}
export const store = createStore(reducer, initialState);