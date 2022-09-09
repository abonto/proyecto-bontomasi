import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../mock/products'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({saludo}) => {

  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
      const getProducts = () =>
          new Promise((res, rej) => {
              const prodFiltrados = Products.filter(
                  (prod) => prod.category === categoryName
              );
              setTimeout(() => {
                  res(categoryName ? prodFiltrados : Products);
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

  return (
      <div>
          <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
          <ItemList items={items} />
      </div>
  );
};

export default ItemListContainer;