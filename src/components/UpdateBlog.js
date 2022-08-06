import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import Header from './Header'
import './../App.css'
const UpadteBlog = (props) => {
    const params = useParams()
    // const getBlog = async (idToCheck) => {
    //     let reqBlog = await axios.get(props.baseURL + `/blog/${idToCheck}`)
    //     return reqBlog
    // }

    // const blogToUpdate = getBlog(params.id)
    // const blogToUpdate = props.blogs.find((item) => item.id == params.id)
    const blogToUpdate = props.blogs.filter(
        (item) => item.id == params.id
    )
    console.log('new blogs details')
    console.log(blogToUpdate);
    // console.log(props.blogs)



    const [title, setTitle] = useState(blogToUpdate[0].title)
    const [content, setContent] = useState(blogToUpdate[0].content)
    console.log(title)
    console.log(content)


    return (
        <>
        <Header user_name={props.user_name} />
            <form className="updateBlog">
                <input type="text" defaultValue={title} onChange={
                    (e) => setTitle(e.target.value)
                } class="update-title"></input>
                <br></br>
                <textarea defaultValue={content} rows='20' cols='60' onChange={(e) => 
                    setContent(e.target.value)} className={"update-title"}></textarea>
                <br></br>
                <Link to={'/allmyown'}>
                <button type="Submit" onClick={
                    () => {
                        // fetch(props.baseURL + `blog/${blogToUpdate.id}`, {method: 'PUT', body:{
                        //     "title": title,
                        //     "content": content,
                        //     "user_id": parseInt(props.user_id),
                        //     "authorName": blogToUpdate.authorName
                        // }})


                        const body = {
                            "title": title,
                            "content": content,
                            "user_id": parseInt(props.user_id),
                            "authorName": blogToUpdate.authorName
                        }

                        axios.put(props.baseURL + `/blog/${blogToUpdate[0].id}`, body )
                    }
                }>Update</button>
                </Link>
            </form>


        </>
    )
}

export default UpadteBlog