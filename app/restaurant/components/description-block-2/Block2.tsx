import { FC } from 'react';

import classes from './Block2.module.scss';

const Block2: FC = () => {
  return (
    <div className={classes.block2}>
      <h2 className={classes.blockTitle}>Make a reservation</h2>
      <div className={classes.partySize}>
        <label htmlFor=''>Party size</label>
        <select name='' className={classes.partySizeSelect} id=''>
          <option value=''>1 person</option>
          <option value=''>2 people</option>
        </select>
      </div>
      <div className={classes.dateTime}>
        <div className={classes.date}>
          <label htmlFor=''>Date</label>
          <input type='text' className='py-3 border-b font-light w-28' placeholder='Enter the date...' />
        </div>
        <div className={classes.time}>
          <label htmlFor=''>Time</label>
          <select name='' id='' className={classes.timeSelect}>
            <option value=''>7:30 AM</option>
            <option value=''>9:30 AM</option>
          </select>
        </div>
      </div>
      <button className={classes.button}>Find a Time</button>
    </div>
  );
};

export default Block2;
