import React from 'react';
import './style.css';
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../store/actions/index';

const Modal = (props) => {

    // Redux State Hooks
    const modalOpen = useSelector((state) => state.modal.modalOpen);
    const modalIdCheck = useSelector((state) => state.modal.modalIdCheck);


    // Redux Dispatch Hooks
    const setModalOpen = useDispatch();
    const setModalIdCheck = useDispatch();
    const setResultEditId = useDispatch();

    const handleClose = (e) => {

        // Controls event delegation from bubbling
        e.stopPropagation();

        // Closes modal
        setModalOpen(action.toggleModal(false));

        // Clears Edit ID
        setResultEditId(action.storeResultEditId(null));

        // Resets modal id
        setModalIdCheck(action.modalIdChecker(null))
    }

    return (
        <div
            className={modalOpen && modalIdCheck === props.modalId ? "modal--show" : "modal--hide"}
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

export default Modal;