import React,{ useState } from 'react';
import './App.css';

function App() {
    const [signupPanel, setsignupPanel] = useState(true);
    const credentialsPanel = () => {
        if(signupPanel){
            return (
                <div>
                    <input type="email" name="" id="" />
                    <input type="text" name="" id="" />
                    <input type="password" name="" id="" />
                    <button> sign up </button>
                    <a onClick={()=>{setsignupPanel(e=>!e)}}>Already have an account? Log In</a>
                </div>
            )
        }
        else{
            return (
                <div>
                    <input type="email" name="" id="" />
                    <input type="password" name="" id="" />
                    <button> log in </button>
                    <a onClick={()=>{setsignupPanel(e=>!e)}}>Don't have an account? Sign Up</a>
                </div>
            )
        }
    }
    const topbar = () => {
        
    }
    return ( 
    <div className="appContainer">
        {credentialsPanel()}
    </div>    
    );
}

export default App;