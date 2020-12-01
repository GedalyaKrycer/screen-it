import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import FilterSection from './components/FilterSection/FilterSection';
import ResultRow from './components/ResultRow/ResultRow';
import Modal from './components/Modal/Modal';
import { SeenItProvider } from './utils/SeenItContext';

function App() {
  return (
    <SeenItProvider>
      <Header />
      <FilterSection>
        <Form />
      </FilterSection>
      <ResultRow />
      <Modal>
        <Form />
      </Modal>
    </SeenItProvider>
  );
}

export default App;
