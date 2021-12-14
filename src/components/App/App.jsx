import React,{ useState } from 'react';
import './App.css';
import Cred from '../Cred/Cred';

function App() {
    const [signupPanel, setsignupPanel] = useState(true);
    
    return ( 
    <div className="app-container">
        <Cred {...{signupPanel,setsignupPanel}} />
    </div>    
    );
}

export default App;