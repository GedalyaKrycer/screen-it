import React, { useContext, useState } from "react";

const SeenItContext = React.createContext();

export const useSeenItContext = () => {
    return useContext(SeenItContext);
};


export function SeenItProvider({ children }) {

    // Stores state for the id of a result object that is being edited
    const [resultEditId, setResultEditId] = useState(null);

    // Stores state for the star rating
    const [rating, setRating] = useState(null);

    // Stores state for the star rating hovering
    const [starHover, setStarHover] = useState(null);

    // State for Results Data
    const [resultsArray, setResultsArray] = useState([]);

    // State that controls if the row should slide over or not
    const [slideClassControl, setSlideClassControl] = useState(false);


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
                slideClassControl,
                setSlideClassControl
            }}
        >
            {children}
        </SeenItContext.Provider>

    );
}