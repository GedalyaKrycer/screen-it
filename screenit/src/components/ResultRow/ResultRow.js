import React, { useState } from 'react';
import './style.css';
import RatingStars from '../RatingStars/RatingStars';
import { useSeenItContext } from '../../utils/SeenItContext';
import { FaPlus } from "react-icons/fa";
import ResultTools from "../ResultTools/ResultTools";


const ResultRow = () => {
    // Imports states from context
    const {
        resultsArray,
        setResultsArray,
        setResultEditId,
        setModalState,
        setCurrentResult
    } = useSeenItContext();


    // State that controls if the result row should slide over or not
    const [slideClassControl, setSlideClassControl] = useState(false);

    // State that stores the index of the element clicked
    const [slideClassIndex, setSlideClassIndex] = useState(null);


    return (
        <>
            <div className="results__overflow">
                {
                    resultsArray.map((result, index) => {


                        // START Avatar —————————————————————————————————|

                        // Take the movie's name and creates a new array, splitting on the spaces and special characters
                        let avatarArray = result.movieName.trim().split(/[^A-Z0-9]/ig).slice(0, 3);

                        // Stores the final 1-3 characters from the array
                        const avatarCharacters = [];

                        // Loops through array to grab the first character of each word in the array
                        avatarArray.forEach(e => {
                            avatarCharacters.push(e.charAt(0));
                        });

                        // Variable that holds a "lg" or "sm" value to decide the right class
                        let avatarLength = "";

                        // Decides which size based on avatar length 
                        if (avatarCharacters.length > 2) {
                            avatarLength = "sm";
                        } else {
                            avatarLength = "lg";
                        }

                        // END Avatar —————————————————————————————————|



                        // START Result Slider —————————————————————————————————|
                        // Captures a click 
                        const slideItemHandle = (index) => {

                            // Sets the index to the element
                            setSlideClassIndex(index)

                            // Sets the state that controls the slide class to true/false
                            setSlideClassControl(!slideClassControl)
                        }
                        // END Result Slider —————————————————————————————————|



                        // START Tool Buttons —————————————————————————————————| 

                        // Deletes movie entry
                        const deleteHandler = (index) => {

                            // Creates an mutable copy
                            const resultsArrayCopy = [...resultsArray];

                            // Grabs the indexed item in the array and removes it
                            resultsArrayCopy.splice(index, 1);

                            // Sets the new array to state
                            setResultsArray(resultsArrayCopy);

                            setSlideClassControl(false);

                        }

                        // Edit movie entry
                        const editHandler = () => {

                            // Passes this results id to form
                            setResultEditId(result.id);

                            // Passes this result to form value
                            setCurrentResult({
                                movieName: result.movieName,
                                category: result.category,
                                rating: result.rating
                            });

                            // Opens Modal
                            setModalState(true);

                            // Closes the result row
                            setSlideClassControl(!slideClassControl);

                        }

                        // END Tool Buttons —————————————————————————————————| 

                        return (
                            <div className="result-row__parent"
                                key={result.id}>

                                {/* Row Element */}
                                <div
                                    className={`result-row__movie-info ${slideClassIndex === index && slideClassControl ? 'result-row--slide' : null}`}
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

                                        <RatingStars
                                            disableClick={true}
                                            stateValues={result.rating}
                                        />
                                    </div>

                                    <div className="result-row__plus">
                                        <FaPlus />
                                    </div>

                                </div>

                                {/* Tool sub layer */}
                                <div className="result-row__tool-wrapper">

                                    <ResultTools
                                        deleteHandler={() => deleteHandler(index)}
                                        editHandler={editHandler}
                                        imdbMovieID={result.imdbMovieID.replace(/['"]+/g, '')}

                                    />

                                </div>
                            </div>)
                    })
                }
            </div>
        </>
    )
}

export default ResultRow;