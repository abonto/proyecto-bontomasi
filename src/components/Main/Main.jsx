import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'

const Main = () => {

  return (
    <main className='container-main'>
        <Routes>
          <Route path='/' element={<ItemListContainer saludo="Bienvenidos"/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>
        </Routes>
    </main>
  )
}

export default Main