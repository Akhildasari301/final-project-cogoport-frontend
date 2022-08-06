import Header from './Header'
import axios from 'axios'
import { BrowserRouter, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const ShowRandomBlogs = (props) => {
    // const { id } = useParams()
    const [ownBlogs, setOwnBlogs] = useState([])

    const getBlogs = async () => {
        let response = await axios.get(props.baseURL + `/getrandomblogs`)
        setOwnBlogs(response.data)
    }
    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <>
           {/* <header className='header'>
      <div>
        <Link to={`/new`}>
        <button>Create New</button>
        </Link>
      </div>
 


      <div className='logo'>BLOGGER LITE</div>

      
     
      <div>

        <Link to={`/allmyown`}>
        <button>Show My Blogs</button>
        </Link>

        
      </div>
    </header> */}
    <Header />

            <div className="blogs">
                {
                    ownBlogs.map(
                        (blog) => {
                            // console.log(blog)
                            return (
                                <div className='blog' key={blog.id}>
                                    <div className='blog-body'>
                                    <div className="title">{blog.title}</div>
                                    <div className="authorName">By {blog.authorName}</div>
                                    <div className='created-at'>created at: {blog.created_at}</div>
                                    <div className="content">{blog.content}</div>
                                    </div>
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

export default ShowRandomBlogs