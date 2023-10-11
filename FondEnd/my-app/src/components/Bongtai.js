import React from 'react'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
import LayoutBongtai from '../layouts/LayoutBongtai'
import Footer from '../footer/Footer'

function Bongtai() {
  return (
    <div>
        <div>
            <Topmenu />
        </div>
        <div style={{ backgroundColor: "#653208" }}>
            <Layoutmenu />
        </div>
        <div>
            <LayoutBongtai/>
        </div>
        <div>
        <Footer />
      </div>
    </div>
  )
}

export default Bongtai