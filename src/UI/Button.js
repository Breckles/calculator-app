import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${props.className || ''} ${classes.button} button`}
    >
      <span className={`${classes.content}`}>{props.children}</span>
    </button>
  );
};

export default Button;
