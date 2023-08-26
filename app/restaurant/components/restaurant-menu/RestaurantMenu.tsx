import { FC } from 'react';

import classes from './RestaurantMenu.module.scss';
import Link from 'next/link';

const RestaurantMenu: FC = () => {
  return (
    <div className={classes.menuBlock}>
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
      <h2 className={classes.menuTitle}>Menu</h2>
      <ul className={classes.menuList}>
        <li className={classes.menuItem}>
          <h4 className={classes.menuItemTitle}>Surf and Turf</h4>
          <p className={classes.menuItemDescription}>A well done steak with lobster and rice</p>
          <p className={classes.menuItemPrice}>$80.00</p>
        </li>
        <li className={classes.menuItem}>
          <h4 className={classes.menuItemTitle}>Surf and Turf</h4>
          <p className={classes.menuItemDescription}>A well done steak with lobster and rice</p>
          <p className={classes.menuItemPrice}>$80.00</p>
        </li>
        <li className={classes.menuItem}>
          <h4 className={classes.menuItemTitle}>Surf and Turf</h4>
          <p className={classes.menuItemDescription}>A well done steak with lobster and rice</p>
          <p className={classes.menuItemPrice}>$80.00</p>
        </li>
        <li className={classes.menuItem}>
          <h4 className={classes.menuItemTitle}>Surf and Turf</h4>
          <p className={classes.menuItemDescription}>A well done steak with lobster and rice</p>
          <p className={classes.menuItemPrice}>$80.00</p>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
