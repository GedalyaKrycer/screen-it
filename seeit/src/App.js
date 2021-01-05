import React from "react";
import './App.css';
import Header from './components/headerBar/Header/Header';
import Form from './components/search/Form/Form';
import SearchSection from './components/search/SearchSection/SearchSection';
import ResultRow from './components/results/ResultRow/ResultRow';
import ResultCards from './components/results/ResultCards/ResultCards';
import Modal from './components/ui/Modal/Modal';
import DeleteAll from './components/headerBar/DeleteAll/DeleteAll';
import ResultsBody from './components/results/ResultsBody/ResultsBody';
import ResultsInitialArt from './components/results/ResultsInitialArt/ResultsInitialArt';



function App() {
  return (
    <>
      <Header />
      <SearchSection>
        <Form />
      </SearchSection>
      <ResultsBody>
        <ResultRow />
        <ResultCards />
        <ResultsInitialArt />
      </ResultsBody>

      {/* Modals */}
      <Modal modalId={"headerDeleteAll"}>
        <DeleteAll />
      </Modal>
      <Modal modalId={"editForm"}>
        <Form />
      </Modal>
    </>
  );
}

export default App;
