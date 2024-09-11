import React,{useEffect,useState} from 'react'

// api thi data ky rite lavavo te karvleu example se  fack store api thi data lavevlo se
const Featch = () => {
    const [product,setproduct]=useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products').then((result)=>{
          return result.json()// json no data return karvo 
      }).then((res)=>{
        console.log(res);
        setproduct(res)
        
      })
    },[])

   
  
  return (
    <div className='container d-flex flex-wrap' style={{height:'400px',width:'100%'}}>

        {product.map((prd)=>{
          return(
           <>
             {/* <h3>{prd.title}</h3>
             <img src={prd.image}/> */}

<div class="card" style={{width:'18rem',alignItems:'center',margin:'10px',padding:'5px'}}>
  <img src={prd.image} style={{width:'250px',height:'300px',}} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h6>{prd.title}</h6>
    <h5>{prd.category}</h5>
    <h6>{prd.id}</h6>
    {/* <h6>{prd.description}</h6> */}
    <h6>{prd.price}</h6>
    

  </div>
</div>
           </>
          )
        })}
    
    </div>
  )
}

export default Featch
