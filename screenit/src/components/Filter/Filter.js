import React from 'react';
import './style.css';

const Filter = () => {
    return (
        <section className="filter">
            <form onSubmit={"handleSubmit"}>

                {/* Name of movie */}
                <div className="filter__input-group">
                    <label
                        for="nameInput"
                        className="filter__label">Name</label>

                    <input
                        id="nameInput"
                        type="text"
                        placeholder="Name of the movie"
                    />
                </div>

                {/* Category */}
                <div className="filter__input-group">
                    <label
                        className="filter__label"
                    >Category</label>
                    <select
                        value={"this.state.value"}
                        onChange={"handleChange"}>
                        <option value={null}>Select a category</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="romance">Romance</option>
                        <option value="horror">Horror</option>
                        <option value="thriller">Thriller</option>
                        <option value="documentary">Documentary</option>
                        <option value="other">Other</option>
                    </select>

                </div>

                {/* Category */}
                <div className="filter__input-group--rating">
                    <label className="filter__label">Rating</label>
                    Stars
                </div>

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