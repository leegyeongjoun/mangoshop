import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = (props) => {
    const {id} = useParams(); //리액트 라우터 라이브러리에서 제공하는 함수이고, Route path 와 일치하는 현재 URL에서 동적 매개변수의 키/값 쌍의 개체를 반환한다.
    return (
        <div>
            <h1>상품상세페이지</h1>
            <h2>{id}번째 상품 상세 페이지</h2>
        </div>
    );
};

export default ProductPage;