import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import FilterSection from './components/FilterSection/FilterSection';
import ResultRow from './components/ResultRow/ResultRow';
import Modal from './components/Modal/Modal';
import DeleteAll from './components/DeleteAll/DeleteAll';
import ResultsBody from './components/ResultsBody/ResultsBody';
import ResultsInitialArt from './components/ResultsInitialArt/ResultsInitialArt';
import { SeeItProvider } from './utils/SeeItContext';

function App() {
  return (
    <SeeItProvider>
      <Header />
      <FilterSection>
        <Form />
      </FilterSection>
      <ResultsBody>
        <ResultRow />
        <ResultsInitialArt />
      </ResultsBody>

      {/* Modals */}
      <Modal modalId={"headerDeleteAll"}>
        <DeleteAll />
      </Modal>
      <Modal modalId={"editForm"}>
        <Form />
      </Modal>
    </SeeItProvider>
  );
}

export default App;
