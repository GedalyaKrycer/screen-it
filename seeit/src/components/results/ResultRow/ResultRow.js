import React from 'react';
import './style.css';
import RatingStars from '../../ui/RatingStars/RatingStars';
import { FaPlus } from "react-icons/fa";
import ResultTools from "../ResultTools/ResultTools";
import Avatar from "../../ui/Avatar/Avatar";
import NameGenre from "../../ui/NameGenre/NameGenre";
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../../store/actions/index';


const ResultRow = () => {

    // Redux State Hooks
    const resultsArray = useSelector((state) => state.form.resultsArray);
    const rowClassControl = useSelector((state) => state.results.rowClassControl);
    const rowIndex = useSelector((state) => state.results.rowIndex);
    const resultsViewType = useSelector((state) => state.results.resultsViewType);

    // Redux Dispatch Hooks
    const setRowClassControl = useDispatch();
    const setRowIndex = useDispatch();


    if (resultsViewType === 'list') {
        return (
            <>
                <div className="results__overflow">
                    {
                        resultsArray.map((result, index) => {

                            // Captures a row click 
                            const slideItemHandle = (index) => {

                                // Sets the index to the element
                                setRowIndex(action.setRowIndex(index));

                                // Sets the state that controls the slide class to true/false
                                setRowClassControl(action.setRowControl(!rowClassControl));
                            }


                            return (
                                <div className="result-row__parent"
                                    key={result.id}

                                    // This is used to stagger a CSS Animation
                                    style={{ "--delay": index }}>

                                    {/* Row Element */}
                                    < div
                                        className={`result-row__movie-info ${rowIndex === index && rowClassControl ? 'result-row--slide' : null}`}
                                        onClick={() => slideItemHandle(index)} >

                                        {/* Avatar */}
                                        <Avatar movieName={result.movieName} />

                                        {/* Name and Genre */}
                                        <NameGenre
                                            movieName={result.movieName}
                                            genre={result.omdbGenre}
                                        />

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
                                        <div className="result-row__tool-shift">
                                            <ResultTools
                                                iconClassPrimary={"tool-icon--shadow-primary"}
                                                iconClassWarning={"tool-icon--shadow-warning"}
                                                result={result}
                                                index={index}
                                            />
                                        </div>

                                    </div>
                                </div>)
                        })
                    }
                </div >
            </>
        )
    } else {
        return null;
    }


}

export default ResultRow;