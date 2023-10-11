import React, { useState, useEffect } from 'react'
import { selectLactay } from '../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, buyItem, getTotals } from '../features/cartSlice';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Carousel, Button, Input } from 'antd';
import '../css/HomeLay.css'
import { NumericFormat } from 'react-number-format';
import { addDoc, collection, getFirestore, getDocs } from 'firebase/firestore';
import { app } from '../firebase';



function LayoutDetailLactay() {
    const data1 = useSelector(selectLactay)

    const param = useParams()

    const dispatch = useDispatch()
    const handleAddCart = (data, e) => {
        e.preventDefault()
        dispatch(addToCart(data))
        dispatch(getTotals())
    }

    const handleBuy = (data) => {
        dispatch(buyItem(data))
        // console.log(data);
    }

    const [commentInput, setCommentInput] = useState({ comment: '' })
    const [showComment, setShowComment] = useState([])
    const handleInputSend = (e) => {
        setCommentInput((commentInput) => ({ ...commentInput, [e.target.name]: e.target.value }))
    }

    const db = getFirestore(app)
    const useRef = collection(db, 'Comment')
    const handleSend = () => {

        addDoc(useRef, commentInput)
            .then((useRef) => {
              
            })
            .catch(error => {
                console.log(error);
            })
        setCommentInput('')
    }

    const getComments = async () => {
        const comments = [];
        const docsSnap = await getDocs(useRef);
        docsSnap?.forEach((doc) => {
            comments.push({ id: doc.id, data: doc.data() });

        });
        console.log(comments);
        setShowComment(comments);
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div >

            <div className='row '>
                <div className='col col-lg-5 col-md-5 col-sm' style={{ margin: '2rem 5px' }}>
                    {data1.map((data) => (
                        data.id == param.detailId ?
                            <Carousel key={data.id} autoplay>
                                <div >
                                    <img src={data.image} alt='' className="img-fluid" style={{ width: '500px' }} />

                                </div>
                                <div>
                                    <img src={data.image1} alt='' className="img-fluid" style={{ width: '500px' }} />

                                </div>
                                <div>
                                    <img src={data.image2} alt='' className="img-fluid" style={{ width: '500px' }} />

                                </div>
                            </Carousel>
                            : undefined

                    ))}
                </div>

                <div className='col col-lg-6 col-md-6 col-sm' >
                    <h3 style={{ marginTop: "20px" }}>Thông tin sản phẩm: </h3>
                    {data1.map((data) => (
                        data.id == param.detailId ?
                            <div key={data.id} style={{ paddingLeft: '15px' }}>
                                <h5>{data.name}</h5>
                                <h5>
                                    <NumericFormat value={data.Gia}
                                        thousandSeparator=","
                                        displayType="text"
                                        renderText={(value) => <b id="price">Giá:  {value}₫</b>} />
                                </h5>
                                <Link to='/muangay'>
                                    <button id="itemInfo" onClick={() => handleBuy(data)}>Mua ngay</button>
                                </Link>
                                <button id="itemInfo" onClick={(e) => handleAddCart(data, e)}>Thêm vào giỏ hàng</button>
                                <h6 style={{ paddingTop: '15px' }}>&#9830; MÔ TẢ SẢN PHẨM:</h6>
                                <ol>
                                    <li>
                                        Chất liệu: {data.Chatlieu}
                                    </li>
                                    <li>
                                        Đặc tính: {data.description}
                                    </li>
                                </ol>
                                <h6>&#9830; CÁCH BẢO QUẢN:</h6>

                                <ul>
                                    <li>▸ Tránh tiếp xúc trực tiếp quá nhiều với hóa chất</li>
                                    <li>▸ Tránh đeo trang sức khi làm việc nặng</li>
                                    <li>▸ Bảo vệ trang sức trong hộp cẩn thận có bông mút hay khăn mềm, vệ sinh trang sức sau mỗi lần sử dụng</li>
                                </ul>
                                <h6>&#9830; CHÍNH SÁCH BẢO HÀNH:</h6>
                                <ul>
                                    <li>▸ Đổi sản phẩm mới TRONG VÒNG 3 NGÀY nếu sản phẩm lỗi do nhà sản xuất</li>
                                    <li>▸ Bảo hành đánh bóng và vệ sinh MIỄN PHÍ TRONG VÒNG 1 THÁNG</li>
                                    <li>▸ Sửa chữa MIỄN PHÍ TRONG VÒNG 1 THÁNG đối với sản phẩm đứt, gãy, rơi đá...</li>
                                </ul>

                            </div>
                            : undefined
                    ))}
                </div>
            </div>
            <div className='ml-5'>
                <h4>BÌNH LUẬN VỀ SẢN PHẨM</h4>
                <Input style={{ maxWidth: 350 }}
                    name="comment"
                    value={commentInput.comment}
                    onChange={handleInputSend} />
                <Button
                    style={{ marginLeft: 20 }}
                    onClick={handleSend}
                    type="primary"
                >
                    Gửi
                </Button>
                 {/* {comments?.map((item, index) => (
                <div>
                    <p>{item.data.comment}</p>
                </div>
            ))} */}
            </div>
        </div>
    )
}

export default LayoutDetailLactay