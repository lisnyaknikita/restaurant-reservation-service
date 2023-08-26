import { FC } from 'react';
import Image from 'next/image';

import classes from './Block1.module.scss';
import Link from 'next/link';

const Block1: FC = () => {
  return (
    <div className={classes.block1}>
      <nav className={classes.blockNavigation}>
        <ul className={classes.navigationList}>
          <li className={classes.navigationItem}>
            <Link href={'/restaurant/some-restaurant'}>Overview</Link>
          </li>
          <li className={classes.navigationItem}>
            <Link href={'/restaurant/some-restaurant/menu'}>Menu</Link>
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
      <h3 className={classes.photosTitle}>5 photos</h3>
      <div className={classes.photos}>
        <Image className={classes.photoItem} src='/restaurant-image.webp' width={210} height={200} alt='Picture of the author' />
        <Image className={classes.photoItem} src='/restaurant-image.webp' width={210} height={200} alt='Picture of the author' />
        <Image className={classes.photoItem} src='/restaurant-image.webp' width={210} height={200} alt='Picture of the author' />
        <Image className={classes.photoItem} src='/restaurant-image.webp' width={210} height={200} alt='Picture of the author' />
        <Image className={classes.photoItem} src='/restaurant-image.webp' width={210} height={200} alt='Picture of the author' />
      </div>
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
