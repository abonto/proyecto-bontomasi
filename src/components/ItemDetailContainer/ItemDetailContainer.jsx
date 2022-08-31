import React, {useState,useEffect} from 'react'
//import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Products from '../../mock/products'

const getProducts = new Promise((res,rej) => {
  setTimeout(() => {
    res(Products)
  },2000);
})

const ItemDetailContainer = () => {

  //const {idProd} = useParams();

  //const producto1 = Products.find(producto => producto.id === 1)

  const [product,setProduct] = useState();

  useEffect(() => {
    getProducts().then((Products) => {
      setProduct(Products[0]);
    })
  },[])

  return (
    <div>
      ItemDetailContainer
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer