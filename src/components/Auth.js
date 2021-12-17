import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../authcontext';

const Auth = ({ element }) => {
    const nav = useNavigate();
    const loc = useLocation();
    useEffect(() => {
        // console.log(user.userInfo());
        if (!useAuth.isAuth()) {
            nav('/login');
        }
    })
    return element;
}

export default Auth;
