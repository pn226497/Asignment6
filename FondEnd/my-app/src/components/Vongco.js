import React from 'react'
import LayoutVonco from '../layouts/LayoutVonco'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
import Footer from '../footer/Footer'


function Vongco() {
  return (
    <div>
        <div>
            <Topmenu />
        </div>
        <div style={{ backgroundColor: "#653208" }}>
            <Layoutmenu />
        </div>
        <div>
        <LayoutVonco />
        </div>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Vongco