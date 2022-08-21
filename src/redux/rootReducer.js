import { combineReducers } from "redux";
import reducer from "./blogs/reducer";

const rootReducer = combineReducers({
    blogs: reducer,
});

export default rootReducer;