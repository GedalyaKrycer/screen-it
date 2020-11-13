import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import ResultRow from './components/ResultRow/ResultRow';
import RatingStars from './components/RatingStars/RatingStars';
import EditModal from './components/EditModal/EditModal';
import { SeenItProvider } from './utils/SeenItContext';

function App() {
  return (
    <SeenItProvider>
      <Header />
      <Filter />
      <ResultRow />
      <RatingStars />
      <EditModal />
    </SeenItProvider>
  );
}

export default App;
