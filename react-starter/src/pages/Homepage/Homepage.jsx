import React, { useEffect } from 'react'
import { Link, json } from 'react-router-dom';

export default function Homepage() {
 //http isteği
 useEffect(() => {
    //thenCatchFech();
    awaitFetch();

 }, [])

 const awaitFetch =async() => {
    let response = await fetch('https://dummyjson.com/products');
    let json = await response.json();
    console.log(json);
 }

  const thenCatchFech = () => {
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => {
        console.log(err);
    })

  }
 
  
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
