import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const CreateBlog = (props) => {

    const [title, setTitle] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    async function onClickCreate(e) {
        e.preventDefault();
        await axios.post(props.baseURL + '/blog', {
            "title": title,
            "authorName": props.user_name,
            "content": content,
            "user_id": props.user_id
        }).then(() => {navigate('/allmyown')})
        


    }
    return (
        <>
        <Header />
            <div className="">
                <form className="create-blog" onSubmit={onClickCreate}>
                    <input type='hidden' value={props.user_id} name={"user_id"}></input>
                    <input type='text' placeholder="Title of the Blog" name="title" onChange={(e) => setTitle(e.target.value)}></input>
                    {console.log(props.user_name)}
                    <input type='hidden' value={props.user_name} name={"authorName"}></input>
                    <br></br>
                    {/* <input type="hidden" placeholder="Author Name" name="authorName" onChange={(e) => setAuthorName(e.target.value)}></input> */}
                    {/* <br></br> */}
                    <pre><textarea placeholder="Content of the Blog" name="content" onChange={(e) => setContent(e.target.value)} rows="10" cols="50"></textarea></pre>
                    <br></br>
                    {console.log(props.user_id)}
                    <button type="Submit">Post</button>
                </form>
            </div>
        </>
    )
}

export default CreateBlog