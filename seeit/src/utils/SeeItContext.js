import React, { useContext, useState } from "react";

const SeeItContext = React.createContext();

export const useSeeItContext = () => {
    return useContext(SeeItContext);
};


export function SeeItProvider({ children }) {


    // State that controls if modal should open/close
    // const [modalOpen, setModalOpen] = useState(false);

    // State that caputures the id of the modal
    // const [modelIdCheck, setModelIdCheck] = useState(false);

    // Stores state for the star rating
    // const [rating, setRating] = useState(null);

    // Stores state for the star rating hovering
    // const [starHover, setStarHover] = useState(null);

    // State for Results Data
    // const [resultsArray, setResultsArray] = useState([]);

    // Stores state for the id of a result object that is being edited
    // const [resultEditId, setResultEditId] = useState(null);

    // Stores state for the current results when editing
    // const [currentResult, setCurrentResult] = useState(null);





    // State that controls if the result row should slide over or not
    // const [slideClassControl, setSlideClassControl] = useState(false);

    // State that stores the index of the element clicked
    // const [slideClassIndex, setSlideClassIndex] = useState(null);

    // State that controls if the result card should show tools or not
    // const [cardClassControl, setCardClassControl] = useState(false);

    // State that stores the index of the card element clicked
    // const [cardClassIndex, setCardClassIndex] = useState(null);

    // State that stores the index of the card element clicked
    // const [viewToggle, setViewToggle] = useState("list");


    return (
        <SeeItContext.Provider
            value={{

            }}
        >
            {children}
        </SeeItContext.Provider>

    );
}