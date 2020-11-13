import React from 'react';
import './style.css';
import RatingStarsDisplay from '../RatingStarsDisplay/RatingStarsDisplay';
import { useSeenItContext } from '../../utils/SeenItContext';

const ResultRow = () => {
    // Imports states from context
    const { resultsArray } = useSeenItContext();

    return (
        <>
            {
                resultsArray.map((result, index) => {
                    return <div
                        key={result.movieName + index}
                        className="result">
                        <span className="result__avatar">Dbh</span>

                        <div>
                            <h2 className="result__movie-name">{result.movieName.trim('')}</h2>
                            <h3 className="result__category">{result.category}</h3>
                        </div>
                        <RatingStarsDisplay
                            disableStar={true}
                            stateValues={result.rating} />
                    </div>
                })
            }


            {/* <h3>{result.rating}</h3> */}
        </>
    )
}

export default ResultRow;