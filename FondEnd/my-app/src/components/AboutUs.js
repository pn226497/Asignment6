import React from 'react'
import Topmenu from '../Menu/Topmenu'
import Layoutmenu from '../Menu/Layoutmenu'
import Footer from '../footer/Footer'

function AboutUs() {
  return (
    <div >
        <div>
            <Topmenu />
        </div>
        <div style={{ backgroundColor: "#653208" }}>
            <Layoutmenu />
        </div>
        <div style={{backgroundColor:'#EBE3D8'}}>
            <div style={{textAlign:'center', padding:'20px 0 20px 0', fontFamily: "Palatino Linotype,serif"}}>
            <h4>GIỚI THIỆU</h4>
            </div>
            <div style={{padding:'25px'}}>
                <p>Tepys chính thức ra mắt vào năm 2020.</p>
                <p>Với khơi nguồn từ lòng đam mê thời trang, khát khao mang đến cái đẹp cho tất cả 
                    phụ nữ và hơn thế nữa là mong muốn được góp phần tạo dựng hình ảnh mới lạ cho 
                    ngành công nghiệp thời trang Việt Nam, Tepys đã tập trung đầu tư vào chất lượng 
                    và kiểu dáng sản phẩm để thương hiệu Tepys Accessories trở thành một cái tên gần 
                    gũi hơn với khách hàng.
                    </p>
                    <p>
                    Với phương châm "LÀM CHO 1 NGÀY CỦA BẠN TRỞ NÊN TƯƠI SÁNG", Tepys mong muốn mang 
                    lại cho khách hàng những sản phẩm tốt nhất để các bạn không chỉ thể hiện cá tính 
                    bản thân mà còn lan toả nguồn năng lượng tích cực, mạnh mẽ đến xung quanh.
                    </p>
            </div>
        </div>
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default AboutUs