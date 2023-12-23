import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='product-card'>
        <img src='https://m.media-amazon.com/images/I/71MAIFNMixL._AC_SL1500_.jpg'/>
        <p>{props.name}</p>
        <span>{props.price}</span>
    </div>
  )
}
