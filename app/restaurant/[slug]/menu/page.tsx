import type { Metadata } from 'next';

import classes from './ReataurantMenuPage.module.scss';

import RestaurantMenu from '../../components/restaurant-menu/RestaurantMenu';

export const metadata: Metadata = {
  title: 'Reataurant Menu Page',
  description: 'Reataurant Menu Page',
};

export default function ReataurantMenuPage() {
  return (
    <>
      <RestaurantMenu />
    </>
  );
}
