import { useDispatch, useSelector } from 'react-redux';

import { themeActions } from '../../store/theme';

import classes from './ThemeToggler.module.css';

const ThemeToggler = (props) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const themeSwitchHandler = (event) => {
    dispatch(themeActions.setTheme(event.target.value));
  };

  // Ultimately dictates the position of the toggle switch
  let toggleSwitchClass = classes.lightTheme;

  if (currentTheme === 'darkTheme') {
    toggleSwitchClass = classes.darkTheme;
  } else if (currentTheme === 'neonTheme') {
    toggleSwitchClass = classes.neonTheme;
  }

  return (
    <div className={`${classes.themeToggler} themeToggler ${props.className}`}>
      <ul className={`${classes.labels} labels`}>
        <li>
          <label
            htmlFor="themeInputDark"
            className={
              currentTheme === 'darkTheme' ? `${classes.active}` : undefined
            }
          >
            1
          </label>
        </li>
        <li>
          <label
            htmlFor="themeInputLight"
            className={
              currentTheme === 'lightTheme' ? `${classes.active}` : undefined
            }
          >
            2
          </label>
        </li>
        <li>
          <label
            htmlFor="themeInputNeon"
            className={
              currentTheme === 'neonTheme' ? `${classes.active}` : undefined
            }
          >
            3
          </label>
        </li>
      </ul>

      <div className={`${classes.toggleBody} toggleBody`}>
        <ul className={`${classes.radioInputs} radioInputs`}>
          <li>
            <input
              id="themeInputDark"
              className={
                currentTheme === 'darkTheme' ? `${classes.active}` : undefined
              }
              name="theme"
              type="radio"
              value="darkTheme"
              onClick={themeSwitchHandler}
            />
          </li>
          <li>
            <input
              id="themeInputLight"
              className={
                currentTheme === 'lightTheme' ? `${classes.active}` : undefined
              }
              name="theme"
              type="radio"
              value="lightTheme"
              onClick={themeSwitchHandler}
            />
          </li>
          <li>
            <input
              id="themeInputNeon"
              className={
                currentTheme === 'neonTheme' ? `${classes.active}` : undefined
              }
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
