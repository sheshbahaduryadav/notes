import React, { useState } from 'react';

const ReadNotesUser = () => {

  let [notes, setNotes] = useState([]);

  const allNotes = async () =>{
    let result = await fetch(`http://localhost:4500/readnotesuser`);
    result = await result.json();
    setNotes(result);
    console.log(result);
  }
  allNotes();

  return (
    <>
    <div className="container">
    {
        notes.map((item,index)=>
        <div className='row mt-4 py-4 text-white' style={{background:'#003138',boxShadow:'0px 0px 7px 5px gray', padding:'10px', borderRadius:'10px'}}>
              <>
              <div className="col col-10">
                    <div style={{fontWeight:'bold', fontSize:'2vw',color:'yellow'}}> {index+1} : { item.topic }</div>                     
                                       
                    <span style={{color:'blue',padding:'3px', background:'white', borderRadius:'8px'}}><b>Sub Topic :</b> { item.subtopic }</span>
                    <div><b>Content :</b> { item.content }</div>
                    
                </div>               
               
                </>  
            </div>
         )}
        </div>
    </>
  );
}

export default ReadNotesUser;
