import React from 'react';
import './style.css';
import { useSeenItContext } from '../../utils/SeenItContext';

const ResultRow = () => {
    // Imports states from context
    const { resultsArray } = useSeenItContext();

    return (
        <>
            {
                resultsArray.map((result, index) => {
                    return <div key={result.movieName + index}>
                        <h2>{result.movieName}</h2>
                        <p>{result.category}</p>
                        <h3>{result.rating}</h3>

                    </div>
                })
            }
        </>
    )
}

export default ResultRow;