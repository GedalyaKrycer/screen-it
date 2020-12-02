import React, { useContext, useState, useEffect } from "react";

const SeenItContext = React.createContext();

export const useSeenItContext = () => {
    return useContext(SeenItContext);
};


export function SeenItProvider({ children }) {

    // Stores state for the star rating
    const [rating, setRating] = useState(null);

    // Stores state for the star rating hovering
    const [starHover, setStarHover] = useState(null);

    // State for Results Data
    const [resultsArray, setResultsArray] = useState([]);

    // Stores state for the id of a result object that is being edited
    const [resultEditId, setResultEditId] = useState(null);

    // Stores state for the current results when editing
    const [currentResult, setCurrentResult] = useState(null);

    // State that controls if modal should open/close
    const [modalState, setModalState] = useState(false);

    // State that controls if the result row should slide over or not
    const [slideClassControl, setSlideClassControl] = useState(false);

    // State that stores the index of the element clicked
    const [slideClassIndex, setSlideClassIndex] = useState(null);


    // Pulls resultsArray from local storage
    useEffect(() => {

        const localData = localStorage.getItem('results');

        if (localData) {
            setResultsArray(JSON.parse(localData))
        }

    }, [])


    // Saves resultsArray to local storage
    useEffect(() => {
        localStorage.setItem('results', JSON.stringify(resultsArray));

    }, [resultsArray])


    return (
        <SeenItContext.Provider
            value={{
                rating,
                setRating,
                starHover,
                setStarHover,
                resultsArray,
                setResultsArray,
                resultEditId,
                setResultEditId,
                modalState,
                setModalState,
                currentResult,
                setCurrentResult,
                slideClassIndex,
                setSlideClassIndex,
                slideClassControl,
                setSlideClassControl
            }}
        >
            {children}
        </SeenItContext.Provider>

    );
}