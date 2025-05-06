import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { userReducer } from "./reducers/userReducers";
import { adminReducer } from "./reducers/adminReducers";
import {thunk} from 'redux-thunk';
// import { appReducer } from "./reducers/Appreducer";

// import logger from "redux-logger";


const rootReducer = combineReducers({
    user: userReducer,
    admin:adminReducer,
    // app: appReducer,
});


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));