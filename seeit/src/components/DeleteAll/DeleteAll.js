import React from 'react';
import './style.css';
import { useSeeItContext } from '../../utils/SeeItContext';
import { useDispatch } from 'react-redux';
import * as action from '../../store/actions/index';


const DeleteAll = () => {

    // Imports states from context
    const {
        setResultsArray,
    } = useSeeItContext();

    // Redux Dispatch Hooks
    const setModalOpen = useDispatch();


    const closeModal = () => {
        setModalOpen(action.toggleModal(false));
    }

    const deleteAllItems = () => {
        setResultsArray([]);
        setModalOpen(action.toggleModal(false));
    }

    return (
        <div className="delete">
            <h2 className="delete__text">
                Are you sure you want to delete all movies?
            </h2>

            <div className="delete__btn-group">
                <button
                    className="delete__btn delete__btn--cancel"
                    onClick={closeModal}
                >
                    Cancel
            </button>
                <button
                    className="delete__btn delete__btn--delete"
                    onClick={deleteAllItems}
                >
                    Delete
            </button>

            </div>
        </div >
    )
}


export default DeleteAll;