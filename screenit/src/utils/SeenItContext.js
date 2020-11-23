import React, { useContext, useState } from "react";

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
                setCurrentResult
            }}
        >
            {children}
        </SeenItContext.Provider>

    );
}