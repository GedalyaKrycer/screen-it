import React, { useState } from 'react';
import './style.css';
import RatingStars from '../RatingStars/RatingStars'
import { useSeenItContext } from '../../utils/SeenItContext';


const Filter = () => {

    // Imports states from context
    const { rating, resultsArray, setResultsArray } = useSeenItContext();

    // State for category field Error
    const [ratingError, setRatingError] = useState(false);

    // State for name field 
    const [movieName, setMoveName] = useState();

    // State for name field Error
    const [movieNameError, setMoveNameError] = useState(false);

    // State for category field 
    const [category, setCategory] = useState();

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

        setMoveNameError(false);
        setCategoryError(false);

        setResultsArray((resultsArray) => [...resultsArray, {
            movieName,
            category,
            rating
        }])
    }


    // Validation message that gets added to the dom if errors return as true
    let validateMessages = null;

    if (movieNameError || categoryError || ratingError) {
        validateMessages = (<p className="filter__validate-errors">Please fill-out all fields</p>);
    } else {
        validateMessages = null;
    }

    return (
        <section className="filter">
            <form onSubmit={handleSubmit}>

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
                        onChange={(e) => setMoveName(e.target.value)}
                    />
                </div>

                {/* Category */}
                <div className="filter__input-group">
                    <label
                        className="filter__label"
                    >Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.currentTarget.value)}
                        className={`filter__select ${!category ? "filter__select--active" : null}`}>
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
                        disableStar={false}
                    />

                </div>

                {/* Validate Messages */}
                {validateMessages}

                {/* Submit Button */}
                <input
                    className="filter__submit-btn"
                    type="submit"
                    value="Add Movie"
                />
            </form>

            {resultsArray.map((result, index) => {
                return <div key={result.movieName + index}>
                    <h2>{result.movieName}</h2>
                    <p>{result.category}</p>
                    <h3>{result.rating}</h3>

                </div>
            })}

        </section>
    )
}

export default Filter;