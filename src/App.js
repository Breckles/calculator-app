import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import CalcDisplay from './components/CalcDisplay/CalcDisplay';
import CalcButtons from './components/CalcButtons/CalcButtons';

import './Themes.css';
import classes from './App.module.css';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  const clickHandler = () => {};

  return (
    <div className={`${classes.appWrapper} appWrapper ${theme}`}>
      <div className={`${classes.appContent}`}>
        <Header className={classes.headerWrapper} />
        <main className={`${classes.calculator}`}>
          <CalcDisplay className={classes.calcDisplayWrapper} />
          <CalcButtons
            className={classes.calcButtonsWrapper}
            clickHandler={clickHandler}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
