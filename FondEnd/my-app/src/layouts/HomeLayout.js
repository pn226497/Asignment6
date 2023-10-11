import React, { useState } from 'react'
import image1 from '../img/img1.png'
import image2 from '../img/img2.png'
import H1 from '../img/H1.jpg'
import H2 from '../img/H2.jpg'
import H3 from '../img/H3.jpg'
import H4 from '../img/H4.jpg'
import '../css/HomeLay.css'
import { Link } from "react-router-dom";
import { selectNhan } from '../features/productSlice'
import { useSelector } from 'react-redux'
import '../css/HomeLay.css'
import { Carousel } from 'antd';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { selectLactay } from '../features/productSlice'
import { selectBongtai } from '../features/productSlice'
import { NumericFormat } from 'react-number-format';


function HomeLayout() {
  const data1 = useSelector(selectNhan)
  const data2 = useSelector(selectLactay)
  const data3 = useSelector(selectBongtai)


  return (
    <div >
      <div className='row' >

        <div className='col col-lg-6 col-md-6 col-sm' style={{ marginTop: "30px" }}>
          <h3 style={{ textAlign: "center", fontFamily: "Palatino Linotype,serif", fontStyle: "italic", fontWeight: "bold", padding: "5px 50px" }}>
            Nếu bạn là người cần năng lượng tích cực để xua tan buồn phiền
          </h3>

          <img id='image1' src={image1} alt='' className="img-fluid" />
          <p style={{ padding: "20px 50px", fontStyle: "italic" }}>Ngoài ra khi đến với Tepys, Tepys sẽ giúp bạn tìm được những linh vật hay vòng
            tay phù hợp giúp bạn cân bằng năng lượng trong cơ thể. Tepys mong muốn khi sở
            hữu những phụ kiện trang sức này, bạn sẽ luôn cảm thấy vui vẻ, khỏe mạnh, bình
            an và gặp nhiều may mắn.</p>
        </div>

        <div className='col col-lg-6 col-md-6 col-sm' style={{ marginTop: "18vh" }}>

          <p style={{ padding: "5px 45px", fontStyle: "italic" }}>Thì Tepys có 2 dòng bạc 925 và bạc 99 cao cấp có thể bạn sẽ cần.
            Vì 2 dòng sản phẩm này hàm lượn bạc rất cao. Bạc có đặc tính kháng
            sinh và khử trùng mạnh giúp chống lại một số vi khuẩn, vi rút và nấm.
            Bạc cũng có phản ứng độc tính và đổi màu khi gặp một số chất độc hại.
            Công dụng của bạc có rất nhiều, hãy cùng Tepys khám phá qua từng bài viết nhé</p>
          <img id='image2' src={image2} alt='' className="img-fluid" style={{ padding: "5px 30px" }} />
        </div>
      </div>

      <div className='' style={{ margin: '6rem 0' }}>
        <h4 style={{ textAlign: 'center', fontStyle: "italic" }}>BEST SELLER</h4>
        <Splide options={{
          rewind: true,
          gap: '0.5rem',
          speed: 300,
          perPage: 4,
          pagination: false,
          autoplay: true,
          pauseOnHover: true,
          resetProgress: true,
          perMove: 1,
          padding: { left: 50 },
          interval: 2000,
        }}>
          <SplideSlide >
            {data3.map(data => (
              data.id == 70 ?
                <div key={data.id}  >
                  <Link to={`/detail_bongtai/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_bongtai/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '100px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}
          </SplideSlide>
          <SplideSlide >
            {data2.map(data => (
              data.id == 21 ?
                <div key={data.id}  >
                  <Link to={`/detail_lactay/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_lactay/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '120px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}
          </SplideSlide>
          <SplideSlide >
            {data3.map(data => (
              data.id == 77 ?
                <div key={data.id}  >
                  <Link to={`/detail_bongtai/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_bongtai/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '100px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}
          </SplideSlide>

          <SplideSlide>
            {data2.map(data => (
              data.id == 32 ?
                <div key={data.id}  >
                  <Link to={`/detail_lacaty/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_lacaty/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '100px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}
          </SplideSlide>
          <SplideSlide>
            {data1.map(data => (
              data.id == 51 ?
                <div key={data.id}  >
                  <Link to={`/detail_nhan/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_nhan/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '100px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}

          </SplideSlide>
          <SplideSlide>
            {data1.map(data => (
              data.id == 52 ?
                <div key={data.id} >
                  <Link to={`/detail_nhan/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_nhan/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '100px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}

          </SplideSlide>
          <SplideSlide>
            {data3.map(data => (
              data.id == 63 ?
                <div key={data.id} >
                  <Link to={`/detail_bongtai/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_bongtai/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '100px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}

          </SplideSlide>
          <SplideSlide >
            {data2.map(data => (
              data.id == 30 ?
                <div key={data.id}  >
                  <Link to={`/detail_lactay/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_lactay/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '120px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}
          </SplideSlide>
          <SplideSlide>
            {data1.map(data => (
              data.id == 57 ?
                <div key={data.id} >
                  <Link to={`/detail_nhan/${data.id}`}><img id='layoutimg' src={data.image} alt='' className="img-fluid" /></Link>
                  <Link to={`/detail_nhan/${data.id}`}><p className='name'>{data.name}</p></Link>
                  <p style={{ maxWidth: '100px', paddingLeft: '10px' }}>
                    <NumericFormat value={data.Gia}
                      thousandSeparator=","
                      displayType="text"
                      renderText={(value) => <b id="price"> {value}₫</b>} />
                  </p>
                </div>
                : null
            ))}

          </SplideSlide>
        </Splide>
      </div>

      <div className='row container' style={{ padding: '10vh 0px 50px 50px' }}>

        <div className=' col col-lg-8 col-md-12 ' style={{ paddingLeft: '12%' }}>
          <Carousel autoplay>
            <div >
              <Link to='/home'><img src={H4} alt='' className="img-fluid" /></Link>
              {/* <button className='buttonItem1' >  Xem thêm</button> */}

            </div>
            <div>
              <Link to='/home'><img src={H2} alt='' className="img-fluid" /></Link>
              {/* <button className='buttonItem2' >Xem thêm</button> */}

            </div>
            <div>
              <Link to='/home'><img src={H3} alt='' className="img-fluid" /></Link>
              {/* <button className='buttonItem2' >Xem thêm</button> */}

            </div>
            <div>
              <Link to='/home'><img src={H1} alt='' className="img-fluid" /></Link>
              {/* <button className='buttonItem2' >Xem thêm</button> */}

            </div>
          </Carousel>
          {/* <button style={{margin:"-50px 0px 20px 60%", position:"relative", color:"white", width:'30%'}}>xem theem</button> */}
        </div>
        <div className='col col-lg-4 col-md ' style={{ textAlign: "center", paddingTop: '10px' }}>
          <h4>Welcome to Tepys' Cave ❤️</h4>
          <p>

            Nơi đây sẽ giúp bạn trở nên lộng lẫy và thu hút hơn với những bộ cánh nhàm chán hàng ngày. Ngoài ra, bên
            trong hang động sâu thẳm đại dương này còn là nơi giúp bạn tìm thấy những phụ kiện giúp cải thiện năng lượng,
            xua tan buồn phiền và cả những mẹo giúp bạn bảo quản trang sức mà không phải ai cũng có thể tìm ra hoặc biết được.
            Hãy để Tepys tìm trang sức phù hợp cho bạn

          </p>
          <p>

            Ngoài ra khi đến với Tepys, Tepys sẽ giúp bạn tìm được những linh vật hay vòng tay phù hợp giúp bạn cân bằng
            năng lượng trong cơ thể. Tepys mong muốn khi sở hữu những phụ kiện trang sức này, bạn sẽ luôn cảm thấy vui vẻ,
            khỏe mạnh, bình an và gặp nhiều may mắn. Vì Tepys chỉ là một cô gái nhỏ với ước mơ được truyền năng lượng yêu
            thương đến mọi người. Hãy kết nối một cộng đồng Tepys để đẩy lùi sự trầm cảm và tự ti trong mỗi chúng ta
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <img style={{ border: '1px solid ', padding: "5px" }} src='https://static.shoplineapp.com/web/assets/payment/visa.svg' alt='' /> &nbsp;
        <img style={{ border: '1px solid ', padding: "5px" }} src='https://static.shoplineapp.com/web/assets/payment/master.svg' alt='' /> &nbsp;
        <img style={{ border: '1px solid ', padding: "5px" }} src='https://static.shoplineapp.com/web/assets/payment/jcb.svg' alt='' />
      </div>


    </div>
  )
}

export default HomeLayout