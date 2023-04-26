import React, {useContext, useState} from "react";

import {contextObj} from '../Context';
import CartItem from '../components/CartItem'; 

export default function Cart() {
    const [order, setOrder] = useState({ordering: false, orderPlaced: false});
    const {cartItems, setCartItems} = useContext(contextObj);
    const num = 5.99 * cartItems.length;
    const total = `$${num}`;
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ));
    const {ordering, orderPlaced} = order;


    function placeOrder() {
        setOrder((prevState)=> ({...prevState, ordering: true}));
        setTimeout(()=> {
            setOrder(({ordering: false, orderPlaced: true }));
            setCartItems([]);
        }, 3000);
    }


    // function placeOrder() {
    //     setOrder((prevState)=> ({...prevState, ordering: true}));
    //     useEffect(()=> {
    //         setTimeout(()=> {
    //             setOrder(({ordering: false, orderPlaced: true }));
    //             cartItems.splice(0, cartItems.length);
    //         }, 3000);
    //     })
    // }

    const buttonText = ordering ? 'Ordering...' : orderPlaced ? 'Order placed!' : 'Place Order'

    

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            {
                cartItems.length > 0 ? 
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button> 
                </div>
                : <h3>Put some items to your cart to order</h3>
            }
        </main>
    )
}

