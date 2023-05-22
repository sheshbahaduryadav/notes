import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ReadNotesAdmin = () => {

    let [notes, setNotes]=useState([]);

    const readNotes = async() =>{
        let result = await fetch(`http://localhost:4500/readnotesadmin`);
        result = await result.json();
        console.log(result);
          setNotes(result);
          console.log(result);
    }
    readNotes();

    const deleteNoteAdmin =async (id)=>{
      let result = await fetch(`http://localhost:4500/deletenotesadmin/${id}`,{
        method:'delete'
      });
      if(result){
        alert("Notes deleted Successfully !");  
      }
        
      // console.log(result);
      
 
      // if(result){
      //   alert("Deleted !");
      // }else{
      //   alert("Can't Delete !");
      // }
    }


  return (
    <>
    <div className="container">
    {
        notes.map((item,index)=>
        <div className='row mt-4 py-4 text-white' style={{background:'#265c4d',boxShadow:'0px 0px 7px 5px gray', padding:'10px', borderRadius:'10px'}}>
              <>
              <div className="col col-10">
                    <div style={{fontWeight:'bold', fontSize:'2vw',color:'yellow'}}> {index+1} : { item.topic }</div>                     
                                       
                    <span style={{color:'blue',padding:'3px', background:'white', borderRadius:'8px'}}><b>Sub Topic :</b> { item.subtopic }</span>
                    <div><b>Content :</b> { item.content }</div>
                    
                </div>
                <div className='col col-1 text-center'>
                        <Link to={"/editnotesadmin/"+item._id}><i class="fa-solid fa-pen-to-square" style={{fontSize:'25px', color:'#fff'}}></i></Link>
                </div>
                <div className='col col-1 text-center'>
                        <button onClick={() =>deleteNoteAdmin(item._id)}><i class="fa-solid fa-trash" style={{color: '#ff0000', fontSize:'25px'}}></i></button>                    
                </div>
               
                </>  
            </div>
         )}
        </div>
    </>
  );
}

export default ReadNotesAdmin;
