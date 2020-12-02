import React from 'react';
import './style.css';

const FormValidation = ({ nameErrorState, ratingErrorState }) => {


    // Validation message that gets added to the dom if errors return as true
    let validateMessages = null;

    if (nameErrorState || ratingErrorState) {
        validateMessages = (<p className="validate-errors">Please fill all fields.</p>);
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

export default FormValidation;