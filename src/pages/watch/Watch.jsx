import React, { useContext } from 'react';
import { MovieContext } from '../../context/movieContext';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, Redirect } from 'react-router-dom';


const Watch = () => {
    const { movieData } = useContext(MovieContext);

    

    return(
        <div className='watch'>
            
            <div className='back'>
                <Link to='/series'><ArrowBackOutlinedIcon/>Back</Link>
            </div>
           <div className='player-container'>
               
                {movieData.isPlay ? (<iframe width="900" height="600" src="https://www.youtube.com/embed/zmgYlYw7Uwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>)

                : <Redirect to="/series" />}
            </div> 
        </div>
    )
}


export default Watch;


