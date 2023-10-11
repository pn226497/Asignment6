import React, { useEffect } from 'react'
import { addToCart, clearCart, decreaseCart, getTotals, selectCartItems, selectcartTotalAmount } from '../features/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import '../css/cart.css'
import { Link } from "react-router-dom";

function CartLayout() {
    const dispatch = useDispatch()
    const data1 = useSelector(selectCartItems)

    const cartTotalAmount = useSelector(selectcartTotalAmount);
    // console.log(cartTotalAmount);
    useEffect(() => {
        dispatch(getTotals())
    }, [data1, dispatch])
    const handleRemoveCart = () => {
        dispatch(clearCart());
    }
    const handleDecrease = (item) => {
        dispatch(decreaseCart(item))
    }
    const handleIncrease = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <div id='cart'>
            <h3 className="text-center">Your Shopping Bag</h3>
            <div className='row'>

                <div className='col-lg-9' >
                    {data1?.map((item) => (
                        <div key={item.id} className='row' id='cart1'>
                            <div className='col-5 col-lg-2 col-sm-4'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="img-fluid"
                                />
                            </div>
                            <div className='col-6 col-lg-7 col-sm-4'>
                                <h6 className='text-[0.8rem] text-black'>{item?.name}</h6>
                                <p className='text-red-600 mx-2'>
                                    <NumericFormat value={item.Gia * item.cartQuantity}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b id="price">Giá: {value}₫</b>} />
                                </p>

                            </div>
                            <div className='col col-lg-2 col-sm-3 m-2'>
                                <div className='row'>
                                    <button onClick={() => handleDecrease(item)} >-</button>
                                    <p className='number'>{item.cartQuantity}</p>
                                    <button onClick={() => handleIncrease(item)} >+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='col-lg-3' id='cart2'>
                    <h5 className='text-center'>Danh sách sản phẩm</h5>
                    {data1?.map((item) => (
                        <div className='row' id='cart2_1'>
                            <div className='col-6'>
                                <p className=' text-black'>{item?.name}</p>
                            </div>
                            <div className='col-2'>
                                <p className='text-red-700 font-bold w-6 h-6 rounded-full bg-blue-700 mt-1'>{item.cartQuantity}</p>
                            </div>
                            <div className='col'>
                                <p>
                                    <NumericFormat value={item.Gia * item.cartQuantity}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b id="price"> {value}₫</b>} />
                                </p>
                            </div>
                        </div>
                    ))}

                    <p className='text-[0.8rem] text-red-600'>
                        <NumericFormat value={cartTotalAmount}
                            thousandSeparator=","
                            displayType="text"
                            renderText={(value) => <b id="price">Tổng tiền: {value}₫</b>} /></p>
                    <div className='row' style={{ marginRight: '20px' }}>

                        <button className='col'> <Link to='/dathang' style={{ color: 'black' }}> Đặt hàng </Link></button>

                        <button className='col' onClick={handleRemoveCart}>Xóa giỏ hàng</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CartLayout