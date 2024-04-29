import { useState } from "react";
function Card({name,description,id,deleteProduct, editProduct}) {
  const [button,setButton]=useState()
  const status=()=>{
    setButton(!button)
  }
  return(
  <div className="card" style={{width: '18rem',marginRight:'36px'}}>
    <div className="card-body"  style={{ background:'#D0FFBC'}}>
      <label><b>Name:</b>  {name}</label><br/>
      <label><b>Description:</b> <p>{description}</p></label><br/>
      <label><b>Status:</b>   {button?<button type="button" onClick={status} className="btn btn-success">completed</button>:<button type="button" onClick={status} className="btn btn-danger">Not completed</button>}</label><br/>  
      <div className="buttons">
        <button type="button" onClick={()=>editProduct(id)}className="btn btn-success">Edit</button>
        <button type="button" onClick={()=>deleteProduct(id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
  )
}
export default Card;

