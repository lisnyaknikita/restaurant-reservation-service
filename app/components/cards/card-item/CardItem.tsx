import { FC } from 'react';
import Image from 'next/image';

import classes from './CardItem.module.scss';
import Link from 'next/link';
import { ICardItemProps } from '../types';

const CardItem: FC<ICardItemProps> = ({ restaurant }) => {
  return (
    <li className={classes.card}>
      <Link href={'/restaurant/some-restaurant'}>
        <Image className={classes.image} src={restaurant.main_image} width={326} height={200} alt='Picture of the author' />
      </Link>
      <div className={classes.content}>
        <Link href={'/restaurant/some-restaurant'}>
          <h3 className={classes.restaurantName}>{restaurant.name}</h3>
        </Link>
        <div className={classes.rating}>
          <div className={classes.stars}>****</div>
          <p className={classes.reviewsLength}>999 reviews</p>
        </div>
        <div className={classes.info}>
          <p className={classes.cuisine}>{restaurant.cuisine.name}</p>
          <p className={classes.price}>{restaurant.price}</p>
          <p className={classes.city}>{restaurant.location.name}</p>
        </div>
        <p className={classes.booking}>Booking 4 times today</p>
      </div>
    </li>
  );
};

export default CardItem;
