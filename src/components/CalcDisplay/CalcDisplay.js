import Card from '../../UI/Card';

import classes from './CalcDisplay.module.css';

const CalcDisplay = (props) => {
  const content = 'Display Component';
  return (
    <Card className={`${classes.display} ${props.className}`}>{content}</Card>
  );
};

export default CalcDisplay;
