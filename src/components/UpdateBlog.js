import axios from "axios"
import { useParams } from "react-router-dom"
import ShowBlogs from "./ShowBlogs"

const UpadteBlog = (props) => {
    const params = useParams()
    const getBlog = async (idToCheck) => {
        let reqBlog = await axios.get(props.baseURL + `/blog/${idToCheck}`)
        return reqBlog
    }

    const blogToUpdate = getBlog(params.id)

    return (
        <>
            <form action={props.baseURL + `/blog/${blogToUpdate.id}`} method="PUT">
                <input type="text" value={blogToUpdate.title}></input>
                <textarea value={blogToUpdate.content}></textarea>
                <button type="Submit">Update</button>
            </form>


        </>
    )
}

export default UpadteBlog