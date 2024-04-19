import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Product = () => {
  const navigte = useNavigate()
  // api ma data jova mate useState karu 
  const [product, setproduct] = useState([])

  useEffect(() => {
    getProduct()
  }, [])

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/product/${id}`).then(() => {
      getProduct()
    })
  }

  //  method banvi ne tema lakhi namkhu se function ma aetle useEffect ma use kari sakvi
  const getProduct = () => {
    axios.get(`http://localhost:8000/product`).then((res) => {
      setproduct(res.data)
      // console.log(res.data);
    })

    
  }
  const editData = (id) => {
    navigte(`/admin/product/editproduct/${id}`)
  }
  return (
    <>
      <br />
      <Link to={"/admin/product/addpro"} class="btn btn-primary">
        Add Product
      </Link>
      <br />
      <br />
      <br />

      <table class="table  ">

      <thead>

      
        <tr >
        <th scope='col'>Image</th>
          <th scope='col'>Name</th>
          <th scope='col'>Price</th>
          <th scope='col'>Quntity</th>
          
          <th scope='col'>Category</th>
          <th scope='col'>Action</th>

        </tr>
        </thead>
        <tbody>
          {product.length != 0 && (
            <>
              {product.map((res) => {
                return (
                  <>
                    <tr>
                    <td><img height={'50px'} width={'50px'} src={res.productUrl} alt="" /></td>
                      <td>{res.productName}</td>
                      <td>{res.productPrice}</td>
                      <td>{res.productQuantity}</td>
                 
                      <td>{res.productCategory}</td>


                      <td><button onClick={() => {
                        deleteProduct(res.id)  //json ma je data jay te id 
                      }} style={{ color: 'red' }}>Delete</button>
                      
                      
                    <button onClick={() => {
                        editData(res.id)  //json ma je data jay te id 
                      }} style={{ color: 'red' }}>Edit</button>
                      </td>

                    
                    </tr>
                  </>
                )
              })}
            </>
          )}
          {product.length == 0 && (
            <>
              <tr>
                <td colSpan={2}>No Data Founde</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Product;
