import FindBox from './components/find-box/FindBox';
import Cards from './components/cards/Cards';
import { PrismaClient } from '@prisma/client';
import { ICard } from './components/cards/types';

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<ICard[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <FindBox />
      <Cards restaurants={restaurants} />
    </>
  );
}
