import { FC } from 'react';

import classes from './RestaurantDescription.module.scss';

import Block1 from '../description-block-1/Block1';
import Block2 from '../description-block-2/Block2';

const RestaurantDescription: FC = () => {
  return (
    <div className={classes.blocks}>
      <Block1 />
      <Block2 />
    </div>
  );
};

export default RestaurantDescription;
