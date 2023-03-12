import { combineReducers, legacy_createStore } from "redux";
import { reducer as token } from "../redux/Login/reducer";
import {reducer as todo} from "../redux/Todo/reducer"
const newstore=combineReducers({
        token:token,
        todo:todo
})

export const store=legacy_createStore(newstore)