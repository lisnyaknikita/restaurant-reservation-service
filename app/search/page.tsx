import { NextPage } from 'next';
import type { Metadata } from 'next';

import classes from './Search.module.scss';

import SearchFindBox from './components/search-find-box/SearchFindBox';
import SearchFilters from './components/search-filters/SearchFilters';
import SearchResults from './components/search-results/SearchResults';

export const metadata: Metadata = {
  title: 'RRS | Search',
  description: "Discover the perfect dining destination with our Restaurant Reservation Service's advanced search feature",
};

const SearchPage: NextPage = () => {
  return (
    <>
      <SearchFindBox />
      <div className={classes.searchContent}>
        <SearchFilters />
        <SearchResults />
      </div>
    </>
  );
};

export default SearchPage;
