import React, { useState } from 'react';
import './style.css';
import RatingStars from '../RatingStars/RatingStars';
import { useSeenItContext } from '../../utils/SeenItContext';
import { FaPlus } from "react-icons/fa";
import ResultTools from "../ResultTools/ResultTools";
import Avatar from "../Avatar/Avatar";


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
                                    <Avatar movieName={result.movieName} />

                                    {/* Name and Category */}
                                    <div className="result-row__txt">
                                        <h2 className="result-row__movie-name">{result.movieName}</h2>
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