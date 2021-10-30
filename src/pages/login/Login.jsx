import React, { useContext, useState } from "react";
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'; 

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuth, auth } = useContext(AuthContext);

  const postLogin = async (e) => {
    e.preventDefault();

    if(email && password !== "") {
      const BASE_URL = process.env.REACT_APP_DOMAIN_API;
      const URL = BASE_URL + '/api/auth/login';
  
      await axios.post(URL,{
        email,
        password
      }).then((res) => {
          if(res.status === 200) {
            setAuth({data: res.data})
            setIsLogin(true)
          } else {
            setIsError(true)
          }
        
      })
        .catch((err) => {

          console.log(err);
          setIsError(true);
        })

    }


    if (isLogin && !auth.loading) {
      return <Redirect exact to='/' />
    }

    
  }
  
  
  
  return (
    
    <div className="login">
        <div className="black-cover">
          <div className="login-container">
            <div className="login-head">
              <Link to='/register'><img src="./assets/logo.png" alt="logo" /></Link>
            </div>

            <div className="login-form">
                <span id='sign-in-text'>Sign In</span>
                <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                <input onClick={postLogin} type='submit' value='Sign In'/>
                <div>
                    <span id='new-sign'>New to Netflix ?<Link to='/register'> Sign up now </Link></span><br />
                    <span>This page is protected by Google reCAPTCHA to ensure your are not a bot. <a href='https://google.com'> Learn More.</a></span>
                </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}



export default Login;