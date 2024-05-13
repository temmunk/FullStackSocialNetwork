import { Link } from "react-router-dom"
import "./login.scss"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"


const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    };


  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam eget felis id lacus ultricies rhoncus. 
                    Nullam nec purus euismod, ultricies metus in, 
                    tempus ex. Donec nec justo eget metus tincidunt 
                    ultrices. In hac habitasse platea dictumst.
                </p>
                <span> Don't have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </form>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>    
  )
}

export default Login