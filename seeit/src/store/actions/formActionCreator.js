import * as actionTypes from './actionTypes';

// Handles if the modal is open or closed 
export const setRatingAmount = (rating) => {
    return {
        type: actionTypes.RATING_AMOUNT,
        currentRating: rating
    }
};

