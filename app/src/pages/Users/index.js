import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FaGithub,FaStar, FaSearch,FaTrophy } from "react-icons/fa";
import './style.css';
import api from '../../services/api';

import podium from '../../assets/podio.svg';


export default function UserList(){

    const [searchInput, setSearchInput] = useState('');
    // const history = useHistory('');
    // async function handleUserList(event){


    //     history.push();
    // }

    return(
        <div className="user-list-container">
            <section>
                <div className="header">
                    <div className="title">
                        <FaTrophy size={24} color={"#FED843"}/>
                        <label>Repository</label>                        
                    </div>
                   
                    <form>
                        <div className="input-search">
                            <input type="text" value={searchInput} onChange={event => setSearchInput(event.target.value)}/>
                            <button type="submit" className="searchIcon">
                                <FaSearch  size={16} color="#C98200"/>
                            </button>
                        </div>
                    </form>                
                </div>
                <div className="podium">
                    <img src={podium} alt="podio com cada posição ocupada por uma estrela"/>
                </div>

                <div className="list">                
                    <div className="list-repository">
                        <ul>
                            <li>
                                <div className="image">
                                    <FaGithub size={84} color={"#C98200"}/>
                                </div>
                                <div className="info">
                                    <label>BeTheHero</label>
                                    <div className="github-repository-info">
                                        <FaStar size={18} color={"#C98200"}/>
                                        <label>9737707</label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="image">
                                    <FaGithub size={84} color={"#C98200"}/>
                                </div>
                                <div className="info">
                                    <label>Be-The-Hero</label>
                                    <div className="github-repository-info">
                                        <FaStar size={18} color={"#C98200"}/>
                                        <label>9737707</label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        
    );
}