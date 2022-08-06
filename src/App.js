
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import CreateBlog from './components/CreateBlog';
import ShowBlogs from './components/ShowBlogs'
import UpadteBlog from './components/UpdateBlog';
import ShowOwnBlogs from './components/ShowOwnBlogs';
import ShowOwnBlog from './components/ShowOwnBlog';
import Login from './components/Login';
import Signup from './components/Signup';
import './../src/App.css'
import ShowRandomBlogs from './components/ShowRandomBlogs';




const { useState, useEffect } = require("react");

const baseURL = 'http://localhost:3000'

// const user_id = 1;

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [user_id, setUserID] = useState(JSON.parse(localStorage.getItem('user_id')))
  const [user_name, setUserName] = useState(JSON.parse(localStorage.getItem('user_name')))
  console.log(user_id)


  useEffect(() => {
    if(localStorage.getItem('user_id')) {
      setUserID(JSON.parse(localStorage.getItem('user_id')))
    } 
    if(localStorage.getItem('user_name')) {
      setUserName(JSON.parse(localStorage.getItem('user_name')))
    } 
  }, [])

  useEffect(() => {
    const dataInLocal = localStorage.getItem('user_id')
    if (dataInLocal){
      localStorage.setItem('user_id', JSON.stringify(user_id))
    } else {
      localStorage.setItem('user_id', JSON.stringify(1))
    }
  },[user_id])

  useEffect(() => {
    const dataInLocal = localStorage.getItem('user_name')
    if (dataInLocal){
      localStorage.setItem('user_name', JSON.stringify(user_name))
    } else {
      localStorage.setItem('user_name', JSON.stringify(''))
    }
  },[user_name])



  // const getBlogs = async () => {
  //   var response = await axios.get(baseURL + '/blogs').then((response) => response.data)
  //   // console.log(response)
  //   setBlogs(response)
  //   // console.log(blogs)
  // }
  useEffect(
    () => {
      const getBlogs = async () => {
        var response = await axios.get(baseURL + '/blogs').then((response) => response.data)
        // console.log(response)
        setBlogs(response)
        // console.log(blogs)
      }

      getBlogs();
    }
    

    , []
  )
  return (
    <>
    {/* <header className='header'>
      <div className="logo">BLOGGER LITE</div>
    </header> */}
    <BrowserRouter>
    <Routes>
      <Route path="/updateblog/:id" element={<UpadteBlog blogs={blogs} baseURL={baseURL} user_id={user_id}/>}></Route>
      <Route path="/allmyown" element={<ShowOwnBlogs baseURL={baseURL} user_id={user_id} user_name={user_name}/>}></Route>
      <Route path="/new" element={<CreateBlog user_id={user_id} baseURL={baseURL} user_name={user_name}/>}></Route>
      <Route path="/myblog/:id" element={<ShowOwnBlog baseURL={baseURL} user_id={user_id} blogs={blogs} user_name={user_name}/>}></Route>
      <Route path="/" element={<Login baseURL={baseURL} setUserID={setUserID} user_name={user_name} setUserName={setUserName}/>} ></Route>
      <Route path="/signup" element={<Signup baseURL={baseURL} setUserID={setUserID} user_name={user_name} setUserName={setUserName}/>}></Route>
      <Route path="/getrandomblogs" element={<ShowRandomBlogs baseURL={baseURL} user_id={user_id} user_name={user_name}/>}></Route>
      <Route path="/*/*" element={<ShowRandomBlogs baseURL={baseURL} user_id={user_id} />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;
