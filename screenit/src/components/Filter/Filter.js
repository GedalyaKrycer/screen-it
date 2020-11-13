import React, { useState } from 'react';
import './style.css';
import RatingStarsInput from '../RatingStarsInput/RatingStarsInput';
import FilterValidation from '../FilterValidation/FilterValidation';
import { useSeenItContext } from '../../utils/SeenItContext';


const Filter = () => {

    // Imports states from context
    const { rating, setRating, setResultsArray } = useSeenItContext();

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
    const handleSubmit = (event) => {
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

        // Adds all new input values to an array state
        setResultsArray((resultsArray) => [...resultsArray, {
            movieName,
            category,
            rating
        }])

        // Resets all input values
        setMoveName('');
        setCategory('');
        setRating('');
    };


    return (
        <section className="filter">
            <form onSubmit={handleSubmit} className="filter__form">

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
                    <RatingStarsInput />

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
                    value="Add Movie"
                />
            </form>

        </section>
    )
}

export default Filter;