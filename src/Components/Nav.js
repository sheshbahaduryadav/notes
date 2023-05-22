import React from 'react'
import Styles from '../Components/NavStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/NavStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {
  const admin = localStorage.getItem('admins');
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  let my_name="";
  try{
     my_name = JSON.parse(localStorage.getItem('user')).name;//convert json to objects
   }
   catch{my_name=""}
  const logout = () =>{
    toast.warn("Log Out Successful !",{
      position:'top-center'
    });
    localStorage.clear();
    navigate('/adminlogin');    
  }
  return (
    <>
<nav class="navbar navbar-expand-lg text-dark" style={Styles}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:'yellow', fontWeight:'bold', fontSize:'25px'}}>Notes Sharing</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style={{color:'#fff'}}>
        <div style={{margin:'auto', padding:'0px 50px'}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:'18px'}}>
         {
            admin ?
            <>
            <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/adminhome"><i class="fa-solid fa-house"></i> Home</Link>
          </li>
            <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/addnotes"><i class="fa-solid fa-plus"></i> Add Notes</Link>
          </li>
          
            <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/readnotesadmin"><i class="fa-solid fa-book"></i> Read Notes</Link>
          </li>           
            <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/removeuser"><i class="fa-solid fa-users"></i> All User</Link>
          </li>           
          <li className="nav-item">            
            <Link className="nav-link active text-white" aria-current="page" to="/Admin" onClick={ logout }><i class="fa-solid fa-right-from-bracket fa-fade"></i> LogOut</Link>
          </li>
          </>
          : user ?
          <>
           <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/userhome"><i class="fa-solid fa-house"></i> Home</Link>
          </li> 
           
           <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/readnotesuser">All Notes</Link>
          </li> 
           <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/addnotesuser">Add Notes</Link>
          </li> 
           <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/mynotes">My Notes</Link>
          </li> 
           <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/edituser"><i class="fa-solid fa-user-pen"></i> Update Profile</Link>
          </li> 
          <input type="text" className='fields' style={Styles} value={my_name} disabled/>
           <li class="nav-item">
          <Link class="nav-link active text-white btn btn-danger" aria-current="page" to="/userlogin" onClick={logout}><i class="fa-solid fa-right-from-bracket fa-beat-fade"></i> Log Out</Link>
          </li> 
          
          </>
          :
          <>
           <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/"><i class="fa-solid fa-house"></i> Home</Link>
        </li> 
          <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/adminlogin">Admin Login</Link>
          </li>          
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/user">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="/userlogin"><i class="fa-solid fa-right-to-bracket fa-fade"></i> Sign In</Link>
          </li>
          </>
      }        
      </ul>
       </div> 
      
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
<ToastContainer theme="colored" />
    </>
  );
}

export default Nav;
