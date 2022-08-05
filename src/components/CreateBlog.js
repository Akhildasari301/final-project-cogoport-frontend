import Header from './Header'
import { Link } from 'react-router-dom'
const CreateBlog = (props) => {
    return (
        <>
        <Header />
            <div className="">
                <form action= {props.baseURL + "/blog"} method="POST" className="create-blog">
                    <input type='hidden' value={parseInt(props.user_id)} name={"user_id"}></input>
                    <input type='text' placeholder="Title of the Blog" name="title"></input>
                    <br></br>
                    <input type="text" placeholder="Author Name" name="authorName"></input>
                    <br></br>
                    <textarea placeholder="Content of the Blog" name="content"></textarea>
                    <br></br>
                    <Link to="/getrandomblogs">
                    <button type="Submit">Post</button></Link>
                </form>
            </div>
        </>
    )
}

export default CreateBlog