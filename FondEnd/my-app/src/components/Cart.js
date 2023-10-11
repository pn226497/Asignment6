import React from 'react'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
import CartLayout from '../layouts/CartLayout'

function Cart() {

  return (

    <div>
      <div>
        <Topmenu />
      </div>
      <div style={{ backgroundColor: "#653208" }}>
        <Layoutmenu />
      </div>
      <div>
        <CartLayout/>
      </div>
    </div>
  )
}

export default Cart