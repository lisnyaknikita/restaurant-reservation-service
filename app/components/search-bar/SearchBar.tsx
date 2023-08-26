'use client';
import { FC, useState } from 'react';

import classes from './SearchBar.module.scss';

import { useRouter } from 'next/navigation';

const SearchBar: FC = () => {
  const router = useRouter();

  const [location, setLocation] = useState('');

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (location === 'banana') return;
        router.push('/search');
      }}
    >
      <input
        className={classes.inputField}
        type='text'
        placeholder='State, city or town'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type='submit' className={classes.button}>
        Let's go
      </button>
    </form>
  );
};

export default SearchBar;
