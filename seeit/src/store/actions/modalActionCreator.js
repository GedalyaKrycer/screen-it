import * as actionTypes from './actionTypes';

// Handles if the modal is open or closed 
export const toggleModal = (toggle) => {
    return {
        type: actionTypes.MODAL_OPEN,
        openModal: toggle
    }
}

// Handles if the modal is open or closed 
export const setModalId = (id) => {
    return {
        type: actionTypes.MODAL_ID,
        modalId: id
    }
}