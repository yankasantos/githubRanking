import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FaGithub,FaStar, FaSearch,FaCircle } from "react-icons/fa";
import './style.css';
import api from '../../services/api';

import logo from '../../assets/github.svg';

export default function Search(){
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory('');

    async function handleSearch(event){

    }


    return(
        <div className="search-container">
            <section className="form">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h1>Github Ranking</h1>                    
                </div>
                <form>
                    <input type="text" value={searchInput} onChange={event => setSearchInput(event.target.value)}/>
                    <button type="submit" className="searchIcon">
                        <FaSearch  size={16} color="#C98200"/>
                    </button>
                </form>
            </section>
        </div>
    );
}