import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../mock/products'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {


  const [items, setItems] = useState([]);
  
  //const {categoryName} = useParams();

  // function filtroCategoria(item) {
  //     return item.category === categoryName
  // }

  const {id} = useParams()

  useEffect(()=>{
      const getProducts = new Promise((res, rej)=>{

          const prodFiltrados = Products.filter((prod) => prod.category === id)

          setTimeout(() => {res (id ? prodFiltrados : Products);}, 2000);
          
      });
  
      getProducts
          .then((data)=>{
              setItems(data);
      })
          .catch((error)=>{
              console.log(error);
          })
          .finally(()=>{
              console.log(`finally`);
          });

  }, [id]);

  return (
    <div>
      <ItemList list={items} />
    </div>
  )
}

export default ItemListContainer
