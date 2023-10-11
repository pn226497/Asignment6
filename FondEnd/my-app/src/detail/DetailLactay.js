import React from 'react'
import LayoutDetailLactay from '../layouts/LayoutDetailLactay'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'

function DetailLactay() {
  return (
    <div>
        <div>
            <Topmenu />
        </div>
        <div style={{ backgroundColor: "#653208" }}>
            <Layoutmenu />
        </div>
        <div>

        <LayoutDetailLactay/>
        </div>
    </div>
  )
}

export default DetailLactay