import { FC } from 'react';

import classes from './SearchFilters.module.scss';

const SearchFilters: FC = () => {
  return (
    <div className={classes.filtersInner}>
      <div className={classes.filter}>
        <h3 className={classes.filterTitle}>Region</h3>
        <p className={classes.filterItem}>Toronto</p>
        <p className={classes.filterItem}>Ottawa</p>
        <p className={classes.filterItem}>Montreal</p>
      </div>
      <div className={classes.filter}>
        <h3 className={classes.filterTitle}>Cuisine</h3>
        <p className={classes.filterItem}>Mexican</p>
        <p className={classes.filterItem}>Italian</p>
        <p className={classes.filterItem}>Chinese</p>
      </div>
      <div className={classes.filter}>
        <h3 className={classes.filterTitle}>Price</h3>
        <div className={classes.priceButtons}>
          <button>$</button>
          <button>$$</button>
          <button>$$$</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
