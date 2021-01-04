import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../updateObject';

const initialState = {
    modalOpen: false,
    modalIdCheck: false,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.MODAL_OPEN:
            return updateObject(state, { modalOpen: action.openModal });
        case actionTypes.MODAL_ID:
            return updateObject(state, { modalIdCheck: action.modalId });
        default:
            return state;
    }
}

export default reducer;