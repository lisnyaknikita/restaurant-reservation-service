import type { Metadata } from 'next';

import classes from './ReataurantMenuPage.module.scss';

import RestaurantMenu from '../../components/restaurant-menu/RestaurantMenu';

export const metadata: Metadata = {
  title: 'RRS | Menu | The Yacht Club',
  description: 'The Yacht Club menu page',
};

export default function ReataurantMenuPage() {
  return (
    <>
      <RestaurantMenu />
    </>
  );
}
