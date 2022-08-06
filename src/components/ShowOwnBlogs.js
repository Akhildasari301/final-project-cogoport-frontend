import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'

const ShowOwnBlogs = (props) => {
    const [ownBlogs, setOwnBlogs] = useState([])
    const getBlogs = async (id) => {
        let response = await axios.get(props.baseURL + `/getownall/${id}`)
        setOwnBlogs(response.data)
      }
      useEffect(() => {
         getBlogs(props.user_id)
      }, [])
   
    return (
        <>
        <Header />
        <div className="blogs own-blogs">
            {console.log(ownBlogs)}

        
            {
                ownBlogs.map(
                    (blog) => {
                        // console.log(blog)
                        return (
                                <div className='blog' key={blog.id}>
                                    <div className="title">{blog.title}</div>
                                    <div className="authorName">By {blog.authorName}</div>
                                    <div className="created-at"> created at: {blog.created_at}</div>
                                    <div className="content">{blog.content}</div>
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