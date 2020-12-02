import React from 'react';
import './style.css';

const NameGenre = ({ movieName, genre }) => {

    return (
        < div className="result-row__txt" >
            <h2 className="result-row__movie-name">{movieName}</h2>
            <h3 className="result-row__category">{genre}</h3>
        </div >
    )
}

export default NameGenre;