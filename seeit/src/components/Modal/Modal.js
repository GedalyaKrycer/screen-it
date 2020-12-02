import React from 'react';
import './style.css';
import { useSeeItContext } from '../../utils/SeeItContext';
import { FaPlus } from "react-icons/fa";

const Modal = ({ children }) => {
    // Imports states from context
    const {
        modalState,
        setModalState,
        setResultEditId
    } = useSeeItContext();

    const handleClose = (e) => {

        // Controls event delegation from bubbling
        e.stopPropagation();

        // Closes modal
        setModalState(false);

        // Clears Edit ID
        setResultEditId(null);
    }

    return (
        <div
            className={modalState ? "modal--show" : "modal--hide"}
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
                {children}
            </div>
        </div>
    )
}

export default Modal;