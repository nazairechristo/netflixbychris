import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const NavBar = () => {
    const { auth } = useContext(AuthContext);

    return (
        <nav>
            <div className='nav-link'>
                <Link to='/'><img src="./assets/logo.png" alt="logo" /></Link>
                <div className='mini-logo'> <Link to='/'><img src="./assets/n-logo.png" alt="logo" /></Link></div>
                <li><Link to='/series'>TV Shows</Link></li>
                <li><Link to='/movies'>Movies</Link></li>
                <li><Link to='#'>My List</Link></li>
            </div>
            <div className='profil'>
                <NotificationsIcon/>
                <img src={auth.data.profilePic} alt='profil' />
                <ArrowDropDownIcon/>
                
            </div>
        </nav>
    )
}


export default NavBar;