import React from 'react'
import { ProductModel } from '../../models/responses/ProductModel'
import { Link } from 'react-router-dom';

type Props = {
    product:ProductModel;
}

// ? => Bir alaanı nullable yapar
// ! => Nullable alan içerisinden veri okurken null değilse kontrolü yapar.

const ProductCard = (props: Props) => {
  return (
    <div className="card" >
    <img src={props.product.thumbnail} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.product.title}</h5>
      <p className="card-text">{props.product.description}</p>
      <Link to= {"/product-detail/" + props.product.id} className="btn btn-primary">Detail</Link>
      <button className='btn btn-danger'>Sil</button>
    </div>
   </div>
  )
}

export default ProductCard