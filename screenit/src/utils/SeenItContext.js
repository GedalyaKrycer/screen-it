import React, { useContext, useState } from "react";

const SeenItContext = React.createContext();

export const useSeenItContext = () => {
    return useContext(SeenItContext);
};


export function SeenItProvider({ children }) {

    // Stores state for the star rating
    const [rating, setRating] = useState(null);



    return (

        <SeenItContext.Provider
            value={{
                rating,
                setRating
            }}
        >
            {children}
        </SeenItContext.Provider>

    );
}