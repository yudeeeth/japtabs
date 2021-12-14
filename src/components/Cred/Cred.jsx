import React, { useState } from 'react';
import Modal from './Modal';
import './Cred.css';


const Cred = (props) => {

    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const [showModal, setshowModal] = useState(false);
    const [modalChildren, setmodalchildren] = useState(<p>Verify email by clicking on mail sent and then login</p>);
    const log_sign = {
        true: {
            title: 'Sign Up',
            emailInput: (<input className="email cred-inp" onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="Email" />),
            buttonText: "Sign Up!",
            linkText: "Already have an account? Log In"
        },
        false: {
            title: 'Login',
            emailInput: '',
            buttonText: "Log in!",
            linkText: "Don't have an account? Sign Up"
        }
    }
    const action = () => {
        if ( password === '' || username === '' ) {
            setmodalchildren(<p>Enter all fields</p>);
            setshowModal(true);
            setTimeout(() => { setshowModal(false); }, 2000);
            return;
        }
        if (props.signupPanel) {
            if ( email === '' ) {
                setmodalchildren(<p>Enter all fields</p>);
                setshowModal(true);
                setTimeout(() => { setshowModal(false); }, 2000);
                return;
            }
            fetch('/signup', {
                headers: { 'content-type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({
                    email, password, username
                })
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.code === 200) {
                        setmodalchildren(<p>Verify email by clicking on mail sent and then login</p>);
                    }
                    else{
                        setmodalchildren(<p>{data.message}</p>);
                    }
                    setshowModal(true);
                        setTimeout(() => {
                            props.setsignupPanel(false);
                            setshowModal(false);
                            setpassword(e => '');
                            setusername(e => ''); setemail(e => '');
                            [...document.getElementsByClassName('cred-inp')]
                                .forEach(element => {
                                    element.value = '';
                                });
                        }, 2000);
                })
        }
        else{
            fetch('/login', {
                headers: { 'content-type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({
                    password, username
                })
            })
                .then(res => res.json())
                .then((data) => {
                    if(data.code===200){
                        console.log("logged in");
                    }
                    else{
                        console.log("login fail try again");
                    }
                    [...document.getElementsByClassName('cred-inp')]
                        .forEach(element => {
                            element.value = '';
                    });
                });
        }
    }

    const animateCSS = (element, animation, prefix = 'animate__') => {
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            setTimeout(()=>{
                props.setsignupPanel(e => !e);
            },250);
            setTimeout(()=>{
                node.classList.add('blank');
            },100);
            setTimeout(()=>{
                node.classList.remove('blank');
            },400);
            node.classList.add(`${prefix}animated`, animationName);
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, { once: true });
        });
    }


    return (
        <div className="login-container animate__faster">
            <h3 className="title">{log_sign[props.signupPanel].title}</h3>
            <Modal show={showModal} children={modalChildren} />
            {log_sign[props.signupPanel].emailInput}
            <input className="username cred-inp" onChange={(e) => { setusername(e.target.value) }} type="text" placeholder="Username" />
            <input className="password cred-inp" onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="Password" />
            <button className="action-button" onClick={action}>{log_sign[props.signupPanel].buttonText}</button>
            <a
                onClick={(e) => { 
                    animateCSS('.login-container','flip')
                }}
                href
            > <u> {log_sign[props.signupPanel].linkText} </u> </a>
        </div>
    )
}

export default Cred;