import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLogin = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    const usersLogin =async () =>{
        console.log(email,password);
       let result = await fetch(`http://localhost:4500/userlogin`,{
        method:'post',
        body: JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
       });
        result = await result.json();
        if(result.email && result.password){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/userhome');
        }else{
            toast.error("Enter Correct Details !",{
                position: "top-center",
              })
        }
    }

  return (
    <>
     <div className='container py-4 text-white' style={{width:'70%'}}>
       <div className='row py-2'>        
        <div className='col offset-md-3 col-md-6 col-12' style={{background:'#8000ff',borderRadius:'20px', boxShadow:'0px 0px 10px 7px gray'}}>
    <div className='row py-2 text-center'>
            <div className='col offset-md-1 offset-1 col-10 mt-3 py-2' style={{background:'#036',boxShadow:'0px 0px 10px 7px pink',borderRadius:'7px',color:"pink"}}>
                <h1>User Log In</h1>
            </div>
        </div>
    <div className='row py-2'>
            <div className='col'>
                <label>Username</label>
                <input type="text" className='form-control' required placeholder='Enter Username...'
                onChange={(e)=>setEmail(e.target.value)} value={email}
                 />
            </div>
        </div>
    <div className='row py-2'>
            <div className='col'>
                <label>Password</label>
                <input type="password" className='form-control' required placeholder='Enter Password...'
                onChange={(e)=>setPassword(e.target.value)} value={password}
                 />
            </div>
        </div>
        
        <div className='row py-2 py-3 text-center'>
            <div className='col offset-md-4 col-md-4'>
                <button className='btn btn-primary' onClick={usersLogin}>Log In</button>
            </div>
        </div>
        </div>
        </div>
    </div>
<ToastContainer theme="colored" />
    </>
  );
}

export default UserLogin;
