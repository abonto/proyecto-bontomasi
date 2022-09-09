import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../Cart/Cart'

const Main = () => {

  return (
    <main>
      <Routes>
          <Route
              path="/"
              element={<ItemListContainer saludo="Bienvenidos" />}
          />
          <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
          />
          <Route
              path="/detail/:idProd"
              element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
    );
}

export default Main