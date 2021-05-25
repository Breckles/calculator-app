import Card from '../../UI/Card';
import Button from '../../UI/Button';

import classes from './CalcButtons.module.css';

const CalcButtons = (props) => {
  return (
    <Card className={`${props.className} ${classes.calcButtons} calcButtons`}>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button className={`deleteButton`}>DEL</Button>

      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>

      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>

      <Button>.</Button>
      <Button>0</Button>
      <Button>/</Button>
      <Button>x</Button>

      <Button className={`${classes.resetButton} resetButton`}>RESET</Button>
      <Button className={`${classes.evaluateButton} evaluateButton`}>=</Button>
    </Card>
  );
};

export default CalcButtons;
