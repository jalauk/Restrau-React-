import React from 'react'
import {Link} from 'react-router-dom'
import {auth } from './firebase'

const Navbar = ({user}) => {
    return (
        <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">@nonymous Restrau</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav marg1 mb-2 mb-lg-0 ">
        {
            user?
            (
                <>
                  <li className="nav-item">
                    <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
                   </li>
                   <li className="nav-item">
                    <Link to='/breakfast' className="nav-link active" aria-current="page" href="#">BreakFast</Link>
                   </li>
                   <li className="nav-item">
                    <Link to='/lunch' className="nav-link active" aria-current="page" href="#">Lunch</Link>
                   </li>
                   <li className="nav-item">
                    <Link to='/dinner' className="nav-link active" aria-current="page" href="#">Dinner</Link>
                   </li>
                   <li className="nav-item">
                    <Link to='/contact' className="nav-link active" aria-current="page" href="#">Contact Us</Link>
                   </li>
                   <li className="nav-item">
                    <Link to='/search' className="nav-link active" aria-current="page" href="#">Search</Link>
                   </li>
                   <li className="nav-item">
                   <Link to='/login' className="nav-link active" onClick={()=> auth.signOut()} aria-current="page" href="#">LogOut</Link>
                    </li>
                </>
            ):
            (
                <>
                <li className="nav-item">
                   <Link to='/login' className="nav-link active"  aria-current="page" href="#">Login</Link>
                   
                </li>
                
                    
                </>
            )
        }
        
        
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
