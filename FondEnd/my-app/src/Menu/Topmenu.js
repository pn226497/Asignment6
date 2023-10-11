import React, { useState } from 'react'
import '../Menu/menu.css'
import Logo from '../img/logo.jpg'
import Search from '../search/Search'
import Profile from './Profile'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartTotalQuantity } from '../features/cartSlice'
import { useNavigate } from 'react-router-dom'

function Topmenu() {
    const dispatch = useDispatch()
    const cartTotalQuantity = useSelector(selectCartTotalQuantity)
    // const [showCart, setShowCart] = useState(false)
	const navigate = useNavigate()

    const addCart = () => {
			navigate('/cart')
        
    }
    return (
        <div id='topmenu' className='row'>

            <div className='container col-lg-4 col-md-3 col-sm-4'>
                <img id='image' src={Logo} alt='' />
            </div>
            <div className='col-lg-8 col-md-9 col-sm-8'>
                <div className='row' style={{paddingLeft:"30px"}}>
                    <div id='item' className='col-lg-8 col-md-7 col-sm-6 col-8'>
                        <Search />
                    </div>
                    <div className='col-lg-4 col-md-3 col-sm-6 col-3'>
                        <div className='row'>
                            <button 
                            onClick={addCart}
                            className='col-lg-4 col-md-3 col-sm-5 col-3' style={{marginTop:"23px", backgroundColor:'bisque',border:'none', position:'relative'}}>
                                <i className="fa-sharp fa-solid fa-cart-shopping fa-2xl" style={{ color: " #000205"}}></i>
                                <span id='numberCart'>{cartTotalQuantity}</span>
                            
                            </button>

                            <div className='col-lg-4 col-md-6 col-sm-5 col-6' style={{marginTop:'5px'}}>
                                <Profile />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Topmenu