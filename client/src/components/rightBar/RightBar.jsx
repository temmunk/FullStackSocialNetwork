import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>
        <div className='container'>
            <div className='item'>  
                <span>Suggestions</span>
                <div className='user'>
                    <div className='userInfo'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <span>Jane Doe</span>
                    </div>
            
                    <div className='buttons'>
                        <button>Follow</button>
                        <button>Ignore</button>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <span>Jane Doe</span>
                    </div>
            
                    <div className='buttons'>
                        <button>Follow</button>
                        <button>Ignore</button>
                    </div>
                </div>
            </div>
            <div className='item'>
                <span>Activities</span>
                <div className='user'>
                    <div className='userInfo'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <p>
                        <span>Jane Doe</span> commented on your post
                        
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <p>
                        <span>Jane Doe</span> commented on your post
                        
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <p>
                        <span>Jane Doe</span> commented on your post
                        
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <p>
                        <span>Jane Doe</span> commented on your post
                        
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="item">
                <span>Online Friends</span>
                <div className='user'>
                    <div className='userInfo'>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                
                        <div className="online"/>
                        <span>Jane Doe</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightBar