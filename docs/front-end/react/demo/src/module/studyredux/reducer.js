import {
    initState,
    ADDCOUNT,
    SUBCOUNT
} from "./state";

const studyReducer = (state = initState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case ADDCOUNT:
            state["count"] = payload.count;
            return {
                ...state,
            };
        case SUBCOUNT:
            state["count"] = payload.count;
            return {
                ...state,
            };
        default:
            return {
                ...state
            };
    }

}

export default studyReducer;