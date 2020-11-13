import React from 'react';
import './style.css';
import RatingStarsDisplay from '../RatingStarsDisplay/RatingStarsDisplay';
import { useSeenItContext } from '../../utils/SeenItContext';

const ResultRow = () => {
    // Imports states from context
    const { resultsArray } = useSeenItContext();

    // const [avatarLength, setAvatarLength] = useState();





    return (
        <>
            {
                resultsArray.map((result, index) => {

                    // Take the movie's name and creates a new array, splitting on the spaces, but stops after 3 items.
                    const avatarArray = result.movieName.split(" ").slice(0, 3)

                    // Stores the final 1-3 characters from the array
                    const avatarCharacters = [];

                    // Loops through array to grab the first character of each word in the array
                    avatarArray.forEach(e => {
                        avatarCharacters.push(e.charAt(0));
                    });

                    // Variable that holds a "lg" or "sm" value to decide the right class
                    let avatarLength = "";

                    // Decides which size based on avatar length 
                    if (avatarCharacters.length === 3) {
                        avatarLength = "sm";
                    } else {
                        avatarLength = "lg";
                    }

                    return <div
                        key={result.movieName + index}
                        className="result">
                        <span className={`result__avatar ${avatarLength === 'sm' ? 'result__avatar--sm' : 'result__avatar--lg'}`}>{avatarCharacters}</span>

                        <div>
                            <h2 className="result__movie-name">{result.movieName.trim('')}</h2>
                            <h3 className="result__category">{result.category}</h3>
                        </div>
                        <RatingStarsDisplay
                            disableStar={true}
                            stateValues={result.rating} />
                    </div>
                })
            }


            {/* <h3>{result.rating}</h3> */}
        </>
    )
}

export default ResultRow;