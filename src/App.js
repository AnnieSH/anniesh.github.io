import React, { createRef } from 'react';
import Menu from './menu/menu';
import './App.css';
import Home from './home/home';

function App() {
  const homeRef = createRef();
  const projectsRef = createRef();
  const hobbyRef = createRef();

  return (
    <div className="App">
      <Home homeRef={homeRef} projectsRef={projectsRef} hobbyRef={hobbyRef}/>
    </div>
  );
}

export default App;
