import React from 'react'
import LayoutDetailBongtai from '../layouts/LayoutDetailBongtai'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
function DetailBongtai() {
  return (
    <div>
        <div>
            <Topmenu />
        </div>
        <div style={{ backgroundColor: "#653208" }}>
            <Layoutmenu />
        </div>
        <div>

        <LayoutDetailBongtai/>
        </div>
    </div>
  )
}

export default DetailBongtai