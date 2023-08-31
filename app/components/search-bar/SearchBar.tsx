'use client';
import { FC, FormEvent, useState } from 'react';

import classes from './SearchBar.module.scss';

import { useRouter } from 'next/navigation';

const SearchBar: FC = () => {
  const router = useRouter();

  const [location, setLocation] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!location.length) return;
    router.push(`/search?city=${location}`);
    setLocation('');
  };

  //TODO: сделать общий компонент блока с поиском и на главной странице, и на странице поиска, но в зависимости от пропсов добавлять/удалять заголовок

  return (
    <form className={classes.form} onSubmit={handleSearch}>
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
