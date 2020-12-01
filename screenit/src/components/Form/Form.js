import React, { useState, useEffect } from 'react';
import './style.css';
import RatingStars from '../RatingStars/RatingStars';
import FormValidation from '../FormValidation/FormValidation';
import { useSeenItContext } from '../../utils/SeenItContext';
import axios from 'axios';


const Form = () => {

    // Imports states from context
    const {
        rating,
        setRating,
        setResultsArray,
        resultsArray,
        resultEditId,
        setResultEditId,
        setModalState,
        modalState,
        currentResult
    } = useSeenItContext();

    // State for category field Error
    const [ratingError, setRatingError] = useState(false);

    // State for name field 
    const [movieName, setMoveName] = useState('');

    // State for name field Error
    const [movieNameError, setMoveNameError] = useState(false);

    // State for category field 
    const [category, setCategory] = useState('');

    // State for category field Error
    const [categoryError, setCategoryError] = useState(false);


    useEffect(() => {
        // Every time use effect runs clear values
        setMoveName('');
        setCategory('');
        setRating(null);


        // Update form values with the current result to be edited
        if (modalState) { setMoveName(currentResult.movieName) }
        if (modalState) { setCategory(currentResult.category) }
        if (modalState) { setRating(currentResult.rating) }
    }, [modalState, currentResult, setRating])



    // Form Submit 
    const handleSubmit = (event, editId) => {
        event.preventDefault();

        // Validates if data was inputted
        if (!movieName) {
            return setMoveNameError(true);
        } else if (!category || category === "default") {
            return setCategoryError(true);
        } else if (!rating) {
            return setRatingError(true);
        }

        // Reset error messages to turn off
        setMoveNameError(false);
        setCategoryError(false);
        setRatingError(false);

        // OMDB Image API
        const omdbUrl = `https://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_OMDB_KEY}`;


        // API Call
        axios.get(omdbUrl)
            .then((res) => {

                // console.log(res.data)

                // Stores IMDB ID
                let imdbMovieID = JSON.stringify(res.data.imdbID);

                // Sets a fall back if the input is not valid
                if (imdbMovieID === undefined) {

                    // This is the title id to "No Movie"
                    imdbMovieID = "tt1333032";
                }

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
                        category,
                        rating,
                        imdbMovieID,
                        id: Math.random() * imdbMovieID.length
                    }

                    // Updates the array with the new info
                    setResultsArray(resultArrayCopy);

                    // Closes modal 
                    setModalState(false);

                    // Resets the edit id to nothing
                    setResultEditId(null);

                } else {

                    // Adds all new input values to an array state
                    setResultsArray((prevState) => [{
                        movieName,
                        category,
                        rating,
                        imdbMovieID,
                        id: Math.random() * imdbMovieID.length
                    }, ...prevState])
                }


            })
            .catch((err) => {
                console.log(`OMDB Error: ${err}`);
            })

        // Resets all input values
        setMoveName('');
        setCategory('');
        setRating('');
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

                {/* Category */}
                <label className="form__label form__input-group">
                    Category
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.currentTarget.value)}
                        className={`form__select 
                        ${!category ? "form__select--active" : null}`}>
                        <option value="default">Select category</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Cartoons/Animations">Cartoons/Animations</option>
                        <option value="Other">Other</option>
                    </select>
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
                    categoryErrorState={categoryError}
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