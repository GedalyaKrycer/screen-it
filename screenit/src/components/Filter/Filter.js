import React from 'react';
import './style.css';

const Filter = () => {
    return (
        <section className="filter">
            <form onSubmit={"handleSubmit"}>
                {/* Name of movie */}
                <div className="filter__input-group">
                    <label className="filter__label">
                        Name
                        <input
                            className="filter__input"
                            type="text"
                            placeholder="Name of the movie"
                        />
                    </label>
                </div>

                {/* Category */}
                <div className="filter__input-group">
                    <label className="filter__label">Category
                        <select value={"this.state.value"} onChange={"handleChange"}>
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
                    </label>
                </div>

                {/* Category */}
                <div className="filter__input-group">
                    <label className="filter__label">Rating
                    More to come
                    </label>
                </div>

                <input type="submit" value="submit" />
            </form>
        </section>
    )
}

export default Filter;