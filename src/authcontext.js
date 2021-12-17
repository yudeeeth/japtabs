// import React,{useState,useEffect} from 'react';

// const AuthContext = React.createContext();

// const AuthProvider = props => {

//     const [userInfo,setUserInfo] = useState({});
//     useEffect(() => {
//         fetch('/isloggedin').then(res=>res.json()).then((data)=>{
//             if(data.loggedIn){
//                 setUserInfo(e=>({...e,...data}));
//             }
//             else{
//                 setUserInfo({
//                     loggedIn: false,
//                     email : '',
//                     username : '',
//                     gid: '',
//                     mastered:{},
//                     progress:{},
//                     config:{},
//                     cardsId: {}
//                 });
//             }
//         })
//     });
//     const changeUserInfo = (obj) => {
//         setUserInfo( e => ({...e,...obj}));
//     }
//     const resetUserInfo = () => {
        // setUserInfo({
        //     loggedIn: false,
        //     email : '',
        //     username : '',
        //     gid: '',
        //     mastered:{},
        //     progress:{},
        //     config:{},
        //     cardsId: {}
        // });
//     }
//     const authContextValue = {
//         userInfo,
//         setUserInfo,
//         changeUserInfo,
//         resetUserInfo
//     }
//     return <AuthContext.Provider value={authContextValue} {...props} />;
// }

// const useAuth = () => React.useContext(AuthContext);
// import {useEffect} from 'react';

// useEffect(()=>{
//     if(!localStorage.getItem('isAuth')){
//         useAuth.resetUserInfo();
//     }
// })

const useAuth = {
    isAuth: () => {
        if(localStorage.getItem('isAuth')===null){
            return false;
        }
        return JSON.parse(localStorage.getItem('isAuth'));
    },
    setAuth: (val) => {
        localStorage.setItem('isAuth',val);
        
    },
    userInfo : ()=>{
        return JSON.parse(localStorage.getItem('user'));
    },
    changeUserInfo : (obj) => {
        localStorage.setItem('user',JSON.stringify({
            ...JSON.parse(localStorage.getItem('user')),
            ...obj
        }));
    },
    resetUserInfo : () => {
        localStorage.setItem('user',JSON.stringify({}));
    },
    setUserInfo : (obj) => {
        localStorage.setItem('user',JSON.stringify(obj));
    }
}

!localStorage.getItem('isAuth') && useAuth.setUserInfo({
    loggedIn: false,
    email : '',
    username : '',
    gid: '',
    mastered:{},
    progress:{},
    config:{},
    cardsId: {}
});

export { useAuth };