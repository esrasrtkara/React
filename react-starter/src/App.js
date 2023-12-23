import {useEffect, useState } from 'react';
import './App.css';
import { Button } from '@mui/material';



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
  //Two way Data Binding
  const [activity, setActivity] = useState("")
  const [activityList, setActivityList] = useState([]);

  const clearActivity = () => {
    setActivity("");
  }
  const addActivity = () => {
     /* setActivityList((prevState) => {
        prevState.push(activity);
        return prevState;
      });*/
      //Destructuring yıkıcı method
      setActivityList([...activityList,activity]);
      clearActivity();
  }
  const removeActvity = (activity) =>{
    setActivityList(activityList.filter(i => i !== activity));
  }
  return (
    <>
      <div>
        <p>{total}</p>
      </div>
      <div>
        <button onClick={() => {increase()}}>Artır</button>
        <button onClick={() => {decrease()}}>Azalt</button>
      </div>
      <hr />
      <div>
        <input value={activity} onChange={(event) => {setActivity(event.target.value)}} type='text' placeholder='Aktivite giriniz..'/>
        <br />
        <button onClick={()=>{addActivity()}}>Ekle</button>
        <ul>
        {/*JSX içerisinde iterasyonlar her zaman MaP ile yapılmalıdır */}
         {activityList.map((element) => <li key={element}>{element} <button onClick={() => {removeActvity(element)}} >X</button></li>)}
        </ul>
      </div>
    </>
  );
}