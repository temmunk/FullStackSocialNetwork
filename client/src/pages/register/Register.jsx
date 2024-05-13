import "./register.scss"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Join!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam eget felis id lacus ultricies rhoncus. 
                    Nullam nec purus euismod, ultricies metus in, 
                    tempus ex. Donec nec justo eget metus tincidunt 
                    ultrices. In hac habitasse platea dictumst.
                </p>
                <span> Don you have an account?</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
                
            </div>
        </div>
    </div>    
  )
}

export default Register