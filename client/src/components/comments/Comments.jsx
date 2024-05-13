import "./comments.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    // DUMMY DATA

    const comments = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        },
        {
            id: 2,
            name: "Jane Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        },
        {
            id: 3,
            name: "John Doe",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        },
        {
            id: 4,
            name: "Jane Doe",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        },
    ];



  return (
    <div className="comments">
        <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write comment" />
        <button>Send</button>
        </div>
        {comments.map(comment => (
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.comment}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments