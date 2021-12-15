import React, { useState } from 'react';
import './App.css';
import Cred from '../Cred/Cred';

function App() {
    const [signupPanel, setsignupPanel] = useState(false);

    const signOut = () => {
        let auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.debug('User signed out.');
        });
        fetch('/logout',{
            headers:{'content-type':'application/json'},
            method:'POST'
        }).then(res=>res.json()).then(data=>{console.log(data.message)})
    }

    return (
        <div className="app-container">
            <button onClick={signOut}>Sign Out</button>
            <Cred {...{ signupPanel, setsignupPanel }} />
        </div>
    );
}

export default App;