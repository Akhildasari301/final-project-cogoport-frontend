import axios from "axios"
import { useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [responseStatus, setResponseStatus] = useState(false)
    return (
        <>
            <header className="header">
                <div className='logo'>BLOGGER LITE</div>
            </header>


            <div></div>
            <form className="login">
                <div>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    <span></span>
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>


                <div className="buttons">
                    <Link to={"/signup"}>
                        <button>Sign up</button>
                    </Link>

                    <button onClick={
                        () => {
                            const check = async () => {
                                await axios.post(props.baseURL + '/login', {
                                    "email": email,
                                    "password": password
                                }).then((response) => console.log(response), (error) => console.log(error))
                            }
                            check();
                        }
                    }>Login</button>
                </div>
            </form>
        </>
    )
}

export default Login