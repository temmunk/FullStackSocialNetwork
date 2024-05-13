import { AuthContext } from "../../context/authContext";
import "./stories.scss"
import { useContext } from "react";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)
    // DUMMY DATA 

    const stories = [
        {
            id: 1,
            profilePic: "https://images.pexels.com/photos/22626143/pexels-photo-22626143/free-photo-of-a-woman-with-curly-hair-and-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "John Doe",
        },
        {
            id: 2,
            profilePic: "https://images.pexels.com/photos/22626143/pexels-photo-22626143/free-photo-of-a-woman-with-curly-hair-and-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Jane Doe",
        },
        {
            id: 3,
            profilePic: "https://images.pexels.com/photos/22626143/pexels-photo-22626143/free-photo-of-a-woman-with-curly-hair-and-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "John Doe",
        },
        {
            id: 4,
            profilePic: "https://images.pexels.com/photos/22626143/pexels-photo-22626143/free-photo-of-a-woman-with-curly-hair-and-a-white-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Jane Doe",
        },
    ];

  return (
    <div className='stories'>
        <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.profilePic} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories