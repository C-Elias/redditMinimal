import React from 'react';
import './Filters.css';
import { Link } from 'react-router-dom';
import Card from '../../app/components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setCurrentFilter, selectCurrentFilter } from './filtersSlice';
import { loadPostsHot, loadPostsNew, loadPostsTop, } from '../../app/appSlice';
import { selectCurrentSubreddit } from '../SubredditsAside/SubredditAsideSlice';
// import capitalizeFirstLetter from '../../utils/capitaliseFirstLetter';
import { AiFillFire } from "react-icons/ai";
import { GiNewBorn } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";

const Filters = ( {type} ) => {
    const filters = useSelector(selectFilters);
    const currentFilter = useSelector(selectCurrentFilter);
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const dispatch = useDispatch();

    const HotIcon = props => {
        return (
          <div>
            <AiFillFire/>
            <div className='icontext'>Hot</div>
          </div>
        )
      }

      const NewIcon = props => {
        return (
          <div>
            <GiNewBorn text="New"/>
            <div className='icontext'>New</div>
          </div>
        )
      }

      const TopIcon = props => {
        return (
          <div className="icons">
            <FaChartLine />
            <div className="icontext">Top</div>
          </div>
        )
      }
    
    const icons = {
        hot: <HotIcon className="icons"/>,
        new: <NewIcon className="icons"/>,
        top: <TopIcon className="icons"/>,
    };

    const onClickHandler = (event, filter) => {
        event.preventDefault();
        dispatch(setCurrentFilter(filter));
        switch (filter) {
            case 'hot':
                console.log("Displaying the " + filter + " search filter");
                console.log(currentSubreddit);
                dispatch(loadPostsHot(currentSubreddit));
                break;
            case 'new':
                console.log("Displaying the " + filter + " search filter");
                dispatch(loadPostsNew(currentSubreddit));
                break;
            case 'top':
                console.log("Displaying the " + filter + " search filter");
                dispatch(loadPostsTop(currentSubreddit));
                break;
            default:
                return;
        }
    }

    const createFilterLink = (filter) => {
        return (
            <li key={filter}>
                <Link 
                    className={currentFilter === filter ? "nav-link selected" : "nav-link"}
                    to="#"
                    onClick={(event) => {onClickHandler(event, filter)}}
                >
                    {icons[filter]}
                    {/* {capitalizeFirstLetter(filter)} */}
                </Link>
            </li>
        )
    }

    return (
        <Card className="filters-card">
            <nav>
                <ul className="filters-list" >
                    {filters.map(createFilterLink)}
                </ul>  
            </nav>
        </Card> 
    )
}

export default Filters;