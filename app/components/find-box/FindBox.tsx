import { FC } from 'react';

import classes from './FindBox.module.scss';
import SearchBar from '../search-bar/SearchBar';

const FindBox: FC = () => {
  return (
    <div className={classes.boxWrapper}>
      <h1 className={classes.title}>Find your table for any occasion</h1>
      <SearchBar />
    </div>
  );
};

export default FindBox;
