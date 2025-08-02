import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import Logo from './logo.png'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    const [searchQuery, setSearchQuery] = useState('')
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }
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
                <AddIcon className='headerIcon' onClick={togglePopup} style={{ cursor: 'pointer' }} />
                <VideoCallIcon className='headerIcon' />
                <NotificationsIcon className='headerIcon' />
                <AccountCircleIcon className='headerIcon' />


            </div>

            {showPopup && (
                <div className='popup'>
                    <div className='popup content'>
                        <h3>Add New Video</h3>
                        <form >
                            <input type="text" placeholder='Title' />
                            <input type="text" placeholder='Channel' />
                            <input type="text" placeholder='Timestamp' />
                            <input type="text" placeholder='Views' />
                            <input type="text" placeholder='Image URL' />
                            <input type="text" placeholder='Channel Image URL' />
                            <button type='submit'>Add Video</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header