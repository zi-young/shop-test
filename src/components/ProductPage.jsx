import { AiFillHeart } from "react-icons/ai"; 
import React, {useEffect, useState} from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, message } from 'antd';
import "./ProductPage.scss"
import { API_URL } from "../config/constants";
import dayjs from "dayjs";


const ProductPage = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const getProduct=() =>{
        axios.get(`${ API_URL }/products/${id}`)
        .then((result) => {
            setProduct(result.data.product); // 데이터 구조에 맞게 .product를 추가합니다.
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getProduct();
    }, []);

    const onClickPurchase = () =>{
        axios.post(`${API_URL}/purchase/${id}`)
        .then((result) =>{
            message.info(`결제가 완료되었습니다`)
            getProduct();
        })
        .catch((error) =>{
            message.error(`에러가 발생했습니다 ${error.message}`)
        })
    }

    console.log(product)
    if(product===null){
        return <h3 className="loading">Loading...</h3>
    }
    return (
        <div className="product-wrap">
            <button onClick={()=> navigate(-1)} id="back-btn">before</button>
            <div id='image-box'>
                <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id='profile-box'>
                <span className="product-seller">{product.seller} <AiFillHeart /></span>
            </div>
            <div id='contents-box'>
                <div id="name">{product.name}</div>
                <div id="price">{product.price}</div>
                <div id="createdAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일')}</div>
                <Button type="primary" danger className="payment" size="large" onClick={onClickPurchase} disabled={product.soldout === 1 ? true:false}>즉시결제하기</Button>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
};

export default ProductPage;