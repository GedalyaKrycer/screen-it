import React from 'react';
import './style.css';
import { useSeenItContext } from '../../utils/SeenItContext';

const Header = () => {

    // Imports states from context
    const {
        resultsArray,
        setResultsArray
    } = useSeenItContext();


    // className={resultsArray.length >= 1 ? "header__btn--active" : "header__btn--disabled"}
    return (
        <header>
            <h1>Screen it</h1>
            <button
                className={`header__btn ${resultsArray.length >= 1 ? "header__btn--active" : "header__btn--disabled"}`}
                disabled={resultsArray.length >= 1 ? false : true}
                onClick={() => setResultsArray([])}
            >Clear All</button>
        </header>
    )
}

export default Header;