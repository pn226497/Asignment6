import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space, Alert } from 'antd';
import { NumericFormat } from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectCartItems, selectcartTotalAmount, getTotals } from '../features/cartSlice'


const { TextArea } = Input;

function Dathang() {

    const handleBook = () => {
       
        alert("Đặt hàng thành công!");
    }
    const param = useParams()
    const [form] = Form.useForm();

    const dispatch = useDispatch()

    const data1 = useSelector(selectCartItems)
    // console.log(data1);

    const cartTotalAmount = useSelector(selectcartTotalAmount);
    useEffect(() => {
        dispatch(getTotals())
    }, [data1, dispatch])
    return (
        <div className='container'>
            <h4 className='text-center'>Đặt hàng</h4>
            <div className='row'>
                <div className='col-lg-6 col-md-6'>
                    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
           
                        <Form.Item
                            name="name"
                            label="Họ và tên"
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy nhập Họ và tên của bạn!',
                                },
                            ]}

                        >
                            <Input style={{ maxWidth: 330 }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy nhập địa chỉ của bạn!',
                                },
                            ]}
                        >
                            <Input style={{ maxWidth: 330, }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Số điện thoại"
                            rules={[
                                {
                                    required: true,
                                    message: 'Hãy nhập Số điện thoại của bạn!',
                                },
                            ]}
                        >
                            <Input style={{ maxWidth: 330, }}
                            />
                        </Form.Item>
                        <Form.Item label="TextArea">
                            <TextArea rows={4} style={{ maxWidth: 330 }} />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <Button onClick={handleBook} type="primary">
                                    Đặt hàng
                                </Button>
                               
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
                <div className='col-lg-6 col-md-6'>

                    <h5 className='text-center'>Danh sách sản phẩm</h5>

                    {data1?.map((item) => (
                        <div key={item.id} className='row' id='cart2_1'>
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
                </div>
            </div>

        </div>
    )
}

export default Dathang