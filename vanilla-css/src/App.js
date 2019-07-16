import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <Nav />
        <Content />
      </div>
    </div>
  );
}

export default App;
