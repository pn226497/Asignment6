import React from 'react'
import Muangay from '../thanhtoan/Muangay'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
import Footer from '../footer/Footer'
function Buynow() {
    return (
        <div>
            <div>
                <Topmenu />
            </div>
            <div style={{ backgroundColor: "#653208" }}>
                <Layoutmenu />
            </div>
            <div>
                <Muangay />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Buynow