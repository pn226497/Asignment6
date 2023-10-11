import React from 'react'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
import LayoutNhan from '../layouts/LayoutNhan'
import Footer from '../footer/Footer'

function Nhan() {
  return (
    <div>
        <div>
            <Topmenu />
        </div>
        <div style={{ backgroundColor: "#653208" }}>
            <Layoutmenu />
        </div>
        <div>
            <LayoutNhan/>
        </div>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Nhan