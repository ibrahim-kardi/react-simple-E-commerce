import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
  
    // const totalReducer = (previous,product)=>previous+product.price;
    // const total = cart.reduce(totalReducer,0);
   

    let total= 0;
    for( const product of cart){
        
        product.quantity = !product.quantity ? 1 : product.quantity;
        total=total+product.price*product.quantity;
        totalQuantity = totalQuantity+product.quantity;
    }
    const shiping = total >0 ? 30 : 0;
    const tax = (total+shiping)*.10;
    const grandTotal = total+shiping+tax;
    return (
        <div>
          <div className="cart-section">
                <h3>Cart Details</h3>
                <h4>Order list:{totalQuantity} </h4>
                <p>Pirce: {total}</p>
                <p>shipping: {shiping}</p>
                <p>Tex : {tax}</p>
                <h5>Grand Total : {grandTotal}</h5>
            </div>
            
        </div>
    );
};

export default Cart;