import { useSelector } from 'react-redux';

import Card from '../../UI/Card';

import classes from './CalcDisplay.module.css';

const CalcDisplay = (props) => {
  const { displayNumberString, historyString } = useSelector((state) => {
    return { ...state.calculator };
  });

  const [integerDigits, decimalDigits] = displayNumberString.split('.');

  return (
    <Card className={`${props.className} ${classes.calcDisplay} calcDisplay`}>
      {+integerDigits.toLocaleString()}
      {displayNumberString.includes('.') && '.'}
      {decimalDigits}

      <div className={`${classes.history}`}>{historyString}</div>
    </Card>
  );
};

export default CalcDisplay;
