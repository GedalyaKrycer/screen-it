import React from 'react';
import './style.css';
import RatingStars from '../RatingStars/RatingStars';
import { useSeeItContext } from '../../utils/SeeItContext';
import ResultTools from "../ResultTools/ResultTools";
import NameGenre from "../NameGenre/NameGenre";
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../store/actions/index';


const ResultCards = () => {
    // Imports states from context
    const {
        viewToggle
    } = useSeeItContext();


    // Redux State Hooks
    const resultsArray = useSelector((state) => state.form.resultsArray);
    const cardClassControl = useSelector((state) => state.results.cardClassControl);
    const cardIndex = useSelector((state) => state.results.cardIndex);

    // Redux Dispatch Hooks
    const setCardClassControl = useDispatch();
    const setCardIndex = useDispatch();


    if (viewToggle === 'cards') {

        return (
            <section className="result-cards">
                {
                    resultsArray.map((result, index) => {

                        // Captures a row click 
                        const cardItemHandle = (index) => {

                            // Sets the index to the element
                            setCardIndex(action.setCardIndex(index))

                            // Sets the state that controls the slide class to true/false
                            setCardClassControl(action.setCardControl(!cardClassControl))
                        }


                        return (
                            <div className="result-cards__frame"
                                key={result.id}
                                // This is used to stagger a CSS Animation
                                style={{ "--delay": index }}
                                onClick={() => cardItemHandle(index)}
                            >

                                <img
                                    className="result-cards__poster"
                                    src={result.omdbPoster.replace(/['"]+/g, '')}
                                    alt={result.movieName}
                                />


                                <div
                                    className={`result-cards__info ${cardIndex === index && cardClassControl ? 'result-cards__info--hide' : 'result-cards__info--show'}`}>
                                    <RatingStars
                                        disableClick={true}
                                        stateValues={result.rating}
                                    />

                                    <NameGenre
                                        movieName={result.posterError ? result.movieName : null}
                                        genre={result.omdbGenre}
                                    />
                                </div>
                                <div
                                    className={`result-cards__info ${cardIndex === index && cardClassControl ? 'result-cards__tools--show' : 'result-cards__tools--hide'}`}>
                                    <ResultTools
                                        iconClassPrimary={"tool-icon--stroke-primary"}
                                        iconClassWarning={"tool-icon--stroke-warning "}
                                        result={result}
                                        index={index}
                                    />
                                </div>


                            </div>)
                    })
                }
            </section >
        )

    } else {
        return null;
    }



}

export default ResultCards;