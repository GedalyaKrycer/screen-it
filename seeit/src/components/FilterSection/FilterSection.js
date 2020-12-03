import React from 'react';
import './style.css';
import resultArtDesktop from "../../img/background-desktop.svg";
import { useSeeItContext } from '../../utils/SeeItContext';



const FilterSection = ({ children }) => {

    // Imports states from context
    const { resultsArray } = useSeeItContext();

    if (resultsArray.length === 0) {
        return (
            <section className="filter--full">

                <div className="filter__content">
                    {children}

                </div>

                <img
                    className="filter__img"
                    src={resultArtDesktop}
                    alt="Woman watching movies on a laptop" />

            </section>

        )
    } else {
        return (
            <section className="filter--small">

                <div className="filter__content">
                    {children}

                </div>

            </section>

        );
    }

}

export default FilterSection;