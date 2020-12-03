import React from 'react';
import './style.css';
import resultArt from "../../img/background.svg";
import { useSeeItContext } from '../../utils/SeeItContext';

const ResultsInitialArt = () => {

    // Imports states from context
    const { resultsArray } = useSeeItContext();

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
