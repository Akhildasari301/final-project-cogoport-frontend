import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
// import './style.css'



// const baseURL = 'http://localhost:3000/blogs'



const ShowBlogs = (props) => {
    console.log('showblogs is rendering', props.blogs)
    return (
        <>
                {
                    props.blogs.map(
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

export default ShowBlogs;

