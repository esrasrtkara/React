import React from 'react'
import { Link, json } from 'react-router-dom';

export default function Homepage() {
  
  return (
    <div>
        Homepage
        <br/>
        {/*SPA larda href attribute kullanımı yanlıştır. */}
        <a href='/products'>Ürünler Sayfası</a>
        <br />
        <Link to={'/products'}>Ürünler Sayfası</Link>
    </div>
  )
}
