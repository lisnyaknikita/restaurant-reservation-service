import { NextPage } from 'next';

import classes from './Search.module.scss';

import Header from '@/components/header/Header';
import SearchFindBox from './components/search-find-box/SearchFindBox';
import SearchFilters from './components/search-filters/SearchFilters';
import SearchResults from './components/search-results/SearchResults';

const SearchPage: NextPage = () => {
  return (
    <div className='min-h-screen min-w-ful'>
      <Header />
      <main>
        <SearchFindBox />
        <div className={classes.searchContent}>
          <SearchFilters />
          <SearchResults />
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
