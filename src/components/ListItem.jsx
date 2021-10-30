import React, { useContext, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import { Redirect } from 'react-router';
import Watch from '.././pages/watch/Watch';
import { MovieContext } from '../context/movieContext';

const ListItem = ({item}) => {

    const [isPlay, setIsPlay] = useState(false);
    const { movieData, setMovieData } = useContext(MovieContext); 

    const playEventRedirect = (e) => {
        
        setIsPlay(true);
    
    }

    if(isPlay) {

        setMovieData({isPlay: true, trailer: item.trailer})

       return (<Redirect to='/watch'>
                <Watch/>
            </Redirect>)
    }

    return (

        <div>
            <div>
                <img src={item.imgSm} alt='imgSm' />
            </div>
            <span id='title'>{item.title}</span>
            <div id='hover'>
                <span id='desc'>{item.desc}</span>
                <span>{item.genre}<span>{item.limit} +</span>Year: {item.year}</span>
                <div className='btn-container'>
                    <button onClick={playEventRedirect}><PlayArrowIcon />Play</button>
                    
                    <button><AddIcon />Add</button>
                </div>
            </div>

        </div>
    )
}


export default ListItem;