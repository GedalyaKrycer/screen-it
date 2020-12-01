import React, { useState } from 'react';
import './style.css';
import RatingStars from '../RatingStars/RatingStars';
import { useSeenItContext } from '../../utils/SeenItContext';
import { FaPlus } from "react-icons/fa";


const ResultRow = () => {
    // Imports states from context
    const {
        resultsArray,
        setResultsArray,
        setResultEditId,
        setModalState,
        setCurrentResult
    } = useSeenItContext();


    // State that controls if the result row should slide over or not
    const [slideClassControl, setSlideClassControl] = useState(false);

    // State that stores the index of the element clicked
    const [slideClassIndex, setSlideClassIndex] = useState(null);


    // const localData = localStorage.getItem('results');

    // localData ? setResultsArray(JSON.parse(localData)) : setResultsArray([]);


    return (
        <>
            <div className="results__overflow">
                {
                    resultsArray.map((result, index) => {


                        // START Avatar —————————————————————————————————|

                        // Take the movie's name and creates a new array, splitting on the spaces and special characters, but stops after 3 items.
                        // const avatarArray = result.movieName.split(/[^A-Z0-9]/ig).slice(0, 3)
                        let avatarArray = result.movieName.trim().split(/[^A-Z0-9]/ig);
                        console.log(avatarArray);

                        if (avatarArray.length > 3 && avatarArray[4] !== '') {
                            avatarArray = avatarArray.slice(0, 5);
                        } else {
                            avatarArray = avatarArray.slice(0, 3);
                        }


                        // Stores the final 1-3 characters from the array
                        const avatarCharacters = [];

                        // Loops through array to grab the first character of each word in the array
                        avatarArray.forEach(e => {
                            avatarCharacters.push(e.charAt(0));
                        });

                        // Variable that holds a "lg" or "sm" value to decide the right class
                        let avatarLength = "";

                        // Decides which size based on avatar length 
                        if (avatarCharacters.length > 2) {
                            avatarLength = "sm";
                        } else {
                            avatarLength = "lg";
                        }

                        // END Avatar —————————————————————————————————|



                        // START Result Slider —————————————————————————————————|
                        // Captures a click 
                        const slideItemHandle = (index) => {

                            // Sets the index to the element
                            setSlideClassIndex(index)

                            // Sets the state that controls the slide class to true/false
                            setSlideClassControl(!slideClassControl)
                        }
                        // END Result Slider —————————————————————————————————|



                        // START Tool Buttons —————————————————————————————————| 

                        // Deletes movie entry
                        const deleteHandler = (index) => {

                            // Creates an mutable copy
                            const resultsArrayCopy = [...resultsArray];

                            // Grabs the indexed item in the array and removes it
                            resultsArrayCopy.splice(index, 1);

                            // Sets the new array to state
                            setResultsArray(resultsArrayCopy);

                            setSlideClassControl(false);

                        }

                        // Edit movie entry
                        const editHandler = () => {

                            // Passes this results id to form
                            setResultEditId(result.id);

                            // Passes this result to form value
                            setCurrentResult({
                                movieName: result.movieName,
                                category: result.category,
                                rating: result.rating
                            });

                            // Opens Modal
                            setModalState(true);

                            // Closes the result row
                            setSlideClassControl(!slideClassControl);

                        }

                        // END Tool Buttons —————————————————————————————————| 

                        return (
                            <div className="result-row__parent"
                                key={result.id}>

                                {/* Row Element */}
                                <div
                                    className={`result-row__movie-info ${slideClassIndex === index && slideClassControl ? 'result-row--slide' : null}`}
                                    onClick={() => slideItemHandle(index)} >

                                    {/* Avatar */}
                                    < span className={`result-row__avatar ${avatarLength === 'sm' ? 'result-row__avatar--sm' : 'result-row__avatar--lg'}`}>{avatarCharacters}</span>

                                    {/* Name and Category */}
                                    <div className="result-row__txt">
                                        <h2 className="result-row__movie-name">{result.movieName.trim('')}</h2>
                                        <h3 className="result-row__category">{result.category}</h3>
                                    </div>

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
                                    <div className="result-row__tools">

                                        {/* Delete Button */}
                                        <svg
                                            onClick={() => deleteHandler(index)}
                                            className="result-row__tools-icon"
                                            viewBox="0 0 60 60"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="30" cy="30" r="30" fill="white" />
                                            <path d="M40.2143 20.5625H35.3446C34.7171 20.5625 34.1429 20.2094 33.8598 19.6494V19.6494C33.762 19.4542 33.6114 19.29 33.4249 19.1753C33.2384 19.0606 33.0233 18.9999 32.804 19H27.1911C26.9722 18.9992 26.7576 19.0596 26.5717 19.1745C26.3859 19.2894 26.2363 19.454 26.1402 19.6494V19.6494C25.8571 20.2094 25.2829 20.5625 24.6554 20.5625H19.7857C19.5773 20.5625 19.3775 20.6448 19.2301 20.7913C19.0828 20.9378 19 21.1366 19 21.3438V22.9063C19 23.1135 19.0828 23.3122 19.2301 23.4587C19.3775 23.6052 19.5773 23.6875 19.7857 23.6875H40.2143C40.4227 23.6875 40.6225 23.6052 40.7699 23.4587C40.9172 23.3122 41 23.1135 41 22.9063V21.3438C41 21.1366 40.9172 20.9378 40.7699 20.7913C40.6225 20.6448 40.4227 20.5625 40.2143 20.5625ZM21.6125 41.8027C21.65 42.3978 21.9141 42.9562 22.3511 43.3644C22.7881 43.7726 23.3651 43.9999 23.9647 44H36.0353C36.6349 43.9999 37.2119 43.7726 37.6489 43.3644C38.0859 42.9562 38.35 42.3978 38.3875 41.8027L39.4286 25.25H20.5714L21.6125 41.8027Z" fill="#FA2929" />
                                        </svg>



                                        {/* Edit Button */}
                                        <svg
                                            onClick={editHandler}
                                            className="result-row__tools-icon"
                                            viewBox="0 0 60 60"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="30" cy="30" r="30" fill="white" />
                                            <path d="M31.4929 23.0061L36.9936 28.5071L25.049 40.4522L20.1447 40.9936C19.4881 41.0662 18.9334 40.511 19.0065 39.8545L19.5522 34.9465L31.4929 23.0061V23.0061ZM40.3958 22.1872L37.813 19.6043C37.0073 18.7986 35.7007 18.7986 34.8951 19.6043L32.4652 22.0342L37.9659 27.5351L40.3958 25.1052C41.2014 24.2991 41.2014 22.9928 40.3958 22.1872V22.1872Z" fill="#61A0FF" />
                                        </svg>


                                        {/* Opens Movie Link */}
                                        <a
                                            target="_blank"
                                            rel="noreferrer noopener"

                                            // Removes whitespace and quotes from the IMDB string
                                            href={`https://www.imdb.com/title/${result.imdbMovieID.trim("").replace(/['"]+/g, '')}`}>
                                            <svg
                                                className="result-row__tools-icon"
                                                viewBox="0 0 60 60"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="30" fill="white" />
                                                <path d="M38.25 33H36.75C36.5511 33 36.3603 33.079 36.2197 33.2197C36.079 33.3603 36 33.5511 36 33.75V39H21V24H27.75C27.9489 24 28.1397 23.921 28.2803 23.7803C28.421 23.6397 28.5 23.4489 28.5 23.25V21.75C28.5 21.5511 28.421 21.3603 28.2803 21.2197C28.1397 21.079 27.9489 21 27.75 21H20.25C19.6533 21 19.081 21.2371 18.659 21.659C18.2371 22.081 18 22.6533 18 23.25V39.75C18 40.3467 18.2371 40.919 18.659 41.341C19.081 41.7629 19.6533 42 20.25 42H36.75C37.3467 42 37.919 41.7629 38.341 41.341C38.7629 40.919 39 40.3467 39 39.75V33.75C39 33.5511 38.921 33.3603 38.7803 33.2197C38.6397 33.079 38.4489 33 38.25 33ZM40.875 18H34.875C33.8733 18 33.3727 19.2145 34.0781 19.9219L35.753 21.5967L24.3281 33.0173C24.2232 33.1219 24.14 33.2461 24.0832 33.3828C24.0265 33.5195 23.9972 33.6662 23.9972 33.8142C23.9972 33.9623 24.0265 34.1089 24.0832 34.2456C24.14 34.3824 24.2232 34.5066 24.3281 34.6111L25.3908 35.6719C25.4953 35.7768 25.6195 35.86 25.7562 35.9168C25.893 35.9735 26.0396 36.0028 26.1877 36.0028C26.3357 36.0028 26.4823 35.9735 26.6191 35.9168C26.7558 35.86 26.88 35.7768 26.9845 35.6719L38.4037 24.2494L40.0781 25.9219C40.7812 26.625 42 26.1328 42 25.125V19.125C42 18.8266 41.8815 18.5405 41.6705 18.3295C41.4595 18.1185 41.1734 18 40.875 18V18Z" fill="#61A0FF" />
                                            </svg>

                                        </a>
                                    </div>


                                </div>
                            </div>)
                    })
                }
            </div>
        </>
    )
}

export default ResultRow;