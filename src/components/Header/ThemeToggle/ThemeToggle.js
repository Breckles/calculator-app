import { Fragment as div } from 'react';
import Toggle from '../../../UI/Toggle/Toggle';

import classes from './ThemeToggle.module.css';

const ThemeToggle = (props) => {
  return (
    <div className={`${classes['theme-toggle']} ${props.className}`}>
      THEME
      <Toggle className={`${classes['toggle-container']}`} />
    </div>
  );
};

export default ThemeToggle;
