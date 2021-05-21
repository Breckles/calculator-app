import ThemeToggle from './ThemeToggle/ThemeToggle';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>calc</h1>
      <ThemeToggle className={`${classes['theme-toggle-container']}`} />
    </header>
  );
};

export default Header;
