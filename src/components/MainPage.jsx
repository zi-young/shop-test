import { FaCat } from "react-icons/fa"; 
import React, { useState, useEffect } from 'react';
import Mainslide from './Mainslide';
import Mdpick from './Mdpick';
import Magazine from './Magazine';
import axios from "axios";
import { Link } from "react-router-dom";




const MainPage = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {   
        let url = "http://localhost:8080/products";
            axios.get(url).then((result)=>{
                const products = result.data.product;
                setProducts(products)
            }).catch((error)=>{
                console.log(error)
            })
    }, []);
    console.log(product.imageUrl)

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
             <h2>products</h2>
                <div id="product-list" className="p-list">
                {product.map((product, idx) => {
                        return (
                            <Link className="product-link" to={`/ProductPage/${idx}`}>
                                <div className="product-card" key={idx}>
                                    <div>
                                        <img src={product.imageUrl} alt="dd" className="product-img" />
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-price">{product.price}</span>
                                        <div className="product-seller">
                                            <FaCat  className="product-avatar" />
                                            <span className="seller">{product.seller}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
           </div>
            <Magazine />
        </div>
    );
};

export default MainPage;