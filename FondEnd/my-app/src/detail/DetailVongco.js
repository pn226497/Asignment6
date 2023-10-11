import React from 'react'
import LayoutDetailVongco from '../layouts/LayoutDetailVongco'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'

function DetailVongco() {
  return (
    <div>
        <div>
            <Topmenu />
        </div>
        <div style={{ backgroundColor: "#653208" }}>
            <Layoutmenu />
        </div>
        <div>

        <LayoutDetailVongco/>
        </div>
    </div>
  )
}

export default DetailVongco