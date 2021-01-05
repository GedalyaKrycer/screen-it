import React from 'react';
import './style.css';

const FormValidation = (props) => {


    // Validation message that gets added to the dom if errors return as true
    let validateMessages = null;

    if (props.nameErrorState || props.ratingErrorState) {
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