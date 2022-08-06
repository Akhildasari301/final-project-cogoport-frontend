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
            <div className='blog oneblog'>
                <div className='title'>{blog.title}</div>
                <div className='authorName'>{blog.authorName}</div>
                <div className='created-at'>created at: {blog.created_at}</div>
                <div className='content'>{blog.content}</div>
                {blog.authorName === props.user_name ?
                    (
                        <>
                            <Link to={`/updateblog/${blog.id}`}>
                                <button>Edit</button>
                            </Link>

                            <Link to={'/getrandomblogs'}>
                                <button onClick={
                                    () => {
                                        console.log('deletig the selected blog')
                                        fetch(props.baseURL + `/blog/${blog.id}`, { method: "DELETE" })
                                    }
                                }>Delete</button></Link>
                        </>) : <div></div>
                }

            </div>

        </>
    )
}

export default ShowOwnBlog