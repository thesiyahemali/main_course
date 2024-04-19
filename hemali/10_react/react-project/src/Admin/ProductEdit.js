import axios from 'axios'
import React, { useEffect,useState } from 'react'
 import { useParams,useNavigate } from 'react-router-dom'
const ProductEdit = () => {
  const navigte=useNavigate()
    const {id}=useParams ()  // product nu id malu ae  product mathi maluae edit valu 
  // category na data ne for loop ma muka se tena mate banvu se 
    const [cat,setCat]=useState([])
      
    //  badhi input filed mate usesate lidthu se 
    const[product,setproduct]=useState({productName:'',productPrice:'',productQuantity:'',productCategory:'',productUrl:''})

    useEffect(()=>{
       axios.get(`http://localhost:8000/product?id=${id}`).then((res)=>{
          // console.log(res.data[0]);  0 aetle lakhvi savi k array ma 0 thi male aetle
          setproduct(res.data[0])
       })
          
        // category lava mate aa api se 
       axios.get(`http://localhost:8000/category`).then((res) => {
        setCat(res.data);
      });
    }, []);
  
    // })

    //  onchange api hoy tema data thi value lavi ae 
    const productSet=(e)=>{
        const{name,value}=e.target
          setproduct({...product,[name]:value})
       }


       const submitproduct =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/product/${id}`, product).then(() => { 
          navigte('/admin/product')
       })
       
        }
  return (
    <>

<div className="container">
        <h1>Edit Product</h1>
        <form onSubmit={submitproduct}>
          <div className="mb-3 bg-light p-2 rounded">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control "
              id="productName"
              name="productName"
              onChange={productSet}
              defaultValue={product.productName}
            />
          </div>
          <div   className="mb-3 bg-light p-2 rounded">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              name="productPrice"
              onChange={productSet}
              defaultValue={product.productPrice}
            />
          </div>
          <div className="mb-3 bg-light p-2 rounded">
            <label htmlFor="productQuantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="productQuantity"
              name="productQuantity"
              onChange={productSet}
              defaultValue={product.productQuantity
              }
            />
          </div>

          <div className="mb-3 bg-light p-2 rounded">
            <label htmlFor="" className="form-label">
              Product Image
            </label>
            <input
              type="url"
              className="form-control"
              id="productUrl"
              name="productUrl"
              onChange={productSet}
              defaultValue={product.productUrl}
            />
          </div>
          <div className="mb-3 bg-light p-2 rounded">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              name="productCategory"
              className="form-control"
              id="productCategory"
              onChange={productSet}
              value={product.productCategory}
            > 
              {/* dropdown category mate loop kari  */}
              {cat.map((res) => {
                return <option value={res.name}>{res.name}</option>;
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default ProductEdit