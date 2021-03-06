import React, { useState, useEffect } from 'react';
import './style.css';
import RatingStars from '../../RatingStars/RatingStars';
import posterUndefined from '../../../img/poster-undefined.jpg';
import FormValidation from '../FormValidation/FormValidation';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../../store/actions/index';


const Form = () => {


    // Redux State Hooks
    const modalOpen = useSelector((state) => state.modal.modalOpen);
    const modalIdCheck = useSelector((state) => state.modal.modalIdCheck);
    const rating = useSelector((state) => state.form.rating);
    const resultsArray = useSelector((state) => state.form.resultsArray);
    const resultEditId = useSelector((state) => state.form.resultEditId);
    const currentResult = useSelector((state) => state.form.currentResult);

    // Redux Dispatch Hooks
    const setModalOpen = useDispatch();
    const setModalIdCheck = useDispatch();
    const setRating = useDispatch();
    const setResultsArray = useDispatch();
    const setResultEditId = useDispatch();



    // State for category field Error
    const [ratingError, setRatingError] = useState(false);

    // State for name field 
    const [movieName, setMoveName] = useState('');

    // State for name field Error
    const [movieNameError, setMoveNameError] = useState(false);



    useEffect(() => {

        // Every time use effect runs clear values
        setMoveName('');
        setRating(action.setRatingAmount(null));


        // Update form values with the current result to be edited
        if (modalIdCheck === "editForm") { 
            setMoveName(currentResult.movieName) 
            setRating(action.setRatingAmount(currentResult.rating)) 
        }
        
    }, [modalOpen, currentResult, setRating, modalIdCheck])



    // Form Submit 
    const handleSubmit = (event, editId) => {
        event.preventDefault();

        // Validates if data was inputted
        if (!movieName) {
            return setMoveNameError(true);
        } else if (!rating) {
            return setRatingError(true);
        }

        // Reset error messages to turn off
        setMoveNameError(false);
        setRatingError(false);

        // OMDB Image API
        const omdbUrl = `https://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_OMDB_KEY}`;


        // API Call
        axios.get(omdbUrl)
            .then((res) => {

                // console.log(res.data)

                // Stores API Data
                let imdbMovieID = JSON.stringify(res.data.imdbID);
                let rawOmdbGenre = JSON.stringify(res.data.Genre);
                let omdbPoster = JSON.stringify(res.data.Poster);

                // If valid, create array from string, splits on the comma and removes any quotes
                let omdbGenre = rawOmdbGenre ? rawOmdbGenre.replace(/['"]+/g, '').split(",").slice(0, 1) : "Genre Not Found";


                // Sets a fall backs if the API is not valid
                if (imdbMovieID === undefined) {

                    // This is the title id to "No Movie"
                    imdbMovieID = "tt1333032";

                };

                // Updates if the poster is not found
                let posterError = false;

                if (omdbPoster === undefined || omdbPoster === '"N/A"') {

                    // Set poster to default image
                    omdbPoster = posterUndefined;

                    posterError = true;

                };

                // EDIT VS POSTING
                // If an editId is passed in then that result object gets replaced 
                // Else a new object is added
                if (editId) {

                    // Finds the index of the item in the results array that has the same ID as the submitted one
                    const resultIndex = resultsArray.findIndex(r => {
                        return r.id === editId;
                    })

                    // Copy of results array so it can be altered
                    const resultArrayCopy = [...resultsArray];

                    // Updates the index matching result object in the array 
                    resultArrayCopy[resultIndex] = {
                        movieName,
                        omdbGenre,
                        omdbPoster,
                        posterError,
                        rating,
                        imdbMovieID,
                        id: Math.random() * imdbMovieID.length
                    }

                    // Updates the array with the new info
                    setResultsArray(action.storeAllResults(resultArrayCopy));

                    // Closes modal 
                    setModalOpen(action.toggleModal(false));

                    // Resets modal id
                    setModalIdCheck(action.modalIdChecker(null));

                    // Resets the edit id to nothing
                    setResultEditId(action.storeResultEditId(null));

                } else {

                    setResultsArray(action.storeAllResults(
                        [{
                            movieName,
                            omdbGenre,
                            omdbPoster,
                            posterError,
                            rating,
                            imdbMovieID,
                            id: Math.random() * imdbMovieID.length
                        }, ...resultsArray]
                    ))
                }


            })
            .catch((err) => {
                console.log(`OMDB Error: ${err}`);
            })

        // Resets all input values
        setMoveName('');
        setRating(action.setRatingAmount(''));
    };



    return (
        <>
            {/* Form submits with an event and also an optional id of an item being edited */}
            <form onSubmit={(e) => handleSubmit(e, resultEditId)}>

                {/* Name of movie */}
                <label className="form__label form__input-group">
                    Name
                    
                    <input
                        type="text"
                        placeholder="Movie name"
                        className="form__input"
                        value={movieName}
                        onChange={(e) => setMoveName(e.target.value)}
                    />
                </label>


                {/* Rating */}
                <div className="form__input-group--rating">
                    <p className="form__label">Rating</p>
                    <RatingStars
                        disableClick={false}
                    />

                </div>

                {/* Validate Messages */}
                <FormValidation
                    nameErrorState={movieNameError}
                    ratingErrorState={ratingError}
                />

                {/* Submit Button */}
                <input
                    className="form__submit-btn"
                    type="submit"
                    value={resultEditId ? "Update Movie" : "Add Movie"}
                />
            </form>
        </>
    )
}


export default Form;