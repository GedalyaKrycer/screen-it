import React from 'react';
import './style.css';
import { useSeeItContext } from '../../utils/SeeItContext';
import { FaPlus } from "react-icons/fa";
import { connect } from 'react-redux';
import * as action from '../../store/actions/index'

const Modal = (props) => {
    // Imports states from context
    const {
        setResultEditId
    } = useSeeItContext();

    const handleClose = (e) => {

        // Controls event delegation from bubbling
        e.stopPropagation();

        // Closes modal
        props.setModalOpen(false);

        // Clears Edit ID
        setResultEditId(null);

        // Resets modal id
        props.setModelIdCheck(null)
    }

    return (
        <div
            className={props.modalOpen && props.modelIdCheck === props.modalId ? "modal--show" : "modal--hide"}
            onClick={handleClose}
        >
            <div
                className="modal__content"
                onClick={e => e.stopPropagation()}
            >
                <span
                    className="modal__close"
                    onClick={handleClose}
                ><FaPlus /></span>
                {props.children}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modalOpen: state.modal.modalOpen,
        modalIdCheck: state.modal.modalIdCheck
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setModalOpen: (toggle) => dispatch(action.toggleModal(toggle)),
        setModalIdCheck: (id) => dispatch(action.modalIdChecker(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);