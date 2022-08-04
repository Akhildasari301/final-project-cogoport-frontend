
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import CreateBlog from './components/CreateBlog';
import ShowBlogs from './components/ShowBlogs'
import UpadteBlog from './components/UpdateBlog';
import ShowOwnBlogs from './components/ShowOwnBlogs';
const { useState, useEffect } = require("react");

const baseURL = 'http://localhost:3000'

const user_id = 2;

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState('')


  const getBlogs = async () => {
    var response = await axios.get(baseURL + '/blogs').then((response) => response.data)
    console.log(response)
    setBlogs(response)
    console.log(blogs)
  }
  useEffect(
    () => getBlogs(), []
  )
  return (
    <>
    <header>
      <div>
        <BrowserRouter>
        <Link to={`/new/${user_id}`}>
        <button>Create New</button>
        </Link>
        </BrowserRouter>
      </div>
      <div>BLOGGER LITE</div>
     
      <div>
        <BrowserRouter>
        <Link to={`allmyown/${user_id}`}>
        <button>Show My Blogs</button>
        </Link>
        </BrowserRouter>
        
      </div>
    </header>
    {/* <ShowBlogs blogs={blogs} /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/blog/:id" element={<UpadteBlog />}></Route>
      <Route path="/allmyown/:id" element={<ShowOwnBlogs baseURL={baseURL} />}></Route>
      <Route path="/new/:id" element={<CreateBlog user_id={user_id} baseURL={baseURL}/>}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;
