import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductModel } from '../../models/responses/ProductModel';
import ProductService from '../../services/ProductService';
import ProductCard from '../../components/ProductCard/ProductCard';

type Props = {}

const ProductDetail = (props: Props) => {
    //const location = useLocation();

   /* useEffect(() => {
       // console.log(location);
       // let query = new URLSearchParams(location.search);
      // console.log(query.get("id")) 
      
    }, [])*/

    const params = useParams<{id:string}>();
    const [productDetail, setProductDetail] = useState<ProductModel>();
    useEffect(() => {
        if(params.id){//Eğer paramsın id si varsa
            let service:ProductService = new ProductService();
            service.getById(params.id).then(response => {
                setProductDetail(response.data)
                console.log(response.data);

            })
        } 
   
    }, [])
    
    
  return (
    <div>
        {productDetail?.brand}
    </div>
  )
}

export default ProductDetail

