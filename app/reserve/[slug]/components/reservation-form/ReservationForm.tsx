import { FC } from 'react';

import classes from './ReservationForm.module.scss';

const ReservationForm: FC = () => {
  return (
    <form className={classes.form}>
      <input className={classes.input} type='text' placeholder='First name' />
      <input className={classes.input} type='text' placeholder='Last name' />
      <input className={classes.input} type='text' placeholder='Phone number' />
      <input className={classes.input} type='text' placeholder='Email' />
      <input className={classes.input} type='text' placeholder='Occasion(optional)' />
      <input className={classes.input} type='text' placeholder='Requests(optional)' />
      <button type='submit' className={classes.button}>
        Complete reservation
      </button>
      <p className={classes.agreement}>
        By clicking “Complete reservation” you agree to the Restaurant Reservation Terms of Use and Privacy Policy. Message & data rates may
        apply. You can opt out of receiving text messages at any time in your account settings or by replying STOP.
      </p>
    </form>
  );
};

export default ReservationForm;
