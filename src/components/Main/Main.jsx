import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../Cart/Cart'

const Main = () => {

  return (
    <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemListContainer/>}/>
          <Route path='/cart/' element={<Cart/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </main>
  )
}

export default Main