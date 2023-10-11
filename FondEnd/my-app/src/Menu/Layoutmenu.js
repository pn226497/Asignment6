import React from 'react';
import { Link } from "react-router-dom";

function Layoutmenu() {
  return (
    <div className=' container ' style={{ maxWidth: "500px" }}>
      <div className="row justify-content-md-center " style={{ color: "white" }}>
        <div className='col justify-content-md-end ' style={{ marginTop: "10px" }} >
          <button style={{ marginTop: "8px", width: "80px", padding: " 0px", backgroundColor: "#653208", border: '#653208' }}>
            <Link to="/trangchu" style={{ textDecoration: "none", color: "white", fontWeight: "400" }}>
              <span id='btnMenu'>Trang chủ</span>
            </Link>
          </button>
        </div>
        <div className='col' >
          <div className="dropdown ">
            <button id='btnMenu' className="dropbtn1" style={{ margin: "6px 0px 0px 0px", width: "80px", padding: "10px 0 0px 0px", fontWeight: "400" }}>
              <span >Cửa hàng <i className="fa-solid fa-caret-down fa-xs"></i></span>
            </button>
            <div className="dropdown-content1" style={{ margin: "0px" }}>
              <Link to="/lactay">Lắc tay</Link>
              <Link to="/vongco">Dây chuyền</Link>
              <Link to="/bongtai">Bông tai</Link>
              <Link to="/nhan">Nhẫn</Link>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="dropdown ">
            <Link to="/gioithieu">
              <button id='btnMenu' className="dropbtn1" style={{ margin: "7px 0px 0px 0px", width: "85px", padding: "10px 0", fontWeight: "400" }}>
                Giới thiệu
              </button>
            </Link>

          </div>
        </div>
      </div>

    </div>
  );
};
export default Layoutmenu