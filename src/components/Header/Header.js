import ThemeToggler from '../ThemeToggler/ThemeToggler';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={`${classes.header} ${props.className}`}>
      <h1>calc</h1>
      <h2>THEME</h2>
      <div className={classes.themeTogglerWrapper}>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
