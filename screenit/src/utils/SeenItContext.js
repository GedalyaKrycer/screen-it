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



    return (
        <SeenItContext.Provider
            value={{
                rating,
                setRating,
                starHover,
                setStarHover,
                resultsArray,
                setResultsArray
            }}
        >
            {children}
        </SeenItContext.Provider>

    );
}