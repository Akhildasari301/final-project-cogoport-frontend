import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ShowBlogs from "./ShowBlogs"
import { Link } from 'react-router-dom'

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
            <form className="updateBlog">
                <input type="text" defaultValue={title} onChange={
                    (e) => setTitle(e.target.value)
                }></input>
                <br></br>
                <textarea defaultValue={content} rows='8' cols='20' onChange={(e) => 
                    setContent(e.target.value)}></textarea>
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