import React from 'react';
import './style.css';


const ToolIcon = (props) => {

    return (

        <svg
            onClick={props.clickHandler}
            className={props.iconClass}
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg">
            {props.circle}
            {props.path}
        </svg>
    )
}

export default ToolIcon;
