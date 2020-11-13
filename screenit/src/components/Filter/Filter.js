import React, { useState } from 'react';
import './style.css';



const Filter = () => {



    return (
        <section className="filter">
            <form onSubmit={"handleSubmit"}>

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
                    />
                </div>

                {/* Category */}
                <div className="filter__input-group">
                    <label
                        className="filter__label"
                    >Category</label>
                    <select
                        value={"this.state.value"}
                        onChange={"handleChange"}
                        className="filter__select">
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
                    <div className="rating">
                        {[...Array(5)].map((star, index) => {
                            return (
                                <>
                                    <input type="radio" name="rating" className="rating__input-radio" />

                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.1745 2.07813C11.8805 0.500952 14.1195 0.500953 14.8255 2.07813L16.8673 6.63967C17.1624 7.29881 17.7898 7.7477 18.5089 7.81408L23.5042 8.2752C25.2648 8.43773 25.964 10.6373 24.6204 11.7866L20.9508 14.9255C20.3849 15.4095 20.1348 16.1678 20.3016 16.8934L21.3809 21.5874C21.7716 23.2866 19.9523 24.6373 18.4388 23.7716L13.9929 21.2289C13.3777 20.877 12.6223 20.877 12.0071 21.2289L7.56121 23.7716C6.04766 24.6373 4.22844 23.2866 4.61913 21.5874L5.69835 16.8934C5.8652 16.1678 5.61509 15.4095 5.04923 14.9255L1.37961 11.7866C0.0359914 10.6373 0.735185 8.43773 2.4958 8.2752L7.49107 7.81408C8.21017 7.7477 8.83764 7.29881 9.13269 6.63967L11.1745 2.07813Z" fill="#CCCCCC" />
                                    </svg>
                                </>
                            );
                        })}
                    </div>




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