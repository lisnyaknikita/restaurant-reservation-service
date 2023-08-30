import type { Metadata } from 'next';

import classes from './RestaurantDetailsPage.module.scss';

import { IRestaurantDetails } from './types';

import { PrismaClient } from '@prisma/client';

import Block1 from '../components/description-block-1/Block1';
import Block2 from '../components/description-block-2/Block2';

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string): Promise<IRestaurantDetails> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
};

export default async function RestaurantDetailsPage({ params }: { params: { slug: string } }) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <div className={classes.blocks}>
      <Block1 restaurant={restaurant} />
      <Block2 />
    </div>
  );
}
