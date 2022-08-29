import React, {useEffect,useState} from 'react'
import Products from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const listProducts = new Promise (
  (result, reject) => setTimeout(() => result(Products), 2000)

);

const ItemListContainer = ({saludo}) => {

  const [list, setList] = useState([]);

  useEffect(() => {
      listProducts.then(setList)
  }, [])

  return(
      <section>
          <h2>{saludo}</h2>
          <ItemList list={list} />
      </section>

  )
}

export default ItemListContainer