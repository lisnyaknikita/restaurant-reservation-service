import { FC } from 'react';

import classes from './RestaurantName.module.scss';

const RestaurantName: FC = () => {
  return (
    <div className={classes.boxWrapper}>
      <h1 className={classes.title}>Barrel Cheese & Wine</h1>
    </div>
  );
};

export default RestaurantName;
