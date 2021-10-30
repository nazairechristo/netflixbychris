import React, { createContext, useEffect, useState } from "react";
import axios from "axios";




export const ListContext = createContext([]);

const ListProvider = ({children}) => {
    
    const [listFetch, setListFetch] = useState([{type: 'serie', data:null}]);
   
    console.log(listFetch.data);
    
    useEffect(() => {
        const getList = async () => {
            const AUTH = await JSON.parse(window.localStorage.getItem("authData"));
            let token = '';

            if(AUTH !== null) {
                token = "Bearer " + AUTH.accessToken;
                
            }
            const BASE_URL = process.env.REACT_APP_DOMAIN_API;
            const URL = `${BASE_URL}/api/lists?type=${listFetch.type}`;
    
            await axios.get(URL,{
                headers: {
                    token:token
                }
            })
                .then((res) => setListFetch({type: 'serie',data: res.data}))
                .catch((err) => console.log(err))
            
            
        }

        getList();

    }, [listFetch.type])


    console.log(listFetch)

    return (
        <ListContext.Provider value={{listFetch, setListFetch}}>
            { children }
        </ListContext.Provider>
    )
} 


export default ListProvider;

