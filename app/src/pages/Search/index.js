import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FaGithub,FaStar, FaSearch,FaCode, FaBars, FaTrophy } from "react-icons/fa";
import './style.css';
import api from '../../services/api';

import logo from '../../assets/github.svg';
import userImage from '../../assets/women.svg';
import userImage2 from '../../assets/women-2.svg';
import ilustration from '../../assets/popularity.svg';
import repositoryImage from '../../assets/computer.svg';

export default function Search(){
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory('');
    

    // useEffect(() => {request, response}, []);

    
    async function handleSearch(event){
        event.preventDefault();

    }


    return(
        <div className="search-container">
            <section className="form">
                <div className="menu">
                    <button><FaBars size={36} color={"#C98200"}/></button>
                    <div className="list-page">
                        <ul>
                            <li>
                                <Link to="/users">
                                    <FaTrophy size={14} color={"#FED843"}/>
                                    <label>User</label> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/repository">
                                    <FaTrophy size={14} color={"#FED843"}/>
                                    <label>Repository</label> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h1>Github Ranking</h1>                    
                </div>
                <form>
                    <div className="filtro-Search">
                        {/* <input type="radio" name="user" value={user}/> */}
                        <Link to="/users">
                            <FaTrophy size={14} color={"#FED843"}/>
                            <label>User</label> 
                        </Link>
                        {/* <input type="radio" name="repository" value={repository}/> */}
                        <Link to="/repository">
                            <FaTrophy size={14} color={"#FED843"}/>
                            <label>Repository</label> 
                        </Link>
                    </div>
                    <div className="input-search">
                        <input type="text" value={searchInput} onChange={event => setSearchInput(event.target.value)}/>
                        <button type="submit" className="searchIcon">
                            <FaSearch  size={16} color="#C98200"/>
                        </button>
                    </div>
                </form>
                <div className="list">
                    <div className="list-users">
                        <ul>
                            <li>
                                <div className="image">
                                    <img src={userImage} alt="imagem do usuário"></img> 
                                </div>
                                <div className="info">
                                    <label>Yanka Santos</label>
                                    <div className="github-user-info">
                                        <FaCode size={18} color={"#C98200"}></FaCode>
                                        <label>97925</label>
                                        <FaGithub size={34} color={"#7D5306"}></FaGithub>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="image">
                                    <img src={userImage2} alt="imagem do usuário"></img> 
                                </div>
                                <div className="info">
                                    <label>Yanka Santos</label>
                                    <div className="github-user-info">
                                        <FaCode size={18} color={"#C98200"}></FaCode>
                                        <label>1295</label>
                                        <FaGithub size={34} color={"#7D5306"}></FaGithub>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="list-repository">
                         <ul>
                            <li>
                                <div className="image">
                                    <img src={repositoryImage} alt="imagem do usuário"></img> 
                                </div>
                                <div className="info">
                                    <label>BeTheHero</label>
                                    <div className="github-user-info">
                                        <FaStar size={18} color={"#C98200"}></FaStar>
                                        <label>53902</label>
                                        <FaGithub size={34} color={"#7D5306"}></FaGithub>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="image">
                                    <img src={repositoryImage} alt="imagem do usuário"></img> 
                                </div>
                                <div className="info">
                                    <label>Be-The-Hero</label>
                                    <div className="github-user-info">
                                        <FaStar size={18} color={"#C98200"}></FaStar>
                                        <label>4482</label>
                                        <FaGithub size={34} color={"#7D5306"}></FaGithub>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="ilustration">
                        <img src={ilustration} alt="gráfico mostrando a estrela subindo"/>
                    </div>
                </div>            

            </section>
        </div>
    );
}