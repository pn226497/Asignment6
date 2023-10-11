import React from 'react'
import LayoutDetailNhan from '../layouts/LayoutDetailNhan'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
function DetailNhan() {
  return (
    <div>
        <div>
            <Topmenu />
        </div>
        <div style={{ backgroundColor: "#653208" }}>
            <Layoutmenu />
        </div>
        <div>
        <LayoutDetailNhan/>
        </div>
    </div>
  )
}

export default DetailNhan