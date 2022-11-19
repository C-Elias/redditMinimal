import React from 'react';
import './Header.css';
import ThemeSwitch from '../Theme/ThemeSwitch';
import Search from '../Search/Search';
import { FaReddit } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BsPerson} from "react-icons/bs";


const Header = () => {


    return (
        <header>
            <div id="header-main-half"> 
                <a href="/" >
                    <div className="logo-container">
                            <FaReddit className="logo" />
                            <h1>Reddit</h1>
                            <h2>Minimal</h2>
                    </div>
                </a>
                <Search className="search-component" />
            </div>
            <div id="theme-switch">
                <ThemeSwitch />
                <a href="https://github.com/C-Elias" className="github-link">
                    <AiFillGithub />
                </a>
                 <a href="https://eliasc.dev/" className="github-link">
                    <BsPerson />
                </a>
            </div>
            
            
        </header>
    )
}

export default Header;