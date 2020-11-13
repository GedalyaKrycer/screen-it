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

                        // Sets the index to the element
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

                            {/* Row Element */}
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
                            <div className="result-row__tool-wrapper">
                                <div className="result-row__tools">
                                    <svg
                                        onClick={() => deleteHandler(index)}
                                        viewBox="0 0 448 512" className="result-row__tools-icon" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M432 32.0001H312L302.6 13.3001C300.609 9.30219 297.541 5.93928 293.743 3.58964C289.945 1.24 285.566 -0.00315004 281.1 5.32569e-05H166.8C162.344 -0.0170773 157.973 1.22143 154.188 3.57369C150.403 5.92595 147.358 9.2968 145.4 13.3001L136 32.0001H16C11.7565 32.0001 7.68687 33.6858 4.68629 36.6863C1.68571 39.6869 0 43.7566 0 48.0001L0 80.0001C0 84.2435 1.68571 88.3132 4.68629 91.3138C7.68687 94.3143 11.7565 96.0001 16 96.0001H432C436.243 96.0001 440.313 94.3143 443.314 91.3138C446.314 88.3132 448 84.2435 448 80.0001V48.0001C448 43.7566 446.314 39.6869 443.314 36.6863C440.313 33.6858 436.243 32.0001 432 32.0001V32.0001ZM53.2 467C53.9631 479.186 59.3416 490.623 68.2406 498.984C77.1395 507.344 88.89 511.998 101.1 512H346.9C359.11 511.998 370.86 507.344 379.759 498.984C388.658 490.623 394.037 479.186 394.8 467L416 128H32L53.2 467Z" fill="red" />
                                    </svg>

                                    <svg
                                        viewBox="0 0 28 28"
                                        className="result-row__tools-icon"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.993 8.31121C18.1746 3.42837 16.2442 0 13.9978 0C11.7514 0 9.82105 3.42837 9.00263 8.31121H18.993ZM8.57931 13.5604C8.57931 14.7743 8.64704 15.9389 8.76557 17.0598H19.2244C19.343 15.9389 19.4107 14.7743 19.4107 13.5604C19.4107 12.3465 19.343 11.1819 19.2244 10.0609H8.76557C8.64704 11.1819 8.57931 12.3465 8.57931 13.5604ZM26.9063 8.31121C25.292 4.5985 22.024 1.72786 17.9883 0.568662C19.3655 2.41681 20.3138 5.19997 20.8105 8.31121H26.9063ZM10.0017 0.568662C5.97165 1.72786 2.69797 4.5985 1.08935 8.31121H7.18517C7.67623 5.19997 8.62446 2.41681 10.0017 0.568662V0.568662ZM27.5102 10.0609H21.0362C21.1548 11.2092 21.2225 12.3848 21.2225 13.5604C21.2225 14.736 21.1548 15.9116 21.0362 17.0598H27.5046C27.815 15.9389 27.99 14.7743 27.99 13.5604C27.99 12.3465 27.815 11.1819 27.5102 10.0609ZM6.77314 13.5604C6.77314 12.3848 6.84087 11.2092 6.9594 10.0609H0.485408C0.180617 11.1819 0 12.3465 0 13.5604C0 14.7743 0.180617 15.9389 0.485408 17.0598H6.95376C6.84087 15.9116 6.77314 14.736 6.77314 13.5604V13.5604ZM9.00263 18.8096C9.82105 23.6924 11.7514 27.1208 13.9978 27.1208C16.2442 27.1208 18.1746 23.6924 18.993 18.8096H9.00263ZM17.994 26.5521C22.024 25.3929 25.2977 22.5223 26.9119 18.8096H20.8161C20.3194 21.9208 19.3712 24.704 17.994 26.5521ZM1.08935 18.8096C2.70361 22.5223 5.97165 25.3929 10.0073 26.5521C8.63011 24.704 7.68187 21.9208 7.18517 18.8096H1.08935V18.8096Z" />
                                    </svg>
                                </div>


                            </div>
                        </div>)
                })
            }

        </>
    )
}

export default ResultRow;