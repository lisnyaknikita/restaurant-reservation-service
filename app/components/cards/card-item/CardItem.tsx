import { FC } from 'react';
import Image from 'next/image';

import classes from './CardItem.module.scss';
import Link from 'next/link';

const CardItem: FC = () => {
  return (
    <li className={classes.card}>
      <Link href={'/restaurant/some-restaurant'}>
        <Image className={classes.image} src='/restaurant-image.webp' width={240} height={200} alt='Picture of the author' />
      </Link>
      <div className={classes.content}>
        <Link href={'/restaurant/some-restaurant'}>
          <h3 className={classes.restaurantName}>Barrel Cheese & Wine</h3>
        </Link>
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
