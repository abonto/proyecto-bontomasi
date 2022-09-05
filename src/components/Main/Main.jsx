import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
<<<<<<< HEAD
import Cart from '../Cart/Cart'
=======
import {Routes, Route} from 'react-router-dom'
>>>>>>> 2f2144b9521815de7713171ea00b6687e2e6b2d9

const Main = () => {

  return (
<<<<<<< HEAD
    <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemListContainer/>}/>
          <Route path='/cart/' element={<Cart/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
=======
    <main className='container-main'>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="Bienvenidos"/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>
>>>>>>> 2f2144b9521815de7713171ea00b6687e2e6b2d9
        </Routes>
    </main>
  )
}

export default Main