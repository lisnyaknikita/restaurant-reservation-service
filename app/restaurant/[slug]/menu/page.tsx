import type { Metadata } from 'next';

import classes from './ReataurantMenuPage.module.scss';

import RestaurantMenu from '../../components/restaurant-menu/RestaurantMenu';
import { PrismaClient } from '@prisma/client';
import { IMenu } from '../types';

export const metadata: Metadata = {
  title: 'RRS | Menu | The Yacht Club',
  description: 'The Yacht Club menu page',
};

const prisma = new PrismaClient();

const fetchMenu = async (slug: string): Promise<IMenu[]> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug: slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

export default async function ReataurantMenuPage({ params }: { params: { slug: string } }) {
  const menu = await fetchMenu(params.slug);

  return (
    <>
      <RestaurantMenu slug={params.slug} menu={menu} />
    </>
  );
}
