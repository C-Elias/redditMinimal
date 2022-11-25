import React, { useEffect } from "react";
import "./SearchResults.css";
import Card from "../../app/components/Card/Card";
import Post from "../Post/Post";
import PostLoading from "../Post/PostLoading";
import { AnimatedList } from "react-animated-list";
import { useDispatch, useSelector } from "react-redux";
import {
  loadSearchResults,
  selectPosts,
  selectIsLoading,
} from "../../app/appSlice";
import { setCurrentSubreddit } from "../SubredditsAside/SubredditAsideSlice";
import { setCurrentFilter } from "../Filters/filtersSlice";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(setCurrentFilter("hot"));
    dispatch(setCurrentSubreddit("searchresults"));
    dispatch(loadSearchResults(id));
    console.log("fetching search results posts", useParams);
  }, [dispatch, id]);
  return (
    <>
      <Card className="search-heading">
        <h2>Search results for "{id}"</h2>
      </Card>
      {isLoading ? (
        <AnimatedList>
          <PostLoading />
          <PostLoading />
          <PostLoading />
        </AnimatedList>
      ) : (
        posts.map((post, index) => (
          <Post key={index} post={post} postIndex={index} />
          ))
          )}
    </>
  );
};

console.log(loadSearchResults);
console.log(SearchResults); 
export default SearchResults;
