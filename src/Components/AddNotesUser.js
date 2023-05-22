import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNotesUser = () => {

    let [topic, setTopic]= useState("");
    let [subtopic, setSubTopic]= useState("");
    let [content, setContent]= useState("");
    let addby = JSON.parse(localStorage.getItem('user'))._id;

    const addNews =async () =>{

        toast.success("Notes Add Succesfully !",{
            position: "top-center",
        }
        );

        console.log(topic,subtopic,content,addby);
        let result = await fetch(`http://localhost:4500/addnotes-admin`, {
            method:'post',
            body:JSON.stringify({topic,subtopic,content,addby}),
            headers:{
                'Content-Type':'application/json'
            }
        });       
        result = await result.json();
        
            // setTopic("");
            // setSubTopic("");
            // setContent("");           
            // navigates('/readnotesadmin');
                       
    }

  return (
    <>
    <div className='container mt-3 text-white' style={{width:'70%'}}>
       <div className='row'>        
        <div className='col offset-md-3 col-md-6 col-12' style={{background:'#036',borderRadius:'7px', boxShadow:'0px 0px 10px 7px gray'}}>
    <div className='row text-center'>
            <div className='col mt-3 py-2' style={{background:'blue'}}>
                <h1>Add Notes</h1>
            </div>
        </div>
    <div className='row'>
            <div className='col'>
                <label>Topic</label>
                <input type="text" className='form-control'
                onChange={(e)=>setTopic(e.target.value)}
                value={topic}
                />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <label>SubTopic</label>
                <input type="text" className='form-control'
                onChange={(e)=>setSubTopic(e.target.value)}
                value={subtopic} />
            </div>
        </div>
        
        <div className='row'>
            <div className='col'>
                <label>Content</label>
                <textarea className='form-control'
                onChange={(e)=>setContent(e.target.value)}
                value={content}
                ></textarea>
            </div>
        </div>
        <div className='row py-3 text-center'>
            <div className='col offset-md-4 col-md-5'>
                <button className='btn btn-warning' onClick={addNews}>Add Notes</button>
            </div>
        </div>
        </div>
        </div>
    </div>
      <ToastContainer theme="colored" />
    </>
  )
}

export default AddNotesUser
