import React, { useState } from 'react'
import '../search/search.css'
import { selectLactay } from '../features/productSlice'
import { selectBongtai } from '../features/productSlice'
import { selectNhan } from '../features/productSlice'
import { selectVongco } from '../features/productSlice'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


function Search() {
    const [productsNhan, setProductsNhan] = useState();
    const [productsLactay, setProductsLactay] = useState();
    const [productsBongtai, setProductsBongtai] = useState();
    const [productsVongco, setProductsVongco] = useState();
    const [searchVal, setSearchVal] = useState('')

    const dataNhan = useSelector(selectNhan)
    const dataLactay = useSelector(selectLactay)
    const dataBongtai = useSelector(selectBongtai)
    const dataVongco = useSelector(selectVongco)
    const handleSearch = (e) => {
        e.preventDefault()

        const filterBySearchNhan = dataNhan.filter((item) => {
            return item.name.toLowerCase().includes(searchVal.toLowerCase())
        })

        const filterBySearchLactay = dataLactay.filter((item) => {
            return item.name.toLowerCase().includes(searchVal.toLowerCase())
        })

        const filterBySearchBongtai = dataBongtai.filter((item) => {
            return item.name.toLowerCase().includes(searchVal.toLowerCase())
        })

        const filterBySearchVongco = dataVongco.filter((item) => {
            return item.name.toLowerCase().includes(searchVal.toLowerCase())
        })
        
        setProductsNhan(filterBySearchNhan);
        setProductsLactay(filterBySearchLactay);
        setProductsBongtai(filterBySearchBongtai);
        setProductsVongco(filterBySearchVongco);
    }

    const handleShow = () => {
        setSearchVal('')
    }
    return (
        <div>
            <form className="form">
                <button className='timkiem' onClick={handleSearch}>
                    <svg height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <input
                    className="input1"
                    placeholder="Tìm kiếm sản phẩm"
                    required=""
                    type="text"
                    onChange={(e) => setSearchVal(e.target.value)}

                />
                <button className="reset" onClick={handleShow} type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {searchVal.length > 0 ?
                    <div id='searchproduct' className='search-items'>
                        {productsNhan ? productsNhan.map((product, index) => {
                            return (
                                <Link style={{ textDecoration: "none" }} to={`/detail_nhan/${product.id}`} key={index} >
                                    <p id="nav">{product.name}</p>
                                </Link>
                            )
                        }) : null
                        }

                        {productsLactay ? productsLactay.map((product, index) => {
                            return (
                                <Link style={{ textDecoration: "none" }} to={`/detail_lactay/${product.id}`} key={index}>
                                    <p id="nav">{product.name}</p>
                                </Link>
                            )
                        }) : null
                        }
                        {productsBongtai ? productsBongtai.map((product, index) => {
                            return (
                                <Link style={{ textDecoration: "none" }} to={`/detail_bongtai/${product.id}`} key={index}>
                                    <p id="nav">{product.name}</p>
                                </Link>
                            )
                        }) : null
                        }
                        {productsVongco ? productsVongco.map((product, index) => {
                            return (
                                <Link style={{ textDecoration: "none" }} to={`/detail_vongco/${product.id}`} key={index}>
                                    <p id="nav">{product.name}</p>
                                </Link>
                            )
                        }) : ''
                        }
                    </div>
                    : ''
                }
            </form>
        </div>
    )
}

export default Search