import "./comments.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment"


const Comments = ({postId}) => {

    const {currentUser} = useContext(AuthContext)

    const { isLoading, error, data } = useQuery({
      queryKey: ['comments'],
      queryFn: () => makeRequest.get("/comments?postId=" + postId).then((res) => {
        return res.data;
      })
    });


  return (
    <div className="comments">
        <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write comment" />
        <button>Send</button>
        </div>
        {isLoading ? "loading" : data.map(comment => (
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.comment}</p>
                </div>
                <span className="date">{moment(comment.createdAt).fromNow()}</span>
            </div>
        ))}
    </div>
  )
}

export default Comments