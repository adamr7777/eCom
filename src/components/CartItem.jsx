import React, {useContext, useState} from "react"

import {contextObj} from '../Context';




export default function CartItem({item}) {
    const [mouseOver, setMouseOver] = useState(false);
    const {addCartItems}= useContext(contextObj);
    const className = mouseOver ? 'ri-delete-bin-fill' : 'ri-delete-bin-line';
    return (
        <div className="cart-item">
            <i onMouseEnter={()=> setMouseOver(true)} onMouseLeave={()=> setMouseOver(false)} onClick={()=> addCartItems(item)} className={className}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
