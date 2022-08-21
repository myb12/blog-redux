import { FILTERED, SEARCHED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILTERED:

            return [...state]

        case SEARCHED:

            return [...state]


        default:
            return [...state]
    }
}

export default reducer;