import { FC } from 'react';
import Image from 'next/image';

import classes from './CardItem.module.scss';

const CardItem: FC = () => {
  return (
    <li className={classes.card}>
      <Image className={classes.image} src='/restaurant-image.webp' width={240} height={200} alt='Picture of the author' />
      <div className={classes.content}>
        <h3 className={classes.restaurantName}>Barrel Cheese & Wine</h3>
        <div className={classes.rating}>
          <div className={classes.stars}>****</div>
          <p className={classes.reviewsLength}>999 reviews</p>
        </div>
        <div className={classes.info}>
          <p className={classes.cuisine}>American</p>
          <p className={classes.price}>$$$</p>
          <p className={classes.city}>Chicago</p>
        </div>
        <p className={classes.booking}>Booking 4 times today</p>
      </div>
    </li>
  );
};

export default CardItem;
