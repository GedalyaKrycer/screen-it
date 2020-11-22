import React, { useState } from 'react';
import './style.css';
import RatingStars from '../RatingStars/RatingStars';
import FilterValidation from '../FilterValidation/FilterValidation';
import { useSeenItContext } from '../../utils/SeenItContext';
import axios from 'axios';


const Filter = () => {

    // Imports states from context
    const {
        rating,
        setRating,
        setResultsArray,
        resultsArray,
        resultEditId,
        setResultEditId,
        setModalState
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

        // Reset errors to turn off
        setMoveNameError(false);
        setCategoryError(false);

        // OMDB Image API
        const omdbUrl = `https://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_OMDB_KEY}`;


        // API Call
        axios.get(omdbUrl)
            .then((res) => {

                // Stores IMDB ID
                let imdbMovieID = JSON.stringify(res.data.imdbID);

                // Sets a fall back if the input is not valid
                if (imdbMovieID === undefined) {

                    // This is the title id to "No Movie"
                    imdbMovieID = "tt1333032";
                }


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
        <section className="filter">

            {/* Form submits with an event and also an optional id of an item being edited */}
            <form onSubmit={(e) => handleSubmit(e, resultEditId)} className="filter__form">

                {/* Name of movie */}
                <div className="filter__input-group">
                    <label
                        htmlFor="nameInput"
                        className="filter__label">Name</label>

                    <input
                        id="nameInput"
                        type="text"
                        placeholder="Name of the movie"
                        className="filter__input"
                        value={movieName}
                        onChange={(e) => setMoveName(e.target.value)}
                    />
                </div>

                {/* Category */}
                <div className="filter__input-group">
                    <label
                        className="filter__label"
                        htmlFor="categorySelect"
                    >Category</label>
                    <select
                        value={category}
                        id="categorySelect"
                        onChange={(e) => setCategory(e.currentTarget.value)}
                        className={`filter__select 
                        ${!category ? "filter__select--active" : null}`}>
                        <option value="default">Select a category</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Other">Other</option>
                    </select>

                </div>

                {/* Rating */}
                <div className="filter__input-group--rating">
                    <p className="filter__label">Rating</p>
                    <RatingStars
                        disableClick={false}
                    />

                </div>

                {/* Validate Messages */}
                <FilterValidation
                    nameErrorState={movieNameError}
                    categoryErrorState={categoryError}
                    ratingErrorState={ratingError}
                />

                {/* Submit Button */}
                <input
                    className="filter__submit-btn"
                    type="submit"
                    value={resultEditId ? "Update Movie" : "Add Movie"}
                />
            </form>

        </section>
    )
}

export default Filter;