import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from './Header'
import './../App.css'
const ShowOwnBlog = (props) => {
    const [reqBlog, setReqBlog] = useState({})
    const params = useParams()
    // const getBlog = async (idToCheck) => {
    //     let rBlog = await axios.get(props.baseURL + `/myblog/${idToCheck}`)
    //     console.log(rBlog)
    //     // return reqBlog
    //     setReqBlog(rBlog)
    // }

    // useEffect(() => {
    //     getBlog(params.id);
    // }, [])
    // const blogToShow = props.blogs.filter(blog => blog.id == params.id)
    const blog = props.blogs.find((item) => item.id == params.id)
    
    return (
        <>
        <Header />
            <div className='blog'>
                <div>Title: {blog.title}</div>
                <div>Author: {blog.authorName}</div>
                <div>Content: {blog.content}</div>
                {blog.user_id === props.user_id ? 
                
                (
                <>
                <Link to={`/updateblog/${blog.id}`}>
                <button>Edit</button>
                </Link>
                
                <Link to={'/getrandomblogs'}>
                <button onClick={
                    () => {
                        console.log('deletig the selected blog')
                        fetch(props.baseURL + `/blog/${blog.id}`, {method: "DELETE"})
                    }
                }>Delete</button></Link>
                </>) : <div></div>

                
            }
                
            </div>
        </>
    )
}

export default ShowOwnBlog