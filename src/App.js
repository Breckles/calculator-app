import { Fragment as div } from 'react';

import Header from './components/Header/Header';
import Display from './components/Display/Display';

import './App.css';

function App() {
  return (
    <div id="app-wrapper" className="dark-theme">
      <Header />
      <Display />
    </div>
  );
}

export default App;
