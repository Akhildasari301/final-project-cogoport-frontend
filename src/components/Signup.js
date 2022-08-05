import Base from "antd/lib/typography/Base"
import { responsiveArray } from "antd/lib/_util/responsiveObserve"
import axios from "axios"
import { useState } from "react"
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Signup = (props) => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
        <header className="header">
<div className='logo'>BLOGGER LITE</div>
</header>
        <form className="signup">
            <div>
                <input type="text" name="name" placeholder="name"  onChange={
                    (e) => setName(e.target.value)
                } required></input>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email"  onChange={
                    (e) => setEmail(e.target.value)
                } required></input>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password"  onChange={
                    (e) => setPassword(e.target.value)
                } required></input>
            </div>
            
            <button onClick={
                () => {
                    console.log('signup clickeed')
                    const sign = async (name, email, password) => {
                        await axios.post(props.baseURL + '/signup', {
                            "name": name,
                            "email": email,
                            "password": password
                        }).then((response) => {
                            
                            props.setUserID(response.data)
                        })
                    }
                   
                    if (name !== '' && email !== '' && password !== '') {
                        sign(name, email, password)
                        navigate('/getrandomblogs')

                    }
                }
            } type={"Submit"}>Sign up</button>

        </form>
        </>
    )
} 

export default Signup