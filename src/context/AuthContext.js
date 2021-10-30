import { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({loading: true, data: null })
    


    useEffect(() => {

        setAuth({loading: false, data: JSON.parse(window.localStorage.getItem("authData"))});
    }, [])

    useEffect(() => {
        window.localStorage.setItem("authData", JSON.stringify(auth.data));
    }, [auth.data])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
