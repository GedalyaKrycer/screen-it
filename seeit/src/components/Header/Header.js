import React, { useEffect, useState } from 'react';
import './style.css';
import Logo from "../Logo/Logo";
import { useSeeItContext } from '../../utils/SeeItContext';
import ToolIcon from "../ToolIcon/ToolIcon";
import { useDispatch } from 'react-redux';
import * as action from '../../store/actions/index';


const Header = (props) => {

    // Imports states from context
    const {
        resultsArray,
        viewToggle,
        setViewToggle
    } = useSeeItContext();


    // Redux Dispatch Hooks
    const setModalOpen = useDispatch();
    const setModalIdCheck = useDispatch();

    // State to hold the width of the screen
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    // Opens delete modal
    const openModal = () => {

        // Tells modal to open
        setModalOpen(action.toggleModal(true));

        // Verifies which modal should open
        setModalIdCheck(action.modalIdChecker("headerDeleteAll"));
    }

    // Toggles card/list view
    const switchView = () => {
        viewToggle === 'list' ? setViewToggle('cards') : setViewToggle('list');
    }


    // Use Effect To setting Width Size
    useEffect(() => {

        // Sets current window size to state
        const handleWinowResize = () => {
            setWindowWidth(window.innerWidth);
        }

        // Event listener for window size changing
        window.addEventListener('resize', handleWinowResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleWinowResize);
        }
    }, [windowWidth])


    // Use Effect to toggle view based on window size
    useEffect(() => {

        if (windowWidth > 699) {
            setViewToggle('cards');
        }

    }, [windowWidth, setViewToggle])


    return (
        <header>
            <Logo />
            <div className="header__btn-group">
                <button
                    aria-label="toggle"
                    className={`header__btn ${resultsArray.length >= 1 ? "header__btn--active" : "header__btn--disabled"}`}
                    disabled={resultsArray.length >= 1 ? false : true}
                    onClick={switchView}
                >
                    <ToolIcon
                        onClick={switchView}
                        iconClass={resultsArray.length >= 1 ? "tool-icon--shadow-primary" : "tool-icon--disabled"}
                        circle={<circle cx="30" cy="30" r="30" fill="white" />}
                        path={viewToggle === 'list' ? <path d="M31.875 20H40.875C41.4963 20 42 20.5037 42 21.125V28.625C42 29.2463 41.4963 29.75 40.875 29.75H31.875C31.2537 29.75 30.75 29.2463 30.75 28.625V21.125C30.75 20.5037 31.2537 20 31.875 20ZM28.125 20H19.125C18.5037 20 18 20.5037 18 21.125V28.625C18 29.2463 18.5037 29.75 19.125 29.75H28.125C28.7463 29.75 29.25 29.2463 29.25 28.625V21.125C29.25 20.5037 28.7463 20 28.125 20ZM18 32.375V39.875C18 40.4963 18.5037 41 19.125 41H28.125C28.7463 41 29.25 40.4963 29.25 39.875V32.375C29.25 31.7537 28.7463 31.25 28.125 31.25H19.125C18.5037 31.25 18 31.7537 18 32.375ZM31.875 41H40.875C41.4963 41 42 40.4963 42 39.875V32.375C42 31.7537 41.4963 31.25 40.875 31.25H31.875C31.2537 31.25 30.75 31.7537 30.75 32.375V39.875C30.75 40.4963 31.2537 41 31.875 41Z" /> :

                            <path d="M19.3438 20C18.8802 20 18.4271 20.1375 18.0416 20.395C17.6562 20.6525 17.3558 21.0186 17.1784 21.4468C17.001 21.8751 16.9546 22.3463 17.045 22.801C17.1355 23.2556 17.3587 23.6733 17.6865 24.001C18.0142 24.3288 18.4319 24.552 18.8865 24.6425C19.3412 24.7329 19.8124 24.6865 20.2407 24.5091C20.6689 24.3317 21.035 24.0313 21.2925 23.6459C21.55 23.2604 21.6875 22.8073 21.6875 22.3438C21.6875 21.7221 21.4406 21.126 21.001 20.6865C20.5615 20.2469 19.9654 20 19.3438 20ZM19.3438 27.8125C18.8802 27.8125 18.4271 27.95 18.0416 28.2075C17.6562 28.465 17.3558 28.8311 17.1784 29.2593C17.001 29.6876 16.9546 30.1589 17.045 30.6135C17.1355 31.0681 17.3587 31.4858 17.6865 31.8135C18.0142 32.1413 18.4319 32.3645 18.8865 32.455C19.3412 32.5454 19.8124 32.499 20.2407 32.3216C20.6689 32.1442 21.035 31.8438 21.2925 31.4584C21.55 31.0729 21.6875 30.6198 21.6875 30.1562C21.6875 29.5346 21.4406 28.9385 21.001 28.499C20.5615 28.0594 19.9654 27.8125 19.3438 27.8125ZM19.3438 35.625C18.8802 35.625 18.4271 35.7625 18.0416 36.02C17.6562 36.2775 17.3558 36.6436 17.1784 37.0718C17.001 37.5001 16.9546 37.9713 17.045 38.426C17.1355 38.8806 17.3587 39.2983 17.6865 39.626C18.0142 39.9538 18.4319 40.177 18.8865 40.2675C19.3412 40.3579 19.8124 40.3115 20.2407 40.1341C20.6689 39.9567 21.035 39.6563 21.2925 39.2709C21.55 38.8854 21.6875 38.4323 21.6875 37.9688C21.6875 37.3471 21.4406 36.751 21.001 36.3115C20.5615 35.8719 19.9654 35.625 19.3438 35.625ZM41.2188 36.4062H25.5938C25.3866 36.4062 25.1878 36.4886 25.0413 36.6351C24.8948 36.7816 24.8125 36.9803 24.8125 37.1875V38.75C24.8125 38.9572 24.8948 39.1559 25.0413 39.3024C25.1878 39.4489 25.3866 39.5312 25.5938 39.5312H41.2188C41.426 39.5312 41.6247 39.4489 41.7712 39.3024C41.9177 39.1559 42 38.9572 42 38.75V37.1875C42 36.9803 41.9177 36.7816 41.7712 36.6351C41.6247 36.4886 41.426 36.4062 41.2188 36.4062ZM41.2188 20.7812H25.5938C25.3866 20.7812 25.1878 20.8636 25.0413 21.0101C24.8948 21.1566 24.8125 21.3553 24.8125 21.5625V23.125C24.8125 23.3322 24.8948 23.5309 25.0413 23.6774C25.1878 23.8239 25.3866 23.9062 25.5938 23.9062H41.2188C41.426 23.9062 41.6247 23.8239 41.7712 23.6774C41.9177 23.5309 42 23.3322 42 23.125V21.5625C42 21.3553 41.9177 21.1566 41.7712 21.0101C41.6247 20.8636 41.426 20.7812 41.2188 20.7812ZM41.2188 28.5938H25.5938C25.3866 28.5938 25.1878 28.6761 25.0413 28.8226C24.8948 28.9691 24.8125 29.1678 24.8125 29.375V30.9375C24.8125 31.1447 24.8948 31.3434 25.0413 31.4899C25.1878 31.6364 25.3866 31.7188 25.5938 31.7188H41.2188C41.426 31.7188 41.6247 31.6364 41.7712 31.4899C41.9177 31.3434 42 31.1447 42 30.9375V29.375C42 29.1678 41.9177 28.9691 41.7712 28.8226C41.6247 28.6761 41.426 28.5938 41.2188 28.5938Z" />
                        }

                    />



                </button>
                <button
                    aria-label="delete"
                    className={`header__btn ${resultsArray.length >= 1 ? "header__btn--active" : "header__btn--disabled"}`}
                    disabled={resultsArray.length >= 1 ? false : true}
                    onClick={openModal}
                >
                    <ToolIcon
                        iconClass={resultsArray.length >= 1 ? "tool-icon--shadow-warning" : "tool-icon--disabled"}
                        circle={<circle cx="30" cy="30" r="30" fill="white" />}
                        path={<path d="M40.2143 20.5625H35.3446C34.7171 20.5625 34.1429 20.2094 33.8598 19.6494V19.6494C33.762 19.4542 33.6114 19.29 33.4249 19.1753C33.2384 19.0606 33.0233 18.9999 32.804 19H27.1911C26.9722 18.9992 26.7576 19.0596 26.5717 19.1745C26.3859 19.2894 26.2363 19.454 26.1402 19.6494V19.6494C25.8571 20.2094 25.2829 20.5625 24.6554 20.5625H19.7857C19.5773 20.5625 19.3775 20.6448 19.2301 20.7913C19.0828 20.9378 19 21.1366 19 21.3438V22.9063C19 23.1135 19.0828 23.3122 19.2301 23.4587C19.3775 23.6052 19.5773 23.6875 19.7857 23.6875H40.2143C40.4227 23.6875 40.6225 23.6052 40.7699 23.4587C40.9172 23.3122 41 23.1135 41 22.9063V21.3438C41 21.1366 40.9172 20.9378 40.7699 20.7913C40.6225 20.6448 40.4227 20.5625 40.2143 20.5625ZM21.6125 41.8027C21.65 42.3978 21.9141 42.9562 22.3511 43.3644C22.7881 43.7726 23.3651 43.9999 23.9647 44H36.0353C36.6349 43.9999 37.2119 43.7726 37.6489 43.3644C38.0859 42.9562 38.35 42.3978 38.3875 41.8027L39.4286 25.25H20.5714L21.6125 41.8027Z" />} />



                </button>

            </div>

        </header >
    )
}

export default Header;