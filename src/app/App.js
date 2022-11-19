import React from 'react';
import { BrowserRouter, Link, Routes, Route, Router} from "react-router-dom";
import { selectDarkMode } from "../features/Theme/themeSlice";
import { useSelector } from "react-redux";
import './App.css';
import "../features/Theme/theme.css";
import Header from "../features/Header/Header";
import Home from "../features/Home/Home";
import SearchResults from "../features/SearchResults/SearchResults";
import SubredditsAside from "../features/SubredditsAside/SubredditAside";
import Subreddit from "../features/Subreddit/Subreddit";


function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <BrowserRouter>
      <div id="app-container" className={darkMode ? "dark" : "light"}>
          <Header />

          <main>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/r/:id" component={Subreddit} />
            <Route path="/search/:id" component={SearchResults} />
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