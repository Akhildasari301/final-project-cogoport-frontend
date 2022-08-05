import Base from "antd/lib/typography/Base"
import { responsiveArray } from "antd/lib/_util/responsiveObserve"
import axios from "axios"
import { useState } from "react"
import { Link } from 'react-router-dom'
const Signup = (props) => {

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
            <Link to={'/getrandomblogs'}>
            <button onClick={
                () => {
                    console.log('signup clickeed')
                    // fetch(props.baseURL + '/signup', {method: "POST", body: {
                    //     "name": name,
                    //     "email": email,
                    //     "password": password
                    // } })
                    const sign = async (name, email, password) => {
                        await axios.post(props.baseURL + '/signup', {
                            "name": name,
                            "email": email,
                            "password": password
                        }).then((response) => props.setUserID(response.data))
                    }
                    sign(name, email, password)
                    // if (localStorage.getItem('user_id'))
                    // props.user_id = 
                }
            } type={"Submit"}>Sign up</button></Link>

        </form>
        </>
    )
} 

export default Signup