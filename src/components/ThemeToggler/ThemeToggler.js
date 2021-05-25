import { useState } from 'react';

import classes from './ThemeToggler.module.css';

const ThemeToggler = () => {
  const [currentTheme, setCurrentTheme] = useState('lightTheme');

  // This var ultimately dictates the position of the toggle switch
  let toggleSwitchClass = classes.lightTheme;

  if (currentTheme === 'darkTheme') {
    toggleSwitchClass = classes.darkTheme;
  } else if (currentTheme === 'neonTheme') {
    toggleSwitchClass = classes.neonTheme;
  }

  const themeSwitchHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === currentTheme) {
      return;
    }

    setCurrentTheme(event.target.value);
  };

  return (
    <div className={`${classes.themeToggler} themeToggler`}>
      <ul className={`${classes.labels} labels`}>
        <li>
          <label htmlFor="themeInputLight">1</label>
        </li>
        <li>
          <label htmlFor="themeInputDark">2</label>
        </li>
        <li>
          <label htmlFor="themeInputNeon">3</label>
        </li>
      </ul>

      <div className={`${classes.toggleBody} toggleBody`}>
        <ul className={`${classes.radioInputs} radioInputs`}>
          <li>
            <input
              id="themeInputLight"
              name="theme"
              type="radio"
              value="lightTheme"
              onClick={themeSwitchHandler}
            />
          </li>
          <li>
            <input
              id="themeInputDark"
              name="theme"
              type="radio"
              value="darkTheme"
              onClick={themeSwitchHandler}
            />
          </li>
          <li>
            <input
              id="themeInputNeon"
              name="theme"
              type="radio"
              value="neonTheme"
              onClick={themeSwitchHandler}
            />
          </li>
        </ul>
        <div
          className={`${classes.toggleSwitch} toggleSwitch ${toggleSwitchClass}`}
        ></div>
      </div>
    </div>
  );
};

export default ThemeToggler;
