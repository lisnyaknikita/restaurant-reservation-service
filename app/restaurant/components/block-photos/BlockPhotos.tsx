import { FC } from 'react';
import Image from 'next/image';

import classes from './BlockPhotos.module.scss';

interface IBlockPhotosProps {
  photos: string[];
}

const BlockPhotos: FC<IBlockPhotosProps> = ({ photos }) => {
  return (
    <>
      <h3 className={classes.photosTitle}>
        {photos.length} photo{photos.length > 1 && 's'}
      </h3>
      <div className={classes.photos}>
        {photos.map((photo, i) => (
          <Image className={classes.photoItem} src={`${photo}`} width={210} height={200} alt='Picture of the author' />
        ))}
      </div>
    </>
  );
};

export default BlockPhotos;
