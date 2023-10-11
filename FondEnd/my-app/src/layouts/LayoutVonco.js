import React from 'react'
import { selectVongco } from '../features/productSlice'
import '../css/HomeLay.css'
import { Link } from "react-router-dom";
import { NumericFormat } from 'react-number-format';
import { useDispatch,useSelector } from 'react-redux'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { addToCart, getTotals } from '../features/cartSlice';

function LayoutVonco() {
    const data1 = useSelector(selectVongco)
    const dispatch = useDispatch()
    const handleAddCart = (data, e) => {
        e.preventDefault()
        dispatch(addToCart(data))
        dispatch(getTotals())
    }
    return (
        <div className='container'>
            <div className='row'>
                {data1.map(data => (
                    <div key={data.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6"  >
                        <Link to={`/detail_vongco/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                        <Link to={`/detail_vongco/${data.id}`}><p className='name'>{data.name}</p></Link>
                        <h5>
                            <NumericFormat value={data.Gia}
                                thousandSeparator=","
                                displayType="text"
                                renderText={(value) => <b id="price"> {value}₫</b>} />
                        </h5>
                 <button  onClick={(e) => handleAddCart(data, e)} style={{ margin: '0 0 4rem 0', border:'none', backgroundColor:'white' }}><ShoppingCartOutlined /></button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default LayoutVonco