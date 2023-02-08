import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './ProducPage.scss'

const ProductPage = () => {
    const{id} =useParams();
    const Navigate=useNavigate();
    const[product, setProduct] = useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`)
        .then((result)=>{
            setProduct(result.data.product); //product로 작성해줘야 데이터가 들어온다.
        }).catch((error)=>{
            console.error(error)
        })
    },[id])
    if(product===null){
        return <h1>상품정보를 받고 있습니다.</h1>
    }

    return (
        <div>
            <button onClick={() => Navigate(-1)} id="back-btn">이전화면</button>
            <div className="image-box">
                <img src={`/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt={product.seller}/>
                <span className='product-seller'>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="createAt">23.02.03</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
};

export default ProductPage;
