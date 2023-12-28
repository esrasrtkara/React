import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}

const ProductDetail = (props: Props) => {
    const location = useLocation();
    useEffect(() => {
        console.log(location);
        let query = new URLSearchParams(location.search);
       console.log(query.get("id")) 
      
    }, [])
    
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail

