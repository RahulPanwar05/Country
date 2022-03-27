import React, { useState } from 'react'

const AddCountry = (props) => {
const[name,setName]=useState("");
const[code,setCode]=useState(""); 
const[flag,setFlag]=useState(""); 
    const submit=(e)=>{
        e.preventDefault();
        if(!name||!code||!flag){
            alert("fill the details")
        }
        props.addCountry(name,code,flag)
    }
     
  return (
    <div className='container my-3'>
        <h3>Add A Country</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label"><strong>Name</strong></label>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}className="form-control" id="Name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title"  className="form-label"><strong>Phone Code</strong></label>
    <input type="text" value={code} onChange={(e)=>{setCode(e.target.value)}} className="form-control" id="code" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label"><strong>Flag Url</strong></label>
    <input type="text" value={flag} onChange={(e)=>{setFlag(e.target.value)}} className="form-control" id="flag" aria-describedby="emailHelp"/>
  </div>
 <button type="submit" className="btn btn-sm btn-success">Add Country</button>
 </form>
    </div>  
  )
}

export default AddCountry
