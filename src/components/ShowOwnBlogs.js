import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import axios from 'axios'


const ShowOwnBlogs = (props) => {
    const params = useParams()
    const [ownBlogs, setOwnBlogs] = useState([])
    const getBlogs = async (id) => {
        var response = await axios.get(props.baseURL + `/getownall/${id}`).then((response) => response.data)
        // console.log(response)
        setOwnBlogs(response)
        // console.log(blogs)
      }

      useEffect(() => {
        getBlogs(params.id)
      }, [])
   
    return (
        <>
            {
                ownBlogs.map(
                    (blog) => {
                        console.log(blog)
                        return (
                            <>
                                <div className='blog'>
                                    <div>Title: {blog.title}</div>
                                    <div>Author: {blog.authorName}</div>
                                    <div>Content: {blog.content}</div>

                                </div>

                            </>
                        )
                    }
                )
            }

        </>
    )
}

export default ShowOwnBlogs