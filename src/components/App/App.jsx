import React, { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../../authcontext';
import './App.css';

import Cred from '../Cred/Cred';
import Topbar from '../Topbar/Topbar';
import Home from '../routes/Home/Home';
import Auth from '../Auth';
import NoAuth from '../noAuth';

function App() {

    const [signupPanel, setsignupPanel] = useState(false);
    useEffect(() => {
        fetch('/isAuth').then(res => res.json()).then(data => {
            if(data.loggedIn){
                useAuth.setUserInfo(data);
                useAuth.setAuth(true);
            }
            else{
                useAuth.setAuth(false);
            }
        })
    })
    return (
        <div className="app-container">
            <Topbar />
            <Routes>
                <Route path="/" 
                // element={ <Auth element={<Home />} /> }
                element={<Home />}
                />
                <Route path="/login" element={ <NoAuth element={<Cred {...{ signupPanel, setsignupPanel }} />} /> }/>
            </Routes>
        </div>
    );
}

export default App;