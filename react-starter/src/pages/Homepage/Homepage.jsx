import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, json } from 'react-router-dom';

export default function Homepage() {
 //http isteği
 useEffect(() => {
    //thenCatchFech();
    //awaitFetch();
    axiosGet();

 }, [])

  const  axiosGet = async () =>{
    let response = await axios.get('https://dummyjson.com/products')
    console.log(response.data);
  }

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
        {/*SPA larda href attribute kullanımı yanlıştır. */}
        {/*<a href='/products'>Ürünler Sayfası</a>*/}
        <Link to={'/products'}>Ürünler Sayfası</Link>
    </div>
  )
}
