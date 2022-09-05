<<<<<<< HEAD
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../mock/products'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

=======
import React, {useEffect,useState} from 'react'
import Products from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import products from '../../mock/products';

//Para agarrar un solo producto en el ItemDetailContainer
//const producto1 = Products.find(producto => producto.id === 1)
>>>>>>> 2f2144b9521815de7713171ea00b6687e2e6b2d9

  const [items, setItems] = useState([]);
  
  //const {categoryName} = useParams();

<<<<<<< HEAD
  // function filtroCategoria(item) {
  //     return item.category === categoryName
  // }

  const {id} = useParams()
=======
  const [list, setItems] = useState([]);

  const {categoryName} = useParams();

  useEffect(() => {
    const getProducts = () =>
        new Promise((res, rej) => {
            const prodFiltrados = products.filter(
                (prod) => prod.category === categoryName
            );
            setTimeout(() => {
                res(categoryName ? prodFiltrados : products);
            }, 500);
        });

    getProducts()
        .then((data) => {
            setItems(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [categoryName]);

>>>>>>> 2f2144b9521815de7713171ea00b6687e2e6b2d9

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
