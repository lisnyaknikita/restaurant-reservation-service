import type { Metadata } from 'next';

import classes from './RestaurantDetailsPage.module.scss';

import RestaurantDescription from '../components/restaurant-description/RestaurantDescription';

export default function RestaurantDetailsPage() {
  return (
    <>
      <RestaurantDescription />
    </>
  );
}
