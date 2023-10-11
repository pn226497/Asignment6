import React from 'react'
import StepsLayout from '../layouts/StepsLayout'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
import LayoutNhan from '../layouts/LayoutNhan'
import Footer from '../footer/Footer'

function Steps() {
    return (
        <div>
            <div>
                <Topmenu />
            </div>
            <div style={{ backgroundColor: "#653208" }}>
                <Layoutmenu />
            </div>
            <div>
                <StepsLayout />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Steps