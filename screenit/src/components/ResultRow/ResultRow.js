import React, { useState } from 'react';
import './style.css';
import RatingStarsDisplay from '../RatingStarsDisplay/RatingStarsDisplay';
import { useSeenItContext } from '../../utils/SeenItContext';

const ResultRow = () => {
    // Imports states from context
    const { resultsArray, setResultsArray } = useSeenItContext();

    // State that controls if the row should slide over or not
    const [slideClassControl, setSlideClassControl] = useState(false);

    // State that stores the index of the element clicked
    const [slideClassIndex, setSlideClassIndex] = useState(false);





    return (
        <>
            {
                resultsArray.map((result, index) => {

                    // Take the movie's name and creates a new array, splitting on the spaces and special characters, but stops after 3 items.
                    const avatarArray = result.movieName.split(/[^A-Z0-9]/ig).slice(0, 3)

                    // Stores the final 1-3 characters from the array
                    const avatarCharacters = [];

                    // Loops through array to grab the first character of each word in the array
                    avatarArray.forEach(e => {
                        avatarCharacters.push(e.charAt(0));
                    });

                    // Variable that holds a "lg" or "sm" value to decide the right class
                    let avatarLength = "";

                    // Decides which size based on avatar length 
                    if (avatarCharacters.length === 3) {
                        avatarLength = "sm";
                    } else {
                        avatarLength = "lg";
                    }

                    // Captures a click 
                    const slideItemHandle = (index) => {
                        console.log(`Item ${index} clicked`);

                        setSlideClassIndex(index)

                        // Sets the state that controls the slide class to true/false
                        slideClassControl ? setSlideClassControl(false) : setSlideClassControl(true);
                    }

                    // Deletes movie entry
                    const deleteHandler = (index) => {

                        // Creates an mutable copy
                        const resultsArrayCopy = [...resultsArray];

                        // Grabs the indexed item in the array and removes it
                        resultsArrayCopy.splice(index, 1);

                        // Sets the new array to state
                        setResultsArray(resultsArrayCopy);

                    }

                    return (
                        <div className="result-row__parent"
                            key={result.movieName + index}>
                            <div
                                className={`result-row ${slideClassIndex === index && slideClassControl ? 'result-row--slide' : null}`}
                                onClick={() => slideItemHandle(index)} >

                                {/* Avatar */}
                                < span className={`result-row__avatar ${avatarLength === 'sm' ? 'result-row__avatar--sm' : 'result-row__avatar--lg'}`}>{avatarCharacters}</span>

                                {/* Name and Category */}
                                <div className="result-row__txt">
                                    <h2 className="result-row__movie-name">{result.movieName.trim('')}</h2>
                                    <h3 className="result-row__category">{result.category}</h3>
                                </div>

                                {/* Star Rating */}
                                <div className="result-row__rating" >

                                    <RatingStarsDisplay
                                        disableStar={true}
                                        stateValues={result.rating}
                                    />
                                </div>

                            </div>

                            {/* Tool sub layer */}
                            <div className="result-row__tools">
                                <svg
                                    onClick={() => deleteHandler(index)}
                                    viewBox="0 0 448 512" className="result-row__tools-icon" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M432 32.0001H312L302.6 13.3001C300.609 9.30219 297.541 5.93928 293.743 3.58964C289.945 1.24 285.566 -0.00315004 281.1 5.32569e-05H166.8C162.344 -0.0170773 157.973 1.22143 154.188 3.57369C150.403 5.92595 147.358 9.2968 145.4 13.3001L136 32.0001H16C11.7565 32.0001 7.68687 33.6858 4.68629 36.6863C1.68571 39.6869 0 43.7566 0 48.0001L0 80.0001C0 84.2435 1.68571 88.3132 4.68629 91.3138C7.68687 94.3143 11.7565 96.0001 16 96.0001H432C436.243 96.0001 440.313 94.3143 443.314 91.3138C446.314 88.3132 448 84.2435 448 80.0001V48.0001C448 43.7566 446.314 39.6869 443.314 36.6863C440.313 33.6858 436.243 32.0001 432 32.0001V32.0001ZM53.2 467C53.9631 479.186 59.3416 490.623 68.2406 498.984C77.1395 507.344 88.89 511.998 101.1 512H346.9C359.11 511.998 370.86 507.344 379.759 498.984C388.658 490.623 394.037 479.186 394.8 467L416 128H32L53.2 467Z" />
                                </svg>


                            </div>
                        </div>)
                })
            }

        </>
    )
}

export default ResultRow;