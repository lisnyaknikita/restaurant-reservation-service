import { FC } from 'react';
import Image from 'next/image';

import classes from './RestaurantCard.module.scss';

const RestaurantCard: FC = () => {
  return (
    <div className={classes.card}>
      <Image className={classes.cardImage} src={'/card-image.jpg'} alt='restaurant image' width={205} height={205} />
      <div className={classes.cardContent}>
        <h3 className={classes.cardName}>The Yacht Club</h3>
        <div className={classes.cardRating}>
          <p className={classes.cardStars}>*****</p>
          <p className={classes.cardReview}>Awesome</p>
        </div>
        <div className={classes.cardInfo}>
          <p className={classes.cardPrice}>$$$</p>
          <p className={classes.cardCuisine}>American</p>
          <p className={classes.cardCity}>Edgewater</p>
        </div>
        <button className={classes.cardBtn}>View more information</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
