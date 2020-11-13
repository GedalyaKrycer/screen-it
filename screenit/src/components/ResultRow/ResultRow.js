import React from 'react';
import './style.css';
import RatingStars from '../RatingStars/RatingStars';
import { useSeenItContext } from '../../utils/SeenItContext';

const ResultRow = () => {
    // Imports states from context
    const { resultsArray } = useSeenItContext();

    return (
        <>
            {/* {
                resultsArray.map((result, index) => {
                    return <div
                        key={result.movieName + index}
                        className="result">
                        <span>DBH</span>
                        <h2>{result.movieName}</h2>
                        <p>{result.category}</p>
                        <h3>{result.rating}</h3>

                    </div>
                })
            } */}


            <div
                // key={result.movieName + index}
                className="result">
                <span>DBH</span>
                <div>
                    <h2>Death Becomes Her</h2>
                    <h3>Comedy</h3>
                </div>

                <RatingStars disableStar={true} />


            </div>
        </>
    )
}

export default ResultRow;