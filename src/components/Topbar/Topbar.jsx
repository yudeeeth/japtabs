import React from 'react';
import { useAuth } from '../../authcontext';
import { useNavigate } from 'react-router';
import './Topbar.css';

const Topbar = () => {
    const user = useAuth;
    const nav = useNavigate();
    const dropdown = () => {
        const menu = document.querySelector('.topbar-items-container');
        menu.classList.toggle('active');
    }

    const signOut = () => {
        if(!useAuth.isAuth()) return;
        fetch('/logout', {
            headers: { 'content-type': 'application/json' },
            method: 'POST'
        }).then(res => res.json()).then(data => { 
            console.log(data.message)
            useAuth.resetUserInfo();
            localStorage.setItem('isAuth',false);
            nav('/login');
        })
    }

    return (
        <header className="topbar-header">
            <h1 className="topbar-title topbar-items">Japtabs</h1>
            <ul className="topbar-items-container" >
                <li className="topbar-items" >About</li>
                <li className="topbar-items" >Profile</li>
                <li className="topbar-items" onClick={signOut} > Log Out</li>
            </ul>
            <div className="topbar-hamburger" onClick={dropdown}>
                <span className="topbar-bar"></span>
                <span className="topbar-bar"></span>
                <span className="topbar-bar"></span>
            </div>
        </header>
    );
}

export default Topbar;