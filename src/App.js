import { Fragment } from 'react';

import Header from './components/Header/Header';

import './App.css';

function App() {
  const themes = ['light', 'dark', 'neon'];

  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default App;
