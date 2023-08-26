import { FC } from 'react';
import Image from 'next/image';

import classes from './ReservedRestaurant.module.scss';

import RestaurantCard from '@/app/search/components/restaurant-card/RestaurantCard';

const ReservedRestaurant: FC = () => {
  return (
    <div className={classes.restaurantCard}>
      <div className={classes.card}>
        <Image className={classes.cardImage} src={'/card-image.jpg'} alt='restaurant image' width={205} height={205} />
        <div className={classes.cardContent}>
          <h3 className={classes.cardName}>The Yacht Club</h3>
          <div className={classes.cardInfo}>
            <p className={classes.cardDate}>Fri, Aug 25</p>
            <p className={classes.cardTime}>6:30 PM</p>
            <p className={classes.cardPartySize}>2 people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservedRestaurant;
