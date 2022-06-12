import {
    combineReducers
}
from "redux";
import studyStore from "./studyredux/reducer";

const reducer = {
    studyStore,
}

const rootReducer = combineReducers(reducer);

export default rootReducer;