import React, { useContext } from "react";
import { BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from './pages/watch/Watch';
import { AuthContext } from './context/AuthContext';
import MovieProvider from './context/movieContext';
import {} from 'dotenv/config';

import ListProvider from './context/ListContext';


const App = () => {
  
  const { auth } = useContext(AuthContext);
  

  
  return (
    <MovieProvider>
      <ListProvider>

      <Router>
        <Switch>
          <Route exact path="/">
          { auth.data ? <Home type="serie"/> : <Redirect to='/register' /> }
          </Route>
          <Route path="/register">
          { !auth.data ? <Register/> : <Redirect to='/' /> }
          </Route>
          <Route path="/login">
            { !auth.data ? <Login/> : <Redirect to='/' /> }
          </Route>

          {auth.data && (
            <>
              <Route path="/movies">
                <Home type="movies" />
            </Route>
              <Route path="/series">
                <Home type="serie" />
            </Route>
            <Route path="/watch">
              <Watch/>
            </Route>
              
            </>
          )}
        </Switch>
      </Router>
    </ListProvider>

    </MovieProvider>
   

    );
}

export default App;
