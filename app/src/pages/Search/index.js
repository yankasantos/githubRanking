import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FaGithub,FaStar, FaSearch,FaCode, FaBars, FaTrophy } from "react-icons/fa";
import './style.css';
import api from '../../services/api';

import logo from '../../assets/github.svg';
import ilustration from '../../assets/popularity.svg';
import repositoryImage from '../../assets/computer.svg';

export default function Search(){
    const [searchInput, setSearchInput] = useState('');
    const [userList, setUserList] = useState('');
    const [resopitoryList, setResopitoryList] = useState('');

    async function handleSearchList(event){
        event.preventDefault();
        
        try{
            await api.get(`search/users?q=${searchInput}&sort=followers&order=desc`).then(response =>{
               const userList = response.data;
               setUserList(userList);

            });

            await api.get(`search/repositories?q=${searchInput}&sort=stars&order=desc`).then(response =>{
                const resopitoryList = response.data;
                setResopitoryList(resopitoryList);
            });

        }catch(error){
            console.log("erro ao fazer a requisição");
        }

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
                <form onSubmit={handleSearchList}>
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
                    {userList && 
                        <div className="list-users">
                            <ul>
                                {userList.items.map(user => (                                    
                                    <li key={user.id}>                                    
                                        <div className="image">
                                            <img src={user.avatar_url} alt="imagem do usuário"></img> 
                                        </div>
                                        <div className="info">
                                        <a href={user.html_url}><label>{user.login}</label></a>
                                            <div className="github-user-info">
                                                <FaCode size={18} color={"#C98200"}></FaCode>
                                                <label>{user.score}</label>
                                                <FaGithub size={34} color={"#7D5306"}></FaGithub>
                                            </div>
                                        </div>
                                    </li>                                    
                                ))}
                            </ul>
                        </div>
                    }
                    
                    {resopitoryList && 
                        <div className="list-repository">
                            <ul>
                                {resopitoryList.items.map(repository => (
                                        
                                    <li key={repository.id}>
                            
                                        <div className="image">
                                            <img src={repositoryImage} alt="imagem da nuvem sincronizando com setas formando um circulo"></img> 
                                        </div>
                                        <div className="info">
                                            <label>{repository.name}</label>
                                            <div className="github-user-info">
                                                <FaStar size={18} color={"#C98200"}></FaStar>
                                                <label>{repository.stargazers_count}</label>
                                                <FaGithub size={34} color={"#7D5306"}></FaGithub>
                                            </div>
                                        </div>
                                    </li>
                                 ))}                            
                            </ul>
                        </div>
                    }
                    <div className="ilustration">
                        <img src={ilustration} alt="gráfico mostrando a estrela subindo"/>
                    </div>
                </div> 
                            

            </section>
        </div>
    );
}