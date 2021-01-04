import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../updateObject';

const initialState = {
    rating: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RATING_AMOUNT:
            return updateObject(state, { rating: action.currentRating });

        default:
            return state;
    }
}

export default reducer;