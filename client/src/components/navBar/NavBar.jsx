import "./navBar.scss";
import HomeIcon from '@mui/icons-material/Home';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LightModeIcon from '@mui/icons-material/LightMode';
import GridViewIcon from '@mui/icons-material/GridView';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";



const NavBar = () => {


  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);


  return (
    <div className="navbar">
        <div className="left"> 
        <Link to="/" style={{textDecoration:"none"}}>
        <span> Social Media</span>
        </Link>
        <HomeIcon />
        {darkMode ? <ModeNightIcon onClick={toggleDarkMode}/> : <LightModeIcon onClick={toggleDarkMode} />} 
        <GridViewIcon />
        <div className="search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
        </div>
        </div>
        <div className="right">
            
            <EmailIcon />
            <NotificationsActiveIcon />
            <Person2Icon />
            <div className="user">
                <img src={currentUser.profilePic} />
                <span>{currentUser.name} </span>

            </div>
        </div>
    </div>
  )
}

export default NavBar