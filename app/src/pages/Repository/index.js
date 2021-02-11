import React, {useState} from 'react';
import { FaGithub,FaStar, FaSearch,FaTrophy } from "react-icons/fa";
import './style.css';
import api from '../../services/api';

import podium from '../../assets/podio.svg';


export default function RepositoryList(){

    const [searchInput, setSearchInput] = useState('');
    const [resopitoryList, setResopitoryList] = useState('');

   

    async function handleRepositoryList(event){
        event.preventDefault();
        
        try{
            
            await api.get(`search/repositories?q=${searchInput}&sort=stars&order=desc`).then(response =>{
                const resopitoryList = response.data;
                setResopitoryList(resopitoryList);
            });

        }catch(error){
            console.log("erro ao fazer a requisição");
        }

    }

    return(
        <div className="repository-list-container">
            <section>
                <div className="header">
                    <div className="title">
                        <FaTrophy size={24} color={"#FED843"}/>
                        <label>Repository</label>                        
                    </div>
                   
                    <form onSubmit={handleRepositoryList}>
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
                    
                {resopitoryList && 
                    <div className="list">  
                        <div className="list-repository">
                            <ul>
                                {resopitoryList.items.map(repository => (
                                        
                                    <li key={repository.id}>
                                        <div className="image">
                                            <FaGithub size={84} color={"#C98200"}/>
                                        </div>
                                        <div className="info">
                                            <label>{repository.name}</label>
                                            <div className="github-repository-info">
                                                <FaStar size={18} color={"#C98200"}/>
                                                <label>{repository.stargazers_count}</label>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>                           
                        </div>
                    </div>
                
                }
            </section>
        </div>

        
    );
}