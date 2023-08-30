import { FC } from 'react';

import classes from './Block1.module.scss';

import Link from 'next/link';

import BlockNavigation from '../block-navigation/BlockNavigation';
import { IRestaurantDetails } from '../../[slug]/types';
import BlockRating from '../block-rating/BlockRating';
import BlockPhotos from '../block-photos/BlockPhotos';

interface IBlock1Props {
  restaurant: IRestaurantDetails;
}

const Block1: FC<IBlock1Props> = ({ restaurant }) => {
  return (
    <div className={classes.block1}>
      <BlockNavigation slug={restaurant.slug} />
      <h2 className={classes.restaurantName}>{restaurant.name}</h2>
      <BlockRating />
      <p className={classes.description}>{restaurant.description}</p>
      <BlockPhotos photos={restaurant.images} />
      <h3 className={classes.reviewsTitle}>What are 2128 people saying</h3>
      <ul className={classes.reviewsList}>
        <li className={classes.reviewItem}>
          <div className={classes.person}>
            <div className={classes.circle}>JH</div>
            <h5 className={classes.personName}>Jarad Higgins</h5>
          </div>
          <div className={classes.review}>
            <p className={classes.personStars}>*****</p>
            <p className={classes.personReview}>
              We went for a birthday celebration. The waiter only periodical showed up. After dinner, we wanted to order dessert to further
              the celebration but the waiter never returned! So we left. I simply didn’t expect that. That rather wiped out the reason we
              went there in the first place.
            </p>
          </div>
        </li>
        <li className={classes.reviewItem}>
          <div className={classes.person}>
            <div className={classes.circle}>JH</div>
            <h5 className={classes.personName}>Jarad Higgins</h5>
          </div>
          <div className={classes.review}>
            <p className={classes.personStars}>*****</p>
            <p className={classes.personReview}>
              We went for a birthday celebration. The waiter only periodical showed up. After dinner, we wanted to order dessert to further
              the celebration but the waiter never returned! So we left. I simply didn’t expect that. That rather wiped out the reason we
              went there in the first place.
            </p>
          </div>
        </li>
        <li className={classes.reviewItem}>
          <div className={classes.person}>
            <div className={classes.circle}>JH</div>
            <h5 className={classes.personName}>Jarad Higgins</h5>
          </div>
          <div className={classes.review}>
            <p className={classes.personStars}>*****</p>
            <p className={classes.personReview}>
              We went for a birthday celebration. The waiter only periodical showed up. After dinner, we wanted to order dessert to further
              the celebration but the waiter never returned! So we left. I simply didn’t expect that. That rather wiped out the reason we
              went there in the first place.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Block1;
