import React, { useState } from 'react';
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

                    // Take the movie's name and creates a new array, splitting on the spaces, but stops after 3 items.
                    const avatarArray = result.movieName.split(" ").slice(0, 3)

                    const avatarCharacters = [];

                    avatarArray.forEach(e => {
                        avatarCharacters.push(e.charAt(0));
                    })



                    console.log(avatarCharacters);

                    return <div
                        key={result.movieName + index}
                        className="result">
                        <span className="result__avatar">{avatarCharacters}</span>

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