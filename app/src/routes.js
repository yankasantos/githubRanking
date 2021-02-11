import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Search from './pages/Search';
import Repository from './pages/Repository';
import User from './pages/Users';

export default function routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Search}/>
                <Route path='/repository'component={Repository}/>
                <Route path='/users'component={User}/>
            </Switch>
        </BrowserRouter>
    );
}