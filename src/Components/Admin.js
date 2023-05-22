import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  let navigate = useNavigate();
  const [admins, setId] = useState("");
  const [password, setPassword] = useState("");  
  let username = admins;
  
  const adminLogin = async ()=>{
    console.log(username,password);
  
    let result = await fetch("http://localhost:4500/adminlogin",{
      method:'post',
      body: JSON.stringify({username,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result = await result.json();
    // console.log(result);
    if(result.username){
      toast.success("Loged In Successfuly !",{
        position: "top-center",
      });
      localStorage.setItem('admins',JSON.stringify(result));      
      
      navigate('/adminhome');
    }else{
      toast.error("Please Enter correct UserId or Password !",{
        position: "top-center",
      });
    }
  }


  return (
    <div className='container-fluid bg-light py-3'>

<div className='container mt-3 text-white' style={{width:'70%'}}>
       <div className='row py-2'>        
        <div className='col offset-md-3 col-md-6 col-12' style={{background:'#b54c14',borderRadius:'20px', boxShadow:'0px 0px 10px 7px gray'}}>
    <div className='row py-2 text-center'>
            <div className='col offset-md-1 offset-1 col-10 mt-3 py-2' style={{background:'pink',boxShadow:'0px 0px 8px 7px black',borderRadius:'7px',color:"#036"}}>
                <h1>Admin Log In</h1>
            </div>
        </div>
    <div className='row py-2'>
            <div className='col'>
                <label>Admin ID</label>
                <input type="text" className='form-control' required placeholder='Enter Admin Id...'
                value={admins} 
                onChange={(e)=>setId(e.target.value)}
                 />
            </div>
        </div>
    <div className='row py-2'>
            <div className='col'>
                <label>Password</label>
                <input type="password" className='form-control' required placeholder='Enter Password...'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                 />
            </div>
        </div>
        
        <div className='row py-2 py-3 text-center'>
            <div className='col offset-md-4 col-md-4'>
                <button className='btn btn-primary' onClick={adminLogin}>Log In</button>
            </div>
        </div>
        </div>
        </div>
    </div>
        <ToastContainer theme="colored" />
    </div>
  )
}

export default Admin;
