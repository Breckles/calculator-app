import { Fragment as div } from 'react';

import Header from './components/Header/Header';

import './App.css';

function App() {
  const themes = ['light', 'dark', 'neon'];

  return (
    <div id="app-wrapper">
      <Header />
    </div>
  );
}

export default App;
