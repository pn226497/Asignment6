import React from 'react'
import '../footer/footer.css'

function Footer() {
    return (
        <div style={{backgroundColor:'black', color:'white'}}>
            <div className='row' style={{padding:'20px'}}>
                <div className=' col-lg-4 col-md-4' style={{ textAlign: 'center',  }}>
                    <h5>Trợ giúp</h5>
                    <p>Hotline: <a href="tel: 0356184333"> 0356184333</a></p>
                    <p>Mail: <a href="mailto: Tepysaccessories@gmail.com">Tepysaccessories@gmail.com </a></p>
                    <p>Địa chỉ: 27 Huỳnh Văn Bánh P.11 Quận Phú Nhuận TP HCM</p>


                </div>
                <div className=' col-lg-4 col-md-4'  style={{ textAlign: 'center' }}>
                    <h5>Liên hệ</h5>
                    <p>Phone / 0356184333</p>
                    <p>Hours / 9am-9pm</p>
                    <p>Mail /tepys.accessories@gmail.com</p>
                </div>
                <div className=' col-lg-4 col-md-4'  style={{ textAlign: 'center' }}>
                    <h5>Kết nối cùng nhau</h5>
                    <p> <span></span>
                        <i className="fa-brands fa-facebook fa-xl"></i> &nbsp;
                        <i className="fa-brands fa-tiktok fa-xl"></i> &nbsp;
                        <i className="fa-brands fa-instagram fa-xl"></i>  &nbsp;
                        <i className="fa-brands fa-youtube fa-xl"></i>
                    </p>
                </div>

            </div>
            <p style={{textAlign:'center', padding:'25px', borderTop:"1px solid"}}>Bản quyền © 2023 bởi Tepys</p>
        </div>
    )
}

export default Footer