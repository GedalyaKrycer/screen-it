import React from 'react';
import './style.css';
import resultArt from "../../img/background-mobile.svg";
import { useSelector } from "react-redux";

const ResultsInitialArt = () => {

    // Redux State Hooks
    const resultsArray = useSelector((state) => state.form.resultsArray);


    if (resultsArray.length === 0) {
        return (
            <section className="result-art">
                <img
                    className="result-art__img"
                    src={resultArt}
                    alt="Woman watching movies on a laptop" />
            </section>

        )
    } else {
        return null;
    }

}

export default ResultsInitialArt;
