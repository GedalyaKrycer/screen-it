import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import FilterSection from './components/FilterSection/FilterSection';
import ResultRow from './components/ResultRow/ResultRow';
import Modal from './components/Modal/Modal';
import { SeeItProvider } from './utils/SeeItContext';

function App() {
  return (
    <SeeItProvider>
      <Header />
      <FilterSection>
        <Form />
      </FilterSection>
      <ResultRow />
      <Modal modalId={"headerDeleteAll"}>
        <div></div>
      </Modal>
      <Modal modalId={"editForm"}>
        <Form />
      </Modal>
    </SeeItProvider>
  );
}

export default App;
