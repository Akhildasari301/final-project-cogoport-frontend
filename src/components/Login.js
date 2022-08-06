import axios from "axios"
import { useState } from "react"
import { BrowserRouter, Link, Navigate, useNavigate } from "react-router-dom"

import './../App.css'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    async function test(e){
        e.preventDefault();
                await axios.post(props.baseURL + '/login', {
                    "email": email,
                    "password": password
                }).then((response) => {
                    // localStorage.setItem('user_id', JSON.stringify(response.data.id))
                    console.log(response)
                    if (response.data.message !== 'success') {
                        setError('Invalid Credentials')
                        navigate('/')
                    } else {
                        props.setUserID(response.data.user.id)
                        props.setUserName(response.data.user.name)
                        navigate('/getrandomblogs')
                    }
                }, (error) => console.log(error)).catch(err=>console.log(err))  
    }
    return (
        <>
            <header className="header">
                <div className='logo'>BLOGGER LITE</div>
            </header>


            <div></div>
            <form onSubmit={test} className="login">
                <div>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required></input>
                    <span></span>
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div className="buttons">
                <button type="submit" onClick={test}>Login</button>
                <br></br>
                <div>
                    
                
                    <Link to={"/signup"}>
                        <button>Sign up</button>
                    </Link>
                    Not Already a User ? 
                </div>
                
                </div>
                <div className="error-message">{error}</div>
            </form>
        </>
    )
}

export default Login