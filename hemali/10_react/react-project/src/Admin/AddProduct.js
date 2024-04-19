import axios from "axios";
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  //       const [productName, setProductName] = useState('');
  // const [productPrice, setProductPrice] = useState('');
  // const [productQuantity, setProductQuantity] = useState('');
  // const [productCategory, setProductCategory] = useState('');
  // const [productUrl, setProductUrl] = useState(''); 
  const  navigate =useNavigate()
  // category na data ne for loop ma muka se tena mate banvu se 
  const [cat,setCat]=useState([])
      
    //  badhi input filed mate usesate lidthu se 
    const[product,setproduct]=useState({productName:'',productPrice:'',productQuantity:'',productCategory:'',productUrl:''})

      // category na data lava aya get thi 
    useEffect(()=>{
       axios.get(`http://localhost:8000/category`).then((res)=>{
          setCat(res.data)
       })
       console.log(product);
    },[product])
      
      //  onchangje event ma data set karva
       const productSet=(e)=>{
        const{name,value}=e.target
          setproduct({...product,[name]:value})
       }


        // submit uper cilck karvi tayre api ma data jay tena mate 
    const submitproduct =(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/product`,product).then((res)=>{
               setCat(res.data)
               navigate('/admin/product')
        })
    }
  return (
    <>
    <div className="container">
        <h1 className="mb-4 text-primary">Add Product</h1>
        <form onSubmit={submitproduct}>

            <div className="mb-3 bg-light  p-2 rounded">
                <label htmlFor="productUrl" className="form-label">Product Image</label>
                <input
                    type="url"
                    className="form-control"
                    id="productUrl"
                    onChange={productSet}
                    name='productUrl'
                    required
                />
            </div>

            <div className="mb-3 bg-light p-2 rounded">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name='productName'
                    onChange={productSet}
                    required
                />
            </div>
            <div className="mb-3 bg-light p-2 rounded">
                <label htmlFor="productPrice" className="form-label">Product Price</label>
                <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    name='productPrice'
                    onChange={productSet}
                    required
                />
            </div>
            <div className="mb-3 bg-light p-2 rounded">
                <label htmlFor="productQuantity" className="form-label">Product Quantity</label>
                <input
                    type="number"
                    className="form-control"
                    id="productQuantity"
                    onChange={productSet}
                    name='productQuantity'
                    required
                />
            </div>

            <div className="mb-3 bg-light p-2 rounded">
                <label htmlFor="productCategory" className="form-label">Product Category</label>
                <select
                    name='productCategory'
                    className="form-select  text-dark"
                    id="productCategory"
                    onChange={productSet}
                    required
                >
                    <option value="">Select Category</option>
                    {cat.map((res) => (
                        <option key={res.id} value={res.name}>{res.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
</>
  );
};

export default AddProduct;
