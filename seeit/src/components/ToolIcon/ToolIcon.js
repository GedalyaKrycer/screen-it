import React from 'react';
import './style.css';


const ToolIcon = ({ clickHandler, iconClass, circle, path }) => {

    return (

        <svg
            onClick={clickHandler}
            className={iconClass}
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg">
            {circle}
            {path}
        </svg>
    )
}

export default ToolIcon;
