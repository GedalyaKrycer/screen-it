import * as actionTypes from './actionTypes';

// Captures which row was clicked
export const setRowIndex = (index) => {
    return {
        type: actionTypes.ROW_INDEX,
        rowIndex: index
    }
};

// Confirms if the css class should be changed
export const setRowControl = (toggleCSS) => {
    return {
        type: actionTypes.ROW_CLASS_CONTROL,
        rowControl: toggleCSS
    }
};

// Captures which row was clicked
export const setCardIndex = (index) => {
    return {
        type: actionTypes.CARD_INDEX,
        cardIndex: index
    }
};

// Confirms if the css class should be changed
export const setCardControl = (toggleCSS) => {
    return {
        type: actionTypes.CARD_CLASS_CONTROL,
        cardControl: toggleCSS
    }
};

// Changes the results from list to card view
export const setResultsView = (view) => {
    return {
        type: actionTypes.RESULT_VIEW_TOGGLE,
        viewToggle: view
    }
};







