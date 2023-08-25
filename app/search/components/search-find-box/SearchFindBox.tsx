import { FC } from 'react';

import classes from './SearchFindBox.module.scss';

const SearchFindBox: FC = () => {
  return (
    <div className={classes.boxWrapper}>
      <form className={classes.form}>
        <input className={classes.inputField} type='text' placeholder='State, city or town' />
        <button className={classes.button}>Let's go</button>
      </form>
    </div>
  );
};

export default SearchFindBox;
