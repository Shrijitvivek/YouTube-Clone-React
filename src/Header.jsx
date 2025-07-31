import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from './logo.png'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <div className="header">
            <div className="headerLeft">
                <MenuIcon />
                <Link to='/'>
                    <img src={Logo} className='headerLogo' alt="" />
                </Link>

            </div>
            <div className='searchInput'>
                <input type="text" placeholder='Search'
                    value={searchQuery} // Sets the input's current value to the state variable 'searchQuery'
                    onChange={(e) => setSearchQuery(e.target.value)} /> {/* Updates 'searchQuery' state whenever the user types in the input*/}
                <Link to={`/search/${searchQuery}`}>
                <SearchIcon className='searchButton' />
                </Link>
            </div>
            <div className='headerIcons'>
                <VideoCallIcon className='headerIcon' />
                <NotificationsIcon className='headerIcon' />
                <AccountCircleIcon className='headerIcon' />


            </div>
        </div>
    )
}

export default Header