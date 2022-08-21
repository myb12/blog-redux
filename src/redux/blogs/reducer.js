import { FILTERED, SEARCHED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILTERED:
            const { filterBy, value } = payload;

            return [
                ...state.filter(blog => blog[filterBy] === value)
            ];

        case SEARCHED:

            return [...state]


        default:
            return [...state]
    }
}

export default reducer;