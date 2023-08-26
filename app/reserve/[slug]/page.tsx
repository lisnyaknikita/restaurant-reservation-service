import type { Metadata } from 'next';

import classes from './ReservationPage.module.scss';

import ReservedRestaurant from './components/reserved-restaurant/ReservedRestaurant';
import ReservationForm from './components/reservation-form/ReservationForm';

export const metadata: Metadata = {
  title: 'RRS | Reserve | The Yacht Club',
  description: 'The Yacht Club reservation Page',
};

export default function ReservationPage() {
  return (
    <div className={classes.reservationInner}>
      <h1 className={classes.title}>You are almost done!</h1>
      <ReservedRestaurant />
      <ReservationForm />
    </div>
  );
}
