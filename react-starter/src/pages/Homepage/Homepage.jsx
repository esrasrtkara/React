import React, { useEffect } from 'react'
import { Link, json } from 'react-router-dom';

export default function Homepage() {
    const myAsyncFunction = () =>{
        return new Promise((resolve,reject) => {
            //async işlem
            setTimeout(() => {
                resolve("veri örneği"); //İşlemin başarılı olması
                //reject() //işlemin başarısız olması
                
            }, 3000);
        });
    };
    useEffect(() => {

      //thenCathFinally();
      asyncAwait();
    }, []);

    const asyncAwait = async() =>{
        try {
            let response = await myAsyncFunction();
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }   
    }

    const thenCathFinally = () =>{
        myAsyncFunction().then(response => {
            console.log("Bir cevap geldi",response);
          })
          .catch(err => {
            console.log("Bir hata geldi",err);
          })
          .finally(() => {
            console.log("Async işlem sonlandı");
          });

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
