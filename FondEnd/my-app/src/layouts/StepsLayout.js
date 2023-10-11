import React, { useState } from 'react';
import { Divider, Steps } from 'antd';

function StepsLayout() {
    const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'Người bán đang chuẩn bị đơn hàng';
  return (
    <div className='mt-5'>
        <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Đặt hàng thành công',
            
          },
          {
            title: 'Đang chuẩn bị',
         
          },
          {
            title: 'Đang giao',
         
          },
          {
            title: 'Đã nhận hàng',
            
          },
        ]}
      />

      <Divider />

      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: 'Đặt hàng thành công'
          },
          {
            title: 'Đang chuẩn bị',
            description,
          },
          {
            title: 'Đang giao',
       
          },
          {
            title: 'Đã nhận hàng'
          },
        ]}
      />
    </div>
  )
}

export default StepsLayout