import { combineReducers } from "redux";
import authReducers from "./authReducers";
import postReducers from "./postReducers";

const rootReducer = combineReducers({
    auth:authReducers,
    posts:postReducers,
});

export default rootReducer;