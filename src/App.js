import Header from './components/Header/Header';
import CalcDisplay from './components/CalcDisplay/CalcDisplay';
import CalcButtons from './components/CalcButtons/CalcButtons';

import classes from './App.module.css';
import './Themes.css';

function App() {
  return (
    <div id="appWrapper" className={`${classes.appWrapper} darkTheme`}>
      <Header className={classes.headerWrapper} />
      <CalcDisplay className={classes.calcDisplayWrapper} />
      <CalcButtons className={classes.calcButtonsWrapper} />
    </div>
  );
}

export default App;
