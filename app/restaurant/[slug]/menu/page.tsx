import type { Metadata } from 'next';

import classes from './ReataurantMenuPage.module.scss';

import Header from '@/components/header/Header';
import RestaurantName from '@/components/restaurant-name/RestaurantName';
import RestaurantMenu from '@/components/restaurant-menu/RestaurantMenu';

export const metadata: Metadata = {
  title: 'Reataurant Menu Page',
  description: 'Reataurant Menu Page',
};

export default function ReataurantMenuPage() {
  return (
    <div className='min-h-screen min-w-ful'>
      <Header />
      <main>
        <RestaurantName />
        <RestaurantMenu />
      </main>
    </div>
  );
}
