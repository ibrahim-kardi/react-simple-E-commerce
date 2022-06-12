import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
const {name,img,seller,price,stock,star} = props.product;
const carticon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
    

        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p><small>By: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} prodcuts left</small></p>
                <Rating 
                initialRating={star}
                emptySymbol="far fa-star" 
                fullSymbol="fas fa-star"
                readonly></Rating> 
                <br />
            <button className="cart-button" onClick={()=>props.cartHnadler(props.product)}>{carticon} Add to cart</button>
            </div>
  
        </div>
       
    );
};

export default Product;