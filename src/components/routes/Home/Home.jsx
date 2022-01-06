import React from 'react';
import './Home.css';
import {useAuth} from "../../../authcontext";

import Card from '../../card/card';
const Home = () => {

    return (
        <div className="home-container">
            <Card data={{type:"kanji"}}/>
        </div>
    )
}

export default Home;
