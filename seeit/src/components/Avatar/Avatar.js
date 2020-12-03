import React from 'react';
import './style.css';

const Avatar = ({ movieName }) => {

    // Take the movie's name and creates a new array, splitting on the spaces and special characters
    let avatarArray = movieName.trim().split(/[^A-Z0-9]/ig).slice(0, 3);

    // Stores the final 1-3 characters from the array
    const avatarCharacters = [];

    // Loops through array to grab the first character of each word in the array
    avatarArray.forEach(e => {
        avatarCharacters.push(e.charAt(0));
    });

    // Variable that holds a "lg" or "sm" value to decide the right class
    let avatarLength = "";

    // Decides which size based on avatar length 
    if (avatarCharacters.length > 2) {
        avatarLength = "sm";
    } else {
        avatarLength = "lg";
    }


    // Returns JSX
    return (
        < span className={`avatar ${avatarLength === 'sm' ? 'avatar--sm' : 'avatar--lg'}`}>{avatarCharacters}</span>
    )


}

export default Avatar;