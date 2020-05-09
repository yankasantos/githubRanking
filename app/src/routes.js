import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Search from './pages/Search';
import Repository from './pages/Repository';
import Users from './pages/Users';

export default function routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Search}/>
                {/* <Route path='/repository'component={}/>
                <Route path='/users'component={}/> */}
            </Switch>
        </BrowserRouter>
    );
}