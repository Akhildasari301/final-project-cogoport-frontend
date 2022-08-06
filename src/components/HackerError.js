import { propTypes } from "react-bootstrap/esm/Image"
import { useNavigate } from "react-router-dom"
const HackerError = (props) => {
    const navigate = useNavigate();
    if(props.user_id === 0){
        return (
            <>
            <div className="hackererror">
            <h1>Please Sign In first</h1>
            <button onClick={() => {
                navigate('/')
            }}>Log in</button>
            </div>
            </>
        )
    }
}

export default HackerError