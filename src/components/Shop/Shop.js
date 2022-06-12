import React, { useState ,useEffect } from 'react';
import { addToDb ,getStoredCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [searchDisplay,setSearchDisplay]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data=>{
                setProducts(data);
                setSearchDisplay(data);
            } );
            
    }, []);

    useEffect(()=>{
        if(products.length){
            const savedCart= getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
             const savedProduct = products.find(product => product.key===key);
             if(savedProduct){
                const quantity = savedCart[key];
                savedProduct.quantity=quantity;            
            }
             storedCart.push(savedProduct);
            }
            setCart(storedCart);
       
        }

    }
    ,[products]);
    const cartHnadler = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
        // save local storage
        addToDb(product.key);
    }
   const searchProduct = event => {
       const searchText = event.target.value;
       const matchProdcuts = products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
       setSearchDisplay(matchProdcuts);

       console.log(matchProdcuts.length);
   }
    return (
    <div>
        <div className="search-container">
        <input type="text" placeholder='search product here' onChange={searchProduct} />
    </div>
        <div className='shop-container'>
            <div className="product-section">
               <h3> All products {searchDisplay.length}</h3>
               {
                   searchDisplay.map(product=><Product 
                        key={product.key}
                         product={product}
                         cartHnadler={cartHnadler}>

                    </Product>)
               }
            </div>
               <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;