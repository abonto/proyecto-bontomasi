import React from 'react'

const Main = ({saludar}) => {

  return (
    <main className='container-main'>
        <h2 onClick={saludar}>Bienvenidos</h2>
    </main>
  )
}

export default Main