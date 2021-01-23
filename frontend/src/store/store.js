import { combineReducers, createStore } from "redux";
import UserReducer from "../reducers/UserReducer";

const rootReducer = combineReducers({
    UserReducer
})

// Store with all Reducer
const store = createStore(rootReducer)

export default store;