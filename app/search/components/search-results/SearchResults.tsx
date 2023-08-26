import { FC } from 'react';
import Image from 'next/image';

import classes from './SearchResults.module.scss';
import RestaurantCard from '../restaurant-card/RestaurantCard';

const SearchResults: FC = () => {
  return (
    <div className={classes.searchCards}>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

export default SearchResults;
