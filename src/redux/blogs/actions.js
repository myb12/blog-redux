import { FILTERED, SEARCHED, ALL_BLOG } from "./actionTypes"

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

export const allBlogAction = (value) => {
    return {
        type: ALL_BLOG,
    }
};