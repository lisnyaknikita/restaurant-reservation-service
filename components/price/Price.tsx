import classes from './Price.module.scss';
import { PRICE } from '@prisma/client';

const Price = ({ price }: { price: PRICE }) => {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span className={classes.dark}>$$</span>
          <span className={classes.light}>$$</span>
        </>
      );
    }
    if (price === PRICE.REGULAR) {
      return (
        <>
          <span className={classes.dark}>$$$</span>
          <span className={classes.light}>$</span>
        </>
      );
    }
    if (price === PRICE.EXPENSIVE) {
      return (
        <>
          <span className={classes.dark}>$$$$</span>
        </>
      );
    }
  };

  return renderPrice();
};

export default Price;
