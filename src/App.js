import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

import { Calendar } from '@progress/kendo-react-dateinputs'
import KendoPie from "./components/KendoPie"

function App() {
  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <Calendar/>
      <KendoPie/>
    </div>
  );
}

export default App;
