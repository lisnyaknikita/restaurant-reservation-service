import { NextPage } from 'next';

import classes from './Search.module.scss';

import SearchFindBox from './components/search-find-box/SearchFindBox';
import SearchFilters from './components/search-filters/SearchFilters';
import SearchResults from './components/search-results/SearchResults';

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
