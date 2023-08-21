import { FC } from 'react';

import classes from './Block1.module.scss';

const Block1: FC = () => {
  return (
    <div className={classes.block1}>
      <nav className={classes.blockNavigation}>
        <ul className={classes.navigationList}>
          <li className={classes.navigationItem}>
            <a href=''>Overview</a>
          </li>
          <li className={classes.navigationItem}>
            <a href=''>Menu</a>
          </li>
        </ul>
      </nav>
      <h2 className={classes.restaurantName}>Barrel Cheese & Wine</h2>
      <div className={classes.rating}>
        <p className={classes.stars}>***</p>
        <p className={classes.numRating}>4.7</p>
        <p className={classes.reviewsLength}>43 reviews</p>
      </div>
      <p className={classes.description}>
        Barrel cheese & wine is your new perfect favorite spot for a date night. Fireplace, wine racks, special cocktails and absolutely
        delicious food!
      </p>
    </div>
  );
};

export default Block1;
