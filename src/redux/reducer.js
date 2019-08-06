import { combineReducers } from "redux";
import { carState } from "../Containers/main/reducer";
const appReducer = combineReducers({ carState });

export default appReducer;
