import React from 'react';
import './App.css';
import { AppRouter } from "./AppRouting";
import { BrowserRouter as Router } from "react-router-dom";
import setEnvrionments from './environments';

function App() {
  let objUI = {};
  objUI["config"] = setEnvrionments();

  return (
    <Router>
      <AppRouter objUI={objUI}/>
    </Router>
  );
}

export default App;
