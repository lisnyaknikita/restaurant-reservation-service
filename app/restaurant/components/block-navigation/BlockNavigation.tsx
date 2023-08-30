import { FC } from 'react';

import classes from './BlockNavigation.module.scss';
import Link from 'next/link';

interface IBlockNavProps {
  slug: string;
}

const BlockNavigation: FC<IBlockNavProps> = ({ slug }) => {
  return (
    <nav className={classes.blockNavigation}>
      <ul className={classes.navigationList}>
        <li className={classes.navigationItem}>
          <Link href={`/restaurant/${slug}`}>Overview</Link>
        </li>
        <li className={classes.navigationItem}>
          <Link href={`/restaurant/${slug}/menu`}>Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BlockNavigation;
