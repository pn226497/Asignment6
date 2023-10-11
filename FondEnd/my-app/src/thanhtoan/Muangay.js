import React, { useEffect } from 'react'
import { Button, Form, Input, Space, Select } from 'antd';
import { NumericFormat } from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux'
import { selectBuyAproduct, getTotals } from '../features/cartSlice'

const { TextArea } = Input;


function Muangay() {
    const [form] = Form.useForm();

    const dispatch = useDispatch()
    const data1 = useSelector(selectBuyAproduct)
    // console.log('data1', data1);
    useEffect(() => {
        dispatch(getTotals())
    }, [data1, dispatch])

    const handleBook = () => {

        alert("Đặt hàng thành công!");
    }
    return (
        <div className='container'>

            <h4 className='text-center'>Đặt hàng</h4>
            <div className='row'>
                <div className='col-lg-6 '>
                    <h5>Thông tin khách hàng</h5>
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
                                <Button onClick={handleBook} type="primary" htmlType="submit" >
                                    Đặt hàng
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
                <div className='col-lg-6 '>

                    <h5 className='text-center'>Sản phẩm</h5>

                    <div className='row'>
                        <div className='col-6 col-lg-6 col-md-6 col-sm-6'>
                            <p className=' text-black'>{data1.name}</p>
                        </div>
                        <div className='col-2 col-lg-3 col-md-2 col-sm-1'>
                            <p>1</p>
                        </div>
                        <div className='col col-lg-3 col-md-4'>
                            <p>
                                <NumericFormat value={data1.Gia}
                                    thousandSeparator=","
                                    displayType="text"
                                    renderText={(value) => <b id="price"> {value}₫</b>} />
                            </p>
                        </div>
                    </div>

                    <p>
                                <NumericFormat value={data1.Gia}
                                    thousandSeparator=","
                                    displayType="text"
                                    renderText={(value) => <b id="price">Tổng tiền: {value}₫</b>} />
                            </p>
                </div>
            </div>
        </div>


    )
}

export default Muangay