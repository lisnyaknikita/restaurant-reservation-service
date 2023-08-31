import { NextPage } from 'next';
import type { Metadata } from 'next';

import classes from './Search.module.scss';

import SearchFindBox from './components/search-find-box/SearchFindBox';
import SearchFilters from './components/search-filters/SearchFilters';
import SearchResults from './components/search-results/SearchResults';
import { Location, PrismaClient } from '@prisma/client';

export const metadata: Metadata = {
  title: 'RRS | Search',
  description: "Discover the perfect dining destination with our Restaurant Reservation Service's advanced search feature",
};

const prisma = new PrismaClient();

const fetchSearchResult = async (city: string) => {
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    // select: {
    //   name: true,
    //   main_image: true,
    //   price: true,
    //   cuisine: true,
    //   location: true,
    // },
  });

  if (!restaurants) {
    throw new Error();
  }

  return restaurants;
};

export default async function SearchPage({ searchParams }: { searchParams: { city: string } }) {
  const restaurants = await fetchSearchResult(searchParams.city);

  console.log(restaurants);

  return (
    <>
      <SearchFindBox />
      <div className={classes.searchContent}>
        <SearchFilters />
        <SearchResults />
      </div>
    </>
  );
}
