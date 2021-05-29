import { useDispatch } from 'react-redux';

import { calculatorActions } from '../../store/calculator';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

import classes from './CalcButtons.module.css';

const CalcButtons = (props) => {
  const dispatch = useDispatch();

  const digitClickHandler = (btnValue) => {
    dispatch(calculatorActions.enterDigit(btnValue));
  };

  const deleteClickHandler = () => {
    dispatch(calculatorActions.deleteDigit());
  };

  const operatorClickHandler = (btnValue) => {
    dispatch(calculatorActions.enterOperator(btnValue));
  };

  const resetClickHandler = () => {
    dispatch(calculatorActions.reset());
  };

  const evaluateClickHandler = () => {
    dispatch(calculatorActions.evaluate());
  };

  return (
    <Card className={`${props.className} ${classes.calcButtons} calcButtons`}>
      <Button onClick={digitClickHandler.bind(null, '7')}>7</Button>
      <Button onClick={digitClickHandler.bind(null, '8')}>8</Button>
      <Button onClick={digitClickHandler.bind(null, '9')}>9</Button>
      <Button onClick={deleteClickHandler} className={`deleteButton`}>
        DEL
      </Button>

      <Button onClick={digitClickHandler.bind(null, '4')}>4</Button>
      <Button onClick={digitClickHandler.bind(null, '5')}>5</Button>
      <Button onClick={digitClickHandler.bind(null, '6')}>6</Button>
      <Button onClick={operatorClickHandler.bind(null, '+')}>+</Button>

      <Button onClick={digitClickHandler.bind(null, '1')}>1</Button>
      <Button onClick={digitClickHandler.bind(null, '2')}>2</Button>
      <Button onClick={digitClickHandler.bind(null, '3')}>3</Button>
      <Button onClick={operatorClickHandler.bind(null, '-')}>-</Button>

      <Button onClick={digitClickHandler.bind(null, '.')}>.</Button>
      <Button onClick={digitClickHandler.bind(null, '0')}>0</Button>
      <Button onClick={operatorClickHandler.bind(null, '/')}>/</Button>
      <Button onClick={operatorClickHandler.bind(null, '*')}>x</Button>

      <Button
        onClick={resetClickHandler}
        className={`${classes.resetButton} resetButton`}
      >
        RESET
      </Button>
      <Button
        onClick={evaluateClickHandler}
        className={`${classes.evaluateButton} evaluateButton`}
      >
        =
      </Button>
    </Card>
  );
};

export default CalcButtons;
