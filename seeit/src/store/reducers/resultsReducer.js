import * as actionTypes from '../actions/actionTypes';
import updateObject from '../updateObject';

const initialState = {
    starHover: null,
    resultsArray: [],
    resultEditId: null,
    setCurrentResult: null,
    slideClassControl: false,
    slideClassIndex: null,
    cardClassControl: false,
    cardClassIndex: null,
    viewToggle: 'list'

}

const reducer = (state = initialState, action) => {
    return state
}

export default reducer;