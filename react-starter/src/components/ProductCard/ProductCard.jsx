import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {

const handleDelete = async(producId) =>{
  try {
    const response = await axios.delete(`https://api.example.com/products/${producId}`);
    console.log('Silme işlemi başarılı:', response);
  } catch (error) {
    console.error('Silme işlemi hatası:', error);
  }
}

  return (
    <div className="card" >
    <img src={props.product.thumbnail} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.product.title}</h5>
      <p className="card-text">{props.product.description}</p>
      <Link to={`/products/${props.product.id}`} className="btn btn-primary">Detail</Link>
      <button onClick={()=>handleDelete(props.product.id)} className='btn btn-danger'>Sil</button>
    </div>
   </div>
  )
}
