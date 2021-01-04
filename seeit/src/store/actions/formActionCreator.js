import * as actionTypes from './actionTypes';

// Captures how much the rating is 
export const setRatingAmount = (rating) => {
    return {
        type: actionTypes.RATING_AMOUNT,
        currentRating: rating
    }
};

// Captures how much the rating is 
export const setRatingHover = (hoverInput) => {
    return {
        type: actionTypes.RATING_HOVER,
        hoverCount: hoverInput
    }
};

// Captures all results 
export const storeAllResults = (formInput) => {
    return {
        type: actionTypes.RESULTS_ARRAY,
        results: formInput
    }
};

