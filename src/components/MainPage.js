import React, { useEffect, useState } from 'react';
import './MainPage.css'
import axios from 'axios';

const MainPage = () => {
    let [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("https://dfff3b06-6386-4201-9dc1-adb439542016.mock.pstmn.io/products").then((result)=>{
            const products=result.data.products;
            setProducts(products);
        }).catch((error)=>{
            console.log(`통신실패:${error}`);
        });
    },[]);
    return (
        <div>
            <div id="header">
                 <div id="header-area">
                     <img src="./images/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="./images/banners/banner1.png" alt="mainImg" />
                </div>
                <h1>Products</h1>
                <div id="product-list">
                    {/* products의 item을 product */}
                    {products.map((product,idx)=>{
                        // console.log(product);
                        return (
                            <div className="product-card" key={idx}>
                                <div>
                                    <img src={product.imageUrl} alt={product.name} className="product-img" />
                                </div>
                                <div className="product-contents">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-price">{product.price}</span>
                                    <span className="product-seller">
                                        <img src="./images/icons/avatar.png" alt="" className="product-avatar" />
                                        <span>{product.seller}</span>
                                    </span>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
            <div id="footer">
                <a href="#!">회사소개</a>
                <a href="#!">이용약관</a>
                <a href="#!">통신판매업:123-1234</a>
                <a href="#!">사업자등록번호:456-56-789654</a>
            </div>
        </div>
    );
};

export default MainPage;