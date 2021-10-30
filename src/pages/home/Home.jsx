import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import grey from '@mui/material/colors/grey';
import { MovieContext } from "../../context/movieContext";
import ListContainer from '../../components/ListContainer';
import { Redirect } from "react-router";
import Watch from '../watch/Watch';



const Home = ({ type }) => {
    const { setMovieData } = useContext(MovieContext);

    const { auth } = useContext(AuthContext);
    const { data } = auth;
    let token = '';
    if(data.accessToken !== null) {
        token = "Bearer " + data.accessToken;
    }

    const [randomData, setRandomData] = useState([]);
    //const [type, setType] = useState('serie');
    const [isLoading, setIsLoading] = useState(true);
    const [isPlay, setIsPlay] = useState(false);


    const getRandomMovie = async () => {


        try{
            const BASE_URL = process.env.REACT_APP_DOMAIN_API;
            const res = await axios.get(`${BASE_URL}/api/movies/random?type=${type}`,{
                headers: {
                    token:token
                }
            })

            setRandomData(...res.data);
            setIsLoading(false);

        } catch (err) {
            console.log(err)
        }
        
    }


   
   
    
    useEffect(() => {
        getRandomMovie();
       
    }, [type]);

    const playEvent = (e) => {
        setIsPlay(true)
    }

    if(isPlay) {

        setMovieData({isPlay: true, trailer: randomData.trailer})

       return (<Redirect to='/watch'>
                <Watch/>
            </Redirect>)
    }

    
   

    return(
       
       
        <div className='home'>
            <div className="home-container">
                <NavBar />
                
                <div className='featured'>
                    {isLoading ? (
                        <p>loading...</p>
                    ) : 
                    (
                        <>
                            <img src={randomData.img} alt='img-home' />
                            <div className='info'>
                                <span id='type'><img src='../../assets/n-logo.png' alt='n-logo' />{randomData.isSeries ? "SERIES" : "MOVIES"}</span>
                                <img src={randomData.imgTitle} alt='title' />
                                <p>{randomData.desc}</p>
                                <div className='btn-container'>
                                    <button onClick={playEvent}><PlayArrowIcon /> Play</button>
                                    <button id='list'><AddIcon sx={{ color: grey[50] }} /> My List</button>
                                </div>
                            </div>
                        </>
                    )}
                   
                </div>

               <ListContainer type={type} />
               

            </div>
        </div>
    )
}



export default Home;