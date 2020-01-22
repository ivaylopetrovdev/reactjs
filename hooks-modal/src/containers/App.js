import React from 'react';
import './App.css';
import CompaniesList from './CompaniesList';
import Header from '../components/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <CompaniesList className="App-body" />
    </div>
  );
}

export default App;
