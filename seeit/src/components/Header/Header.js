import React from 'react';
import './style.css';
import Logo from "../Logo/Logo";
import { useSeeItContext } from '../../utils/SeeItContext';
import ToolIcon from "../ToolIcon/ToolIcon";


const Header = () => {

    // Imports states from context
    const {
        resultsArray,
        setModalOpen,
        setModelIdCheck
    } = useSeeItContext();

    const openModal = () => {

        // Tells modal to open
        setModalOpen(true);

        // Verifies which modal should open
        setModelIdCheck("headerDeleteAll");
    }

    return (
        <header>
            <Logo />
            <button
                className={`header__btn ${resultsArray.length >= 1 ? "header__btn--active" : "header__btn--disabled"}`}
                disabled={resultsArray.length >= 1 ? false : true}
                onClick={openModal}
            >
                <ToolIcon
                    iconClass={resultsArray.length >= 1 ? "tool-icon--shadow-warning" : "tool-icon--disabled"}
                    circle={<circle cx="30" cy="30" r="30" fill="white" />}
                    path={<path d="M40.2143 20.5625H35.3446C34.7171 20.5625 34.1429 20.2094 33.8598 19.6494V19.6494C33.762 19.4542 33.6114 19.29 33.4249 19.1753C33.2384 19.0606 33.0233 18.9999 32.804 19H27.1911C26.9722 18.9992 26.7576 19.0596 26.5717 19.1745C26.3859 19.2894 26.2363 19.454 26.1402 19.6494V19.6494C25.8571 20.2094 25.2829 20.5625 24.6554 20.5625H19.7857C19.5773 20.5625 19.3775 20.6448 19.2301 20.7913C19.0828 20.9378 19 21.1366 19 21.3438V22.9063C19 23.1135 19.0828 23.3122 19.2301 23.4587C19.3775 23.6052 19.5773 23.6875 19.7857 23.6875H40.2143C40.4227 23.6875 40.6225 23.6052 40.7699 23.4587C40.9172 23.3122 41 23.1135 41 22.9063V21.3438C41 21.1366 40.9172 20.9378 40.7699 20.7913C40.6225 20.6448 40.4227 20.5625 40.2143 20.5625ZM21.6125 41.8027C21.65 42.3978 21.9141 42.9562 22.3511 43.3644C22.7881 43.7726 23.3651 43.9999 23.9647 44H36.0353C36.6349 43.9999 37.2119 43.7726 37.6489 43.3644C38.0859 42.9562 38.35 42.3978 38.3875 41.8027L39.4286 25.25H20.5714L21.6125 41.8027Z" />} />
            </button>
        </header >
    )
}

export default Header;