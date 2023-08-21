import { FC } from 'react';

import classes from './Cards.module.scss';

import CardItem from './card-item/CardItem';

const Cards: FC = () => {
  return (
    <ul className={classes.cardsList}>
      <CardItem />
      <CardItem />
    </ul>
  );
};

export default Cards;
