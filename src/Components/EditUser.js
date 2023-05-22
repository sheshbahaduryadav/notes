import React, { useState } from 'react'

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const newSignup = () =>{
    console.log(name,email,contact,password,address);
  }

  return (
    <>
       <div className='container mt-3 text-white' style={{width:'70%'}}>
       <div className='row py-2'>        
        <div className='col offset-md-3 col-md-6 col-12' style={{background:'#296332',borderRadius:'7px', boxShadow:'0px 0px 10px 7px gray'}}>
    <div className='row py-2 text-center'>
            <div className='col mt-3 py-2' style={{background:'yellow',color:"#036"}}>
                <h1>Update Profile</h1>
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
                <input type="text" className='form-control' title='It can not be changed !!' readOnly required
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
                <button className='btn btn-warning' onClick={newSignup}>Update</button>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default EditUser
