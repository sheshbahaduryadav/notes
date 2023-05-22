import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () =>{

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [password, setPassword] = useState("");
    let [address, setAddress] = useState("");

    const navigate = useNavigate();

    const newSignup =async () =>{
      console.log(name,email,contact,password,address);
      let result = await fetch(`http://localhost:4500/signup`,{
        method:'post',
        body: JSON.stringify({name,email,contact,password,address}),
        headers:{
            'Content-Type':'application/json'
        }
      });
      result = await result.json();
      if(result.name && result.email && result.contact && result.password && result.address){
        localStorage.setItem('user',JSON.stringify(result));
        toast.success("Registration Successful !",{
            position: "top-center",
          })
    }else{
        toast.error("Mondatory all details !",{
            position: "top-center",
          })
    }
    }

  return (
    <>
    <div className='container mt-3 text-white' style={{width:'70%'}}>
       <div className='row py-2'>        
        <div className='col offset-md-3 col-md-6 col-12' style={{background:'#296332',borderRadius:'7px', boxShadow:'0px 0px 10px 7px gray'}}>
    <div className='row py-2 text-center'>
            <div className='col mt-3 py-2' style={{background:'yellow',color:"#036"}}>
                <h1>User Registration</h1>
            </div>
        </div>
    <div className='row py-2'>
            <div className='col'>
                <label>Full Name</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setName(e.target.value)} value={name}
                 />
            </div>
        </div>
        <div className='row py-2'>
            <div className='col'>
                <label>E-mail</label>
                <input type="text" className='form-control' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}
                 />
            </div>
        </div>
        <div className='row py-2'>
            <div className='col'>
                <label>Contact</label>
                <input type="number" className='form-control' required
                onChange={(e)=>setContact(e.target.value)} value={contact}
                />
            </div>
        </div>
        <div className='row py-2'>
            <div className='col'>
                <label>Password</label>
                <input type="password" className='form-control' required
                 onChange={(e)=>setPassword(e.target.value)} value={password}
                 />
            </div>
        </div>
        <div className='row py-2'>
            <div className='col'>
                <label>Address</label>
                <input type="text" className='form-control' required
                 onChange={(e)=>setAddress(e.target.value)} value={address}
                 />
            </div>
        </div>
        
        <div className='row py-2 py-3 text-center'>
            <div className='col offset-md-4 col-md-4'>
                <button className='btn btn-warning' onClick={newSignup}>Register</button>
            </div>
        </div>
        </div>
        </div>
    </div>
    <ToastContainer theme="colored" />
    </>
  );
}
export default Signup;
