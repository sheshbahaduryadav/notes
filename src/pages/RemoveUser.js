import React, { useState } from 'react'

const RemoveUser = () => {
    let [user, setUser] = useState("");

    const getuser = async ()=>{
        let result = await fetch(`http://localhost:4500/users`);
        result = await result.json();
        setUser(result);
    }

    const deleteUser = async (id) =>{
        let result = await fetch(`http://localhost:4500/removeuser/${id}`,{
            method:'delete'
        });
        if(result){
            getuser();
        }
    }

    getuser();
  return (
    <>
    <div className='container'>
        <div className='row'>
        <table className='table table-responsive table-warning table-hover table-striped'>
        <tr>
            <th>S.L. No.</th>
            <th>User Name</th>
            <th>E-mail</th>
            <th>Contact</th>
            <th>address</th>
            <th>Remove User</th>
        </tr>
           {
            user.length > 0 ? user.map((item, index)=>
            <>                     
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.address}</td>
                        <th><button className='btn btn-sm btn-outline-danger' onClick={ ()=>deleteUser(item._id) }><i class="fa-solid fa-trash"></i> Remove</button></th>
                    </tr>
             </>
            ):
            <h3>User Not found !</h3>
        }
        </table>      
       </div>
    </div>
    </>
  )
}

export default RemoveUser
