import "./LeftBar.scss"
import Friends from "../../assets/1.png"
import Groups from "../../assets/2.png"
import Events from "../../assets/3.png"
import Gallery from "../../assets/4.png"
import Videos from "../../assets/5.png"
import Market from "../../assets/6.png"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"





const LeftBar = () => {

    const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src={currentUser.profilePic} />
                    <span>{currentUser.name}</span>
                </div>
                <div className="item">
                    <img src={Friends} alt="" />
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src={Groups} alt="" />
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src={Events} alt="" />
                    <span>Events</span>
                </div>
                
                <hr/>
                <div ckassName="menu">
                    <span>Shortcuts</span>
                </div>
                <div className="item">
                    <img src={Gallery} alt="" />
                    <span>Gallery</span>
                </div>
                <div className="item">
                    <img src={Videos} alt="" />
                    <span>Videos</span>
                </div>
                <div className="item">
                    <img src={Market} alt="" />
                    <span>Marketplace</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftBar