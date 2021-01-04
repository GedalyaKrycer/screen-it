import * as actionTypes from './actionTypes';

// Handles if the modal is open or closed 
export const toggleModal = (toggle) => {
    return {
        type: actionTypes.MODAL_OPEN,
        openModal: toggle
    }
}