import React from 'react';
import {APIClock,ComputerClock} from './Clock/'



function App(props) {
  return (<div>
    <h1>exemplo de relógio criado no nosso computador</h1>
    <ComputerClock />
    <h1>exemplo de relógio pego da API global</h1>
    <APIClock local="America/Fortaleza"/>
  </div>);
}
export default App;


