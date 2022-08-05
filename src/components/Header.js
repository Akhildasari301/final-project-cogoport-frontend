import { BrowserRouter, Link } from "react-router-dom"

const Header = (props) => {
    return (
    <header className='header'>
      <div>

        <div>
          <Link to={'/getrandomblogs'}>
          <button>Home</button>
          </Link>
        <Link to={`/new`}>
        <button>Create New</button>
        </Link>
        </div>

        


      </div>
      {/* <BrowserRouter>
      <Link to={'/'}> */}
      <div className='logo'>BLOGGER LITE</div>
      {/* </Link>
      </BrowserRouter> */}
      
     
      <div>

        <div>
        <Link to={`/allmyown`}>
        <button>Show My Blogs</button>
        </Link>
        <Link to={'/'}>
          <button>Logout</button>
        </Link>
        </div>
        

        
      </div>
    </header>
    )
}

export default Header