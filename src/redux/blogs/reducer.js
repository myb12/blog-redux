import { ALL_BLOG, FILTERED, SEARCHED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL_BLOG:

            return [
                ...initialState
            ];

        case FILTERED:
            const { filterBy, value } = payload;

            return [
                ...state.filter(blog => blog[filterBy] === value)
            ];

        case SEARCHED:

            if (!payload) {
                return [
                    ...initialState
                ]
            };


            return [
                ...state.filter(blog => blog.title.toLowerCase().includes(payload.toLowerCase()))
            ]


        default:
            return [...state]
    }
}

export default reducer;