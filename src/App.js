import Header from './components/Header/Header';
import CalcDisplay from './components/CalcDisplay/CalcDisplay';
import CalcButtons from './components/CalcButtons/CalcButtons';

import classes from './App.module.css';
import './Themes.css';

function App() {
  return (
    <div id="appWrapper" className={`${classes.appWrapper} darkTheme`}>
      <div className={`${classes.appContent}`}>
        <Header className={classes.headerWrapper} />
        <main className={`${classes.calculator}`}>
          <CalcDisplay className={classes.calcDisplayWrapper} />
          <CalcButtons className={classes.calcButtonsWrapper} />
        </main>
      </div>
    </div>
  );
}

export default App;
