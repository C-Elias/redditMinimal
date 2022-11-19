import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import searchReducer from '../features/Search/searchSlice';
import themeReducer from '../features/Theme/themeSlice';
import filtersReducer from '../features/Filters/filtersSlice';
import subredditsAsideReducer from '../features/SubredditsAside/SubredditAsideSlice';


export const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    theme: themeReducer,
    subredditsAside: subredditsAsideReducer,
    filters: filtersReducer,
  },
});
