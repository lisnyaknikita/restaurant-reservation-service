import { FC } from 'react';

import classes from './Header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href={'/'}>
        Restaurant Reservation
      </Link>
      <div className={classes.buttons}>
        <button className={classes.signInButton}>Sign in</button>
        <button className={classes.signUpButton}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
