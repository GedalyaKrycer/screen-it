import React from 'react';
import './style.css';
import resultArtDesktop from "../../img/background-desktop.svg";
import { useSelector } from 'react-redux';



const FilterSection = ({ children }) => {

    // React State Hook
    const resultsArray = useSelector((state) => state.form.resultsArray);

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