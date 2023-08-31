import { FC } from 'react';

import classes from './RestaurantMenu.module.scss';
import Link from 'next/link';
import { IMenu } from '../../[slug]/types';

interface IRestaurantMenuProps {
  slug: string;
  menu: IMenu[];
}

const RestaurantMenu: FC<IRestaurantMenuProps> = ({ slug, menu }) => {
  return (
    <div className={classes.menuBlock}>
      <nav className={classes.blockNavigation}>
        <ul className={classes.navigationList}>
          <li className={classes.navigationItem}>
            <Link href={`/restaurant/${slug}`}>Overview</Link>
          </li>
          <li className={classes.navigationItem}>
            <Link href={`/restaurant/${slug}/menu`}>Menu</Link>
          </li>
        </ul>
      </nav>
      <h2 className={classes.menuTitle}>Menu</h2>
      <ul className={classes.menuList}>
        {menu.length ? (
          menu.map((item) => {
            return (
              <li className={classes.menuItem}>
                <h4 className={classes.menuItemTitle}>{item.name}</h4>
                <p className={classes.menuItemDescription}>{item.description}</p>
                <p className={classes.menuItemPrice}>{item.price}</p>
              </li>
            );
          })
        ) : (
          <p>This restaurant does not have a menu</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
