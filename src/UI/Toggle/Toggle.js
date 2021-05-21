import classes from './Toggle.module.css';

const Toggle = (props) => {
  const options = [
    { label: 1, value: 'dark-theme' },
    { label: 2, value: 'light-theme' },
    { label: 3, value: 'neon-theme' },
  ];

  const optionLabels = options.map((option, index) => {
    return (
      <label key={index} htmlFor={`option${index}`}>
        {option.label || ''}
      </label>
    );
  });

  const optionRadios = options.map((option, index) => {
    return (
      <input
        key={index}
        id={`option${index}`}
        type="radio"
        name="toggle-option"
        value={option.value}
      />
    );
  });

  const toggleLabels = (
    <div className={`${classes['toggle-labels']} toggle-labels`}>
      {optionLabels}
    </div>
  );

  const toggleRadios = (
    <div className={`${classes['toggle-radios']}`}>{optionRadios}</div>
  );

  return (
    <div className={`${classes['toggle']} ${props.className}`}>
      {toggleLabels}
      <div className={`${classes['toggle-body']} toggle-body`}>
        {toggleRadios}
        <div className={`${classes['toggle-switch']} toggle-switch`}></div>
      </div>
    </div>
  );
};

export default Toggle;
