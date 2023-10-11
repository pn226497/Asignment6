import React from 'react'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
import LayoutLactay from '../layouts/LayoutLactay'
import Footer from '../footer/Footer'


function Lactay() {
    return (
        <div>
            <div>
                <Topmenu />
            </div>
            <div style={{ backgroundColor: "#653208" }}>
                <Layoutmenu />
            </div>
            <div>
                <LayoutLactay />
            </div>
            <div>
        <Footer />
      </div>
        </div>
    )
}

export default Lactay