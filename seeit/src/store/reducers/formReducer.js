import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../updateObject';

const initialState = {
    rating: null,
    ratingHover: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RATING_AMOUNT:
            return updateObject(state, { rating: action.currentRating });

        case actionTypes.RATING_HOVER:
            return updateObject(state, { ratingHover: action.hoverCount });

        default:
            return state;
    }
}

export default reducer;