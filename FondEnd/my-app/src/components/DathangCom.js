import React from 'react'
import Dathang from '../thanhtoan/Dathang'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'

function DathangCom() {
    return (
        <div>
            <div>
                <Topmenu />
            </div>
            <div style={{ backgroundColor: "#653208" }}>
                <Layoutmenu />
            </div>
            <div>
                <Dathang />
            </div>
        </div>
    )
}

export default DathangCom