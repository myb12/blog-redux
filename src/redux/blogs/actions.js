import { FILTERED, SEARCHED } from "./actionTypes"

export const filterAction = (filterBy, value) => {
    return {
        type: FILTERED,
        payload: {
            filterBy,
            value
        }
    }
};

export const searchAction = (value) => {
    return {
        type: SEARCHED,
        payload: value
    }
};