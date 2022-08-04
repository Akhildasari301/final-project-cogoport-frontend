import { Link, useParams } from 'react-router-dom'

const ShowOwnBlog = (props) => {
    return (
        <>
            <div className='blog'>
                <div>Title: {blog.title}</div>
                <div>Author: {blog.authorName}</div>
                <div>Content: {blog.content}</div>
                <Link to={`/blog/${blog.id}`}>
                <button>Edit</button>
                </Link>
                <button onClick={
                    fetch(baseURL + `/blog/${blog.id}`, method="DELETE")
                }>Delete</button>
            </div>

        </>
    )
}

export default ShowOwnBlog