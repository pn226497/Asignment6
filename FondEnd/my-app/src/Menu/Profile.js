import React, { useState } from 'react'
import '../Menu/menu.css'
import { Link } from "react-router-dom";
import { Avatar } from 'antd';
import { logout, selectUser } from '../features/userSlice';
import { getLocalStorage } from '../utils/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Profile() {
    const [show, setShow] = useState('none');
    const handleShow = () => {
        if(show === "none"){
            setShow("block")
        }
        if( show === "block"){
            setShow("none") 
        }
    }

    const user = useSelector(selectUser);
    const userInfo = user ? user : getLocalStorage('username')

	const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("value")
			navigate('/')
        
    }

    const handleStep = () => {
			navigate('/donhang')

    }
    
   
    return (
        <div onClick={handleShow} className='' style={{marginTop:"15px"}}>
           
            <div className="dropdown ">
                <button className="dropbtn">
                    <i id='icon' className="fa-solid fa-circle-user fa-2xl" style={{ color: " #000714" }}></i>
                </button>
                <div style={{display:show}} className="dropdown-content col">
                <Avatar size={64} src={userInfo ? userInfo.photoURL: ''} style={{ margin:'10px 4rem'}} />
                <ul>
                    <li>
                        {userInfo && userInfo.displayName}
                    </li>
                </ul>
                    <p style={{textAlign:'center'}}>{userInfo && userInfo.email}</p><hr/>
                    <button className='buttonIte' onClick={handleStep}>Đơn hàng của bạn</button> <br/>
                    <button className='buttonIte' onClick={handleLogout}>Đăng xuất</button>
                </div>
            </div>
        </div>
        
    )
}

export default Profile