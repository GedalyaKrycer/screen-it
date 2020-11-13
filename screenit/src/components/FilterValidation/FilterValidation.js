import React from 'react';
import './style.css';

const FilterValidation = ({ nameErrorState, categoryErrorState, ratingErrorState }) => {


    // Validation message that gets added to the dom if errors return as true
    let validateMessages = null;

    if (nameErrorState || categoryErrorState || ratingErrorState) {
        validateMessages = (<p className="validate-errors">Please fill-out all fields</p>);
    } else {
        validateMessages = null;
    }

    return (
        <>
            {/* Validate Messages */}
            { validateMessages}
        </>
    )

}

export default FilterValidation;