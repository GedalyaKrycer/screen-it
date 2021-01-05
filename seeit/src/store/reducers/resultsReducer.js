import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../updateObject';

const initialState = {
    rowIndex: false,
    rowClassControl: null,
    cardIndex: false,
    cardClassControl: null,
    resultsViewType: "list"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ROW_INDEX:
            return updateObject(state, { rowIndex: action.rowIndex });

        case actionTypes.ROW_CLASS_CONTROL:
            return updateObject(state, { rowClassControl: action.rowControl });

        case actionTypes.CARD_INDEX:
            return updateObject(state, { cardIndex: action.cardIndex });

        case actionTypes.CARD_CLASS_CONTROL:
            return updateObject(state, { cardClassControl: action.cardControl });

        case actionTypes.RESULT_VIEW_TOGGLE:
            return updateObject(state, { resultsViewType: action.viewToggle });


        default:
            return state;
    }
}

export default reducer;