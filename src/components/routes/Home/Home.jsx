import React from 'react';
import './Home.css';
import {useAuth} from "../../../authcontext";

const Home = () => {
    const user = useAuth;
    return (
        <div className="home-container">
            {JSON.stringify(user.userInfo)}
        </div>
    )
}

export default Home
