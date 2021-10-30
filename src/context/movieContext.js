
import { createContext, useState } from "react";


export const MovieContext = createContext({});


const MovieProvider = ({children}) => {


    const [movieData, setMovieData] = useState({isPlay:false, trailer:null});
  

    return(
        <MovieContext.Provider value={{movieData, setMovieData}}>
            {children}
        </MovieContext.Provider>
    )

}


export default MovieProvider;



