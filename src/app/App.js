import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route,
  } from "react-router-dom";
import { selectDarkMode } from "../features/Theme/themeSlice";
import { useSelector } from "react-redux";
import './App.css';
import "../features/Theme/theme.css";
import Header from "../features/Header/Header";
import Home from "../features/Home/Home";
import SearchResults from "../features/SearchResults/SearchResults";
import SubredditsAside from "../features/SubredditsAside/SubredditAside";
import Subreddit from "../features/Subreddit/Subreddit";
import NotFoundPage from '../features/NotFoundPage/NotFoundPage';


function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <BrowserRouter>
      <div id="app-container" className={darkMode ? "dark" : "light"}>
          <Header />
         
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/r/:id" element={ <Subreddit />  } />
              <Route path="/search/:id" element={ <SearchResults />  }/>
              <Route element={ <NotFoundPage /> } />
            </Routes>
          </main>

          <aside>
            <SubredditsAside />
          </aside>
          
      </div>
    </BrowserRouter>
  );
}

export default App;