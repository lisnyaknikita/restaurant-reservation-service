import { FC } from 'react';

import classes from './RestaurantDescription.module.scss';

import Block1 from '../description-block-1/Block1';

const RestaurantDescription: FC = () => {
  return (
    <div className={classes.blocks}>
      <Block1 />

      <div className={classes.block2}></div>
    </div>
  );
};

export default RestaurantDescription;
