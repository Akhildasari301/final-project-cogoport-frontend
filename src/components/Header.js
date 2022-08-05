import { BrowserRouter, Link } from "react-router-dom"

const Header = (props) => {
    return (
    <header className='header'>
      <div>

        <Link to={`/new`}>
        <button>Create New</button>
        </Link>


      </div>
      {/* <BrowserRouter>
      <Link to={'/'}> */}
      <div className='logo'>BLOGGER LITE</div>
      {/* </Link>
      </BrowserRouter> */}
      
     
      <div>

        <Link to={`/allmyown`}>
        <button>Show My Blogs</button>
        </Link>

        
      </div>
    </header>
    )
}

export default Header