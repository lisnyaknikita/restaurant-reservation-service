import { FC } from 'react';

import classes from './Cards.module.scss';

import CardItem from './card-item/CardItem';
import { ICards } from './types';

const Cards: FC<ICards> = ({ restaurants }) => {
  return (
    <ul className={classes.cardsList}>
      {restaurants.map((restaurant) => (
        <CardItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default Cards;
