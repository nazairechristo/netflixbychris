import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../context/ListContext';
import List from './List';
import axios from 'axios';
import { AuthContext } from '.././context/AuthContext';


const ListContainer = ({ type }) => {

//     const { listFetch } = useContext(ListContext);
//   console.log(data);
    const [listFetch, setListFetch] = useState([{type: type, data:null}]);
    const { data } = listFetch;
    const { auth } = useContext(AuthContext);
    
    console.log(listFetch.data);

    // const AUTH = JSON.parse(window.localStorage.getItem("authData"));
    // let token = '';

    // if(AUTH !== null) {
    //     token = "Bearer " + AUTH.accessToken;
        
    // }
   
    
    let token = '';
    if(auth.data.accessToken !== null) {
        token = "Bearer " + auth.data.accessToken;
    }

    useEffect(() => {
        const getList = async () => {
            const BASE_URL = process.env.REACT_APP_DOMAIN_API;

            const URL = `${BASE_URL}/api/lists?type=${type}`;

            await axios.get(URL,{
                headers: {
                    token:token
                }
            })
                .then((res) => setListFetch({type: type, data: res.data}))
                .catch((err) => console.log(err))
            
            
        }
        if(auth.data.accessToken !== null) {
            getList();

        }

    }, [type])

 
  

    return (
        <div className="list-container">
            
           {data ? 
            (data.map((item) => (
                <div className='list-content'>
                    <span>{item.title}</span>
                    <List list={item} />
    
                </div>
           ))) :
           <p>Loading...</p>
           }

           {/* <List content={list1}/>
           <List content={list2}/>
           <List content={list3}/>
           <List content={list4}/> */}

        </div>
    )
}


export default ListContainer;