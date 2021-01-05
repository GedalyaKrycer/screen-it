import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../../store/actions/index';


const ResultsBody = ({ children }) => {

    // Redux State Hooks
    const resultsArray = useSelector((state) => state.form.resultsArray);


    // Redux Dispatch Hooks
    const setResultsArray = useDispatch();


    // Pulls resultsArray from local storage
    useEffect(() => {

        console.log("Local Storage useEffect ran to pull data");

        const localData = localStorage.getItem('results');

        if (localData) {
            setResultsArray(action.storeAllResults(JSON.parse(localData)));
            console.log("Local Data Stored in Redux");
        }

    }, [setResultsArray])


    // Saves resultsArray to local storage
    useEffect(() => {
        localStorage.setItem('results', JSON.stringify(resultsArray));
        console.log("Local Storage Stored");

    }, [resultsArray])

    return (
        <>
            { children}
        </>

    )
}

export default ResultsBody;
