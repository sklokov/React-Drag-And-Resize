import {combineReducers, createStore} from "redux";
import widgetReducer from "./widget-reducer";

let reducers = combineReducers({
    desktopPage: widgetReducer,
});

const store = createStore(reducers);
window.__store__ = store;

export default store;
