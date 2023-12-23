import {useEffect, useState } from 'react';
import './App.css';



// JSX => HTML + JS
// HTML'de keywordün ismini değiştirmek
// class => className
export default function App() {
//React hooks
//total,setTotal => initial value
//let total = 0;
  const [total,setTotal] = useState(0);

//useEffect 
//component ilk render edildiğinde çalışır
//dep. listesindeki verilerin değiştiği anda tekrar tetiklenen yapıdır.
useEffect(()=> {
  console.log(total);
},
[total])

  

  const increase = () => {
      setTotal(total+1);//async 
  }
  const decrease = () => {
      setTotal(total-1);
  }

  return (
    <>
      <div>
        <p>{total}</p>
      </div>
      <div>
        <button onClick={increase}>Artır</button>
        <button onClick={decrease}>Azalt</button>
      </div>
    </>
  );
}