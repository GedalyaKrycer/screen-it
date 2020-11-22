import React from 'react';
import './style.css';
import { useSeenItContext } from '../../utils/SeenItContext';

const Modal = ({ children }) => {
    // Imports states from context
    const {
        modalState
    } = useSeenItContext();


    return (
        <div className={modalState ? "modal--show" : "modal--hide"}>
            {children}
        </div>
    )
}

export default Modal;