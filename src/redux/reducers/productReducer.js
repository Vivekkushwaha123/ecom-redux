import ActionTypes from "../contants/action-types";

const initalState = {
    products: [],
}

export const productReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;

    }
};

export const selectedProductreducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;
    }
};