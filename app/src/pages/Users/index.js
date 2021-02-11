import React, {useState} from 'react';
import { FaGithub, FaCode, FaSearch,FaTrophy } from "react-icons/fa";
import './style.css';
import api from '../../services/api';

import podium from '../../assets/podio.svg';



export default function UserList(){

    const [searchInput, setSearchInput] = useState('');
    const [userList, setUserList] = useState('');

    async function handleUserList(event){
        event.preventDefault();
        
        try{
            await api.get(`search/users?q=${searchInput}&sort=followers&order=desc`).then(response =>{
               const userList = response.data;
               setUserList(userList);

            });

        }catch(error){
            console.log("erro ao fazer a requisição");
        }

    }



    return(
        <div className="user-list-container">
            <section>
                <div className="header">
                    <div className="back">
                        {/* <Link className="back-link" to='/'>
                            <FaArrowAltCircleLeft  size={16} color="#E02041"/>
                        </Link> */}
                    </div>
                    <div className="title">
                        <FaTrophy size={24} color={"#FED843"}/>
                        <label>User</label>                        
                    </div>
                   
                    <form onSubmit={handleUserList}>
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
                {userList && 
                    <div className="list">                
                        <div className="list-user">
                            <ul>
                                {userList.items.map(user => (
                                    
                                    <li key={user.id}>
                                        <div className="image">
                                            <img src={user.avatar_url} alt="imagem do usuário"></img> 
                                        </div>
                                        <div className="info">

                                            <a href={user.html_url}><label>{user.login}</label></a>
                                            <div className="github-repository-info">
                                                <FaCode size={18} color={"#C98200"}></FaCode>
                                                <label>{user.score}</label>
                                                <FaGithub size={34} color={"#7D5306"}></FaGithub>
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