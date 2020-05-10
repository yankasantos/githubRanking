import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FaGithub,FaStar, FaCode, FaSearch,FaTrophy } from "react-icons/fa";
import './style.css';
import api from '../../services/api';

import podium from '../../assets/podio.svg';
import userImage from '../../assets/women.svg';
import userImage2 from '../../assets/man.svg';


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
                        <label>User</label>                        
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
                    <div className="list-user">
                        <ul>
                            <li>
                                <div className="image">
                                    <img src={userImage} alt="imagem do usuário"></img> 
                                </div>
                                <div className="info">
                                    <label>Yanka Santos</label>
                                    <div className="github-repository-info">
                                        <FaCode size={18} color={"#C98200"}></FaCode>
                                        <label>9845</label>
                                        <FaGithub size={34} color={"#7D5306"}></FaGithub>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="image">
                                <img src={userImage2} alt="imagem do usuário"></img> 
                                </div>
                                <div className="info">
                                    <label>Renato Lélis</label>
                                    <div className="github-repository-info">
                                        <FaCode size={18} color={"#C98200"}></FaCode>
                                        <label>295</label>
                                        <FaGithub size={34} color={"#7D5306"}></FaGithub>
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