import ThemeToggle from './ThemeToggle/ThemeToggle';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <h1>calc</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
