import { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from 'react';

import classes from './SearchFindBox.module.scss';
import { useRouter } from 'next/router';

const SearchFindBox: FC = () => {
  return (
    <div className={classes.boxWrapper}>
      <form className={classes.form}>
        <input className={classes.inputField} type='text' placeholder='State, city or town' />
        <button className={classes.button} type='submit'>
          Let's go
        </button>
      </form>
    </div>
  );
};

export default SearchFindBox;
