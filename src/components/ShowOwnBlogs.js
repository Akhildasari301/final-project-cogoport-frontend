import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'

const ShowOwnBlogs = (props) => {
    const [ownBlogs, setOwnBlogs] = useState([])
    // calling this function in the useEffect
    // const getBlogs = async (id) => {
    //     var response = await axios.get(props.baseURL + `/getownall/${id}`).then((response) => response.data)
    //     // console.log(response)
    //     setOwnBlogs(response)
    //     // console.log(blogs)
    //   }
    const getBlogs = async (id) => {
        let response = await axios.get(props.baseURL + `/getownall/${id}`)
        // console.log(response)
        setOwnBlogs(response.data)
        // console.log(blogs)
      }
      useEffect(() => {
         getBlogs(props.user_id)
      }, [])
   
    return (
        <>
        <Header />
        <div className="blogs">

        
            {
                ownBlogs.map(
                    (blog) => {
                        // console.log(blog)
                        return (
                                <div className='blog' key={blog.id}>
                                    <div className="title">Title: {blog.title}</div>
                                    <div className="authorName">Author: {blog.authorName}</div>
                                    <div>{blog.content}</div>
                                    <Link to={`/myblog/${blog.id}`}>
                                        <div className="viewblogButton">
                                        <button >View Blog</button>
                                        </div>
                                    </Link>
                                </div>

                           
                        )
                    }
                )
            }

</div>

        </>
    )
}

export default ShowOwnBlogs