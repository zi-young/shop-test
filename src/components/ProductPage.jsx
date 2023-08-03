import { AiFillHeart } from "react-icons/ai"; 
import React, {useEffect, useState} from 'react';
import { useParams,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./ProductPage.scss"

const ProductPage = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://4ad88ba8-1261-4c6f-b0c3-c6a35416cecd.mock.pstmn.io/products/${id}`)
        .then((result)=>{
            setProduct(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, []);
    console.log(product)
    if(product===null){
        return <h2 className="loading">Loading...</h2>
    }
    return (
        <div>
            <button onClick={()=> navigate(-1)} id="back-btn">before</button>
            <div id='image-box'>
                <img src={`/${product.imageUrl}`} alt={product.name} />
            </div>
            <div id='profile-box'>
                <span className="product-seller">{product.seller} <AiFillHeart /></span>
            </div>
            <div id='contents-box'>
                <div id="name">{product.name}</div>
                <div id="price">{product.price}</div>
                <div id="createAt">2023.08.02</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
};

export default ProductPage;