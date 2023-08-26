import type { Metadata } from 'next';

import classes from './RestaurantDetailsPage.module.scss';

import RestaurantName from '../components/restaurant-name/RestaurantName';
import RestaurantDescription from '../components/restaurant-description/RestaurantDescription';

export const metadata: Metadata = {
  title: 'Restaurant Details Page',
  description: 'Restaurant Details Page',
};

export default function RestaurantDetailsPage() {
  return (
    <>
      <RestaurantName />
      <RestaurantDescription />
    </>
  );
}
