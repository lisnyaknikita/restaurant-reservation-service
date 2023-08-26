import type { Metadata } from 'next';

import classes from './ReservationPage.module.scss';

import Header from '@/components/header/Header';
import ReservedRestaurant from './components/reserved-restaurant/ReservedRestaurant';
import ReservationForm from './components/reservation-form/ReservationForm';

export const metadata: Metadata = {
  title: 'Reservation Page',
  description: 'Reservation Page',
};

export default function ReservationPage() {
  return (
    <div className='min-h-screen min-w-ful'>
      <Header />
      <main className={classes.reservationInner}>
        <h1 className={classes.title}>You are almost done!</h1>
        <ReservedRestaurant />
        <ReservationForm />
      </main>
    </div>
  );
}
