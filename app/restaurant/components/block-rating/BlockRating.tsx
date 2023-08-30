import { FC } from 'react';

import classes from './BlockRating.module.scss';

const BlockRating: FC = () => {
  return (
    <div className={classes.rating}>
      <p className={classes.stars}>***</p>
      <p className={classes.numRating}>4.7</p>
      <p className={classes.reviewsLength}>43 reviews</p>
    </div>
  );
};

export default BlockRating;
