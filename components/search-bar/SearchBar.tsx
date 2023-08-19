import { FC } from 'react';

import classes from './SearchBar.module.scss';

const SearchBar: FC = () => {
  return (
    <form className={classes.form}>
      <input className={classes.inputField} type='text' placeholder='State, city or town' />
      <button className={classes.button}>Let's go</button>
    </form>
  );
};

export default SearchBar;
