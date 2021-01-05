import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../updateObject';

const initialState = {
    rating: null,
    ratingHover: null,
    resultsArray: [],
    resultEditId: null,
    currentResult: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RATING_AMOUNT:
            return updateObject(state, { rating: action.currentRating });

        case actionTypes.RATING_HOVER:
            return updateObject(state, { ratingHover: action.hoverCount });

        case actionTypes.RESULTS_ARRAY:
            return updateObject(state, { resultsArray: action.results });

        case actionTypes.RESULTS_EDIT_ID:
            return updateObject(state, { resultEditId: action.editId });

        case actionTypes.CURRENT_RESULT:
            return updateObject(state, { currentResult: action.currentResult });

        default:
            return state;
    }
}

export default reducer;