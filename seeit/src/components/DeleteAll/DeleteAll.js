import React from 'react';
import './style.css';
import { useSeeItContext } from '../../utils/SeeItContext';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';


const DeleteAll = ({ setModalOpen }) => {

    // Imports states from context
    const {
        setResultsArray,
    } = useSeeItContext();

    const closeModal = () => {
        setModalOpen(false);
    }

    const deleteAllItems = () => {
        setResultsArray([]);
        setModalOpen(false);
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

// Sends modalOpen state to the Reducer
const mapDispatchToProps = dispatch => {
    return {
        setModalOpen: (toggle) => dispatch(action.toggleModal(toggle))
    }
}

export default connect(null, mapDispatchToProps)(DeleteAll);