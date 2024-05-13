import "./profile.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts";






const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/19882695/pexels-photo-19882695/free-photo-of-concrete-breakers-on-the-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" 
        alt=""
        className="cover" />
        <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
        className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon fontSize="large" />
            </a>
            <a href="https://www.LinkedIn.com/">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <LocationOnIcon />
                <span>Los Angeles</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>www.johndoe.com</span>
              </div>
              
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <MailIcon />
            <MoreVertIcon />

          </div>
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default Profile