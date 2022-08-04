

const CreateBlog = (props) => {
    return (
        <>
            <div className="blog">
                <form action= {props.baseURL + "/blog"} method="POST">
                    <input type='hidden' value={parseInt(props.user_id)} name={"user_id"}></input>
                    <input type='text' placeholder="Title of the Blog" name="title"></input>
                    <br></br>
                    <input type="text" placeholder="Author Name" name="authorName"></input>
                    <br></br>
                    <textarea placeholder="Content of the Blog" name="content"></textarea>
                    <br></br>
                    <button type="Submit">Post</button>
                </form>
            </div>

        </>
    )
}

export default CreateBlog