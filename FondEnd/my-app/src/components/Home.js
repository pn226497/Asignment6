import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import Layoutmenu from '../Menu/Layoutmenu'
import Topmenu from '../Menu/Topmenu'
import Footer from '../footer/Footer'
// import MessIcon from '../layouts/MessIcon'


function Home() {
  return (
    <div >
      <div  >
        <div><Topmenu /></div>
      </div>
      <div style={{ backgroundColor: "#653208" }}>
        <Layoutmenu />
      </div>
      <div style={{ backgroundColor: "#EBE3D8" }}>
        <HomeLayout />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home