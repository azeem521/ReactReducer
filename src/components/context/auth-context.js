import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogin:(email,password)=>{},
    onLogout:()=>{}
});
export const AuthContextProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

      const loginHandler=(email,password)=>{
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
      }

    const loguotHandler=()=>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    };

    return <AuthContext.Provider
    value={
        {
            isLoggedIn:isLoggedIn,
            onLogout:loguotHandler,
            onLogin:loginHandler
        }
    }
    >{props.children}</AuthContext.Provider>
}

export default AuthContext;