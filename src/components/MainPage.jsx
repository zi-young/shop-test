import { FaCat } from "react-icons/fa"; 
import React, { useState, useEffect } from 'react';
import Mainslide from './Mainslide';
import Mdpick from './Mdpick';
import Magazine from './Magazine';
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config/constants";




const MainPage = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {   
        let url = `${API_URL}/products`;
            axios.get(url).then((result)=>{
                const products = result.data.product;
                setProducts(products)
            }).catch((error)=>{
                console.log(error)
            })
    }, []);
    console.log(product.imageUrl)
    console.log(product)

    return (
        <div>
            <Mainslide />
            <Mdpick />
            <div className="banner">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
           <div className="products">
             <h3>products</h3>
                <div id="product-list" className="p-list">
                    {product.map((product) => {
                        return (
                            <div className="product-card" key={product.id}>
                                {product.soldout===1 ? <div className="product-blur"></div> : null}
                                <Link className="product-link" to={`/productPage/${product.id}`}>
                                    <div>
                                        <img src={`${API_URL}/${product.imageUrl}`} alt="" className="product-img" />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}</span>
                                        <div className="product-seller">
                                            <FaCat  className="product-avatar" />
                                            <span className="seller">{product.seller}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}

                </div>
           </div>
            <Magazine />
        </div>
    );
};

export default MainPage;