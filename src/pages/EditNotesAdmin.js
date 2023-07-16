import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditNotesAdmin = () =>{
    const navigate = useNavigate();
    let params = useParams();
    let [topic,setTopic] = useState("");
    let [subtopic,setSubTopic] = useState("");
    let [content,setConent] = useState("");
    useEffect(()=>{
        getNotesAdmin();
    },[]);
    let addby='admin';
    const getNotesAdmin =async ()=>{
        let result = await fetch(`http://localhost:4500/getnotesadmin/${params.key}`);
        result = await result.json();
        setTopic(result.topic);
        setSubTopic(result.subtopic);
        setConent(result.content);
        console.log(result);
    }
    //API Call

    const updateNotesAdmin =async ()=>{
        let result = await fetch(`http://localhost:4500/editnotesadmin/${params.key}`,{
            method:'put',
            body: JSON.stringify({topic,subtopic,content,addby}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result){
            navigate("/readnotesadmin");
        }
    }


  return (
    <>
    <div className='container bg-primary mt-3 text-white'>
    <div className='row text-center'>
            <div className='col offset-md-3 col-md-5'>
                <h1>Edit Notes</h1>
            </div>
        </div>
    <div className='row'>
            <div className='col offset-md-3 col-md-5'>
                <label>Topic</label>
                <input type="text" className='form-control'
                value={topic}
                onChange={(e)=>setTopic(e.target.value)}
                />
            </div>
        </div>
        <div className='row'>
            <div className='col offset-md-3 col-md-5'>
                <label>SubTopic</label>
                <input type="text" className='form-control' 
                value={subtopic}
                onChange={(e)=>setSubTopic(e.target.value)}
                />
                
            </div>
        </div>
        
        <div className='row'>
            <div className='col offset-md-3 col-md-5'>
                <label>Content</label>
                <textarea className='form-control'
                value={content}
                onChange={(e)=>setConent(e.target.value)}
                ></textarea>
            </div>
        </div>
        <div className='row py-3'>
            <div className='col offset-md-3 col-md-5'>
                <button className='btn btn-success' onClick={updateNotesAdmin}>Update</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default EditNotesAdmin;
