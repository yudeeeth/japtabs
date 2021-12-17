import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../authcontext';

const NoAuth = ({element}) => {
    const nav = useNavigate();
    useEffect(()=>{
        // console.log(user.userInfo());
        if(useAuth.isAuth()){
            nav('/');
        }
    })
    return element;
}

export default NoAuth;

