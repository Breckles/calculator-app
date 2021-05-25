import Card from '../../UI/Card';

import classes from './CalcDisplay.module.css';

const CalcDisplay = (props) => {
  const content = '399,981';
  return (
    <Card className={`${classes.calcDisplay} ${props.className} calcDisplay`}>
      {content}
    </Card>
  );
};

export default CalcDisplay;
