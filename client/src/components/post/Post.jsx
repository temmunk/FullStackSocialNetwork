import "./post.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";
import moment from 'moment';




const Post = ({post}) => {


    const [commentOpen, setCommentOpen] = useState(false);


    const liked = true;
  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                        <span className="name">{post.name}</span>        
                        </Link>
                        <span className="date">1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon />
            </div>
        
            <div className="content">
                <p>{post.desc}</p>
                <img src={"./upload/"+ post.img} alt="" />
            </div>
            <div className="info">
                <div className="item">
                    {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
                    12 Likes
                </div>
                <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                    <ChatIcon />
                    12 Comments
                </div>
                <div className="item">
                    <ShareIcon />
                    Share
                </div>
            </div>
            {commentOpen && <Comments postId={post.Id}/>}
        </div>
    </div>
  )
}

export default Post