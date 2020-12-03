import React from 'react';
import './style.css';
import { useSeeItContext } from '../../utils/SeeItContext';
import { FaPlus } from "react-icons/fa";

const Modal = ({ children, modalId }) => {
    // Imports states from context
    const {
        modalOpen,
        setModalOpen,
        modelIdCheck,
        setModelIdCheck,
        setResultEditId
    } = useSeeItContext();

    const handleClose = (e) => {

        // Controls event delegation from bubbling
        e.stopPropagation();

        // Closes modal
        setModalOpen(false);

        // Clears Edit ID
        setResultEditId(null);

        // Resets modal id
        setModelIdCheck(null)
    }

    return (
        <div
            className={modalOpen && modelIdCheck === modalId ? "modal--show" : "modal--hide"}
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