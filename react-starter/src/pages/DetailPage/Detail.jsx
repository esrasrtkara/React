import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




export default function Detail() {
  const {id} = useParams();
  const [product, setProduct] = useState()

  useEffect(() => {
    
  
    axiosGetByProduct(id);
  }, [])
  


  const axiosGetByProduct = async (id) =>{
    let response = await axios.get(`https://dummyjson.com/products/${id}`)
    setProduct(response.data)
    console.log(response.data)
  }
 
  if (!product) {
    return <div>Loading...</div>; // Eğer product henüz yüklenmediyse, bir yükleniyor ekranı göster
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail}/>
      <br/>
      <h4>{product.brand}</h4>

      <p>{product.description}</p>
      <br/>
      <p>Price:{product.price}</p>
      <br/>
      <p>Rating:{product.rating}</p>
      <br/>
      <p>Stok:{product.stock}</p>
      <br/>

      


    </div>
  );
}
