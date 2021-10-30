import React, { useRef, useState } from "react";
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

const Register = () => {
  const passwordInput = useRef(null);
  const startBtn = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const username = "user" + Math.round(Math.random() * 1000);
  const [isResgistered, setIsRegistered] = useState(false);
  const [isEmptyFill, setIsEmptyFill] = useState(false);


  console.log(email, password, username);

  const postRegister = async (e) => {
    const BASE_URL = process.env.REACT_APP_DOMAIN_API;

    const URL = BASE_URL + '/api/auth/register';

    if(email && password !== '') {
      await axios.post(URL, {
        
        username,
        email,
        password
        
      }).then((res) => {
          setIsRegistered(true);
          return console.log(res)
        })
        .catch((err) => console.log(err))

    } else {
      console.log('veuillez remplir les champs');
      setIsEmptyFill(true);
    }



  }

  const showInput = (e) => {
    passwordInput.current.classList.add('show');
    startBtn.current.classList.add('show');
    e.target.classList.add('hide');


  }

    return (
      <>
      {isResgistered ?  
        (
            <Redirect to='/login' />
          ) :
         ( <div className="register">
        <div className="black-cover">
          <div className="register-container">
            <div className="register-head">
              <Link to='/register'><img src="./assets/logo.png" alt="logo" /></Link>

              <div className="right">
                <select>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                </select>
                <button id="sign-in-btn"><Link to='/login'>Sign in</Link></button>
              </div>
            </div>

            <div className="center-text">
              <div className="text">
                <span id="big-title">Unlimited movies, TV shows, and more.</span>
  
                <span id="med-title">Watch anywhere, Cancel anytime.</span><br />
                <span id="little-title">
                  Ready to Watch? Enter your email to create or restart your
                  menbership.
                </span>
              </div>

              <div id="inputs">
                <input
                  type="text"
                  id="email-adress"
                  placeholder="Email adress"
                  onChange={(e) => setEmail(e.target.value)}
                  />
                <input
                  ref={passwordInput}
                  type="password"
                  className="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input onClick={showInput} type="submit" value="Get Started" />
                <input ref={startBtn} onClick={postRegister} className='startBtn' type="submit" value="Start" />
              </div>
              {isEmptyFill && (<span className='fill-error'>Please enter your email and password..</span>)}

            </div>
          </div>
        </div>
      </div>) }
      </>
     
    );
}


export default Register;