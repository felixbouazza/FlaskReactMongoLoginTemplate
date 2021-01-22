import { combineReducers, createStore } from "redux";
import UserReducer from "../reducers/UserReducer";

const rootReducer = combineReducers({
    UserReducer
})

const store = createStore(rootReducer)

export default store;