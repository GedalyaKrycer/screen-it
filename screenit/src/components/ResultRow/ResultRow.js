import React from 'react';
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
        slideClassIndex,
        setSlideClassIndex,
        slideClassControl,
        setSlideClassControl
    } = useSeenItContext();


    return (
        <>
            <div className="results__overflow">
                {
                    resultsArray.map((result, index) => {


                        // Captures a row click 
                        const slideItemHandle = (index) => {

                            // Sets the index to the element
                            setSlideClassIndex(index)

                            // Sets the state that controls the slide class to true/false
                            setSlideClassControl(!slideClassControl)
                        }


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
                                        result={result}
                                        index={index}
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