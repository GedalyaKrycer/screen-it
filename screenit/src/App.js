import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import ResultRow from './components/ResultRow/ResultRow';
import Stars from './components/Stars/Stars';
import EditModal from './components/EditModal/EditModal';

function App() {
  return (
    <>
      <Header />
      <Filter />
      <ResultRow />
      <Stars />
      <EditModal />
    </>
  );
}

export default App;
