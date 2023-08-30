import { FC } from 'react';

import classes from './RestaurantName.module.scss';

interface IRestaurantNameProps {
  name: string;
}

const RestaurantName: FC<IRestaurantNameProps> = ({ name }) => {
  const renderName = () => {
    const nameArray = name.split('-');

    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;

    return nameArray.join(' ');
  };

  return (
    <div className={classes.boxWrapper}>
      <h1 className={classes.title}>{renderName()}</h1>
    </div>
  );
};

export default RestaurantName;
