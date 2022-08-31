import React, {useEffect,useState} from 'react'
import Products from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import products from '../../mock/products';

//Para agarrar un solo producto en el ItemDetailContainer
//const producto1 = Products.find(producto => producto.id === 1)

const ItemListContainer = ({saludo}) => {

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


  return(
      <section>
          <h2>{saludo}</h2>
          <ItemList list={list} />
      </section>

  )
}

export default ItemListContainer