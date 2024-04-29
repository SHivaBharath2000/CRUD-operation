import "./App.css";
import Card from "./card";
import { useState } from "react";

// import { useState } from "react";

function App() {
  const [product,setProduct] = useState({})
  const [array,setArray]=useState([])
  const inputChange=(e)=>{
    setProduct({ ...product,
      [e.target.name]:e.target.value}) 
   }
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    product.id?updateProduct():createProduct();
    setProduct({})
  }
  const updateProduct=()=>{
    const index=array.findIndex((array)=>array.id=== product.id);
    const tempProds=[...array];
    tempProds[index]=product;
    setArray(tempProds)
  }
  const createProduct=()=>{
    const temp={...product}
    temp.id=Date.now().toString()
    setArray([temp,...array])

  }
  const editProduct=(pdId)=>{
    const pdData=array.find((array)=>array.id===pdId)
    setProduct(pdData)
  }
  const deleteProduct=(prodid)=>{
    setArray(array.filter(({ id })=>prodid !== id))
}

  return (
    <>
  <form onSubmit={handleSubmit}>
     <div className="container-lg">
        <div className="font">
          <h3>My todo</h3>
        </div>
        <div className="inputs">
          <input type="text" name="name" onChange={inputChange}className="input1"value={product.name||""} placeholder="Todo Name" />
          <input
            type="text"
            name="description"
            onChange={inputChange}
            className="input2"
            placeholder="Todo description"
            value={product.description||""}
          />
          <button className="button-1">Add Todo</button>
          
        </div>
        <div className='label'> 
          <h5 style={{fontWeight:"bold"}}>My Todo</h5>
          <h5>
            Status filter:<button style={{backgroundColor:"#DE3163", color:"white"}}>All</button>
          </h5>
        </div>
      </div>
    </form>
        <div className="card-1">
         {array.map((prd)=>(
            <Card {...prd} key={prd.id} deleteProduct={deleteProduct} editProduct={editProduct}/>
          ))}
        </div>
    </>
  );
}

// App.propTypes = {
//   productname: PropTypes.string,
//   price: PropTypes.string,
// };
export default App;
