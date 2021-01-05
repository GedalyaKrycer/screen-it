import React from 'react';
import './style.css';

const NameGenre = (props) => {

    return (
        < div className="result-row__txt" >
            <h2 className="result-row__movie-name">{props.movieName}</h2>
            <h3 className="result-row__category">{props.genre}</h3>
        </div >
    )
}

export default NameGenre;