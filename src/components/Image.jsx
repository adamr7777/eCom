import React, {useState, useContext} from "react";
import PropTypes from 'prop-types';

import {contextObj} from '../Context';



export default function Image({className, imgObj}) {
    const [hovered, setHovered] = useState(false);
    const {url, id, isFavorite} = imgObj;
    const {toggleLiked, addCartItems, cartItems} = useContext(contextObj);
    const itemInCart = cartItems.includes(imgObj);

    const heartIcon = <i className={isFavorite ? "ri-heart-fill favorite"
        : "ri-heart-line favorite"} 
        onClick={()=> toggleLiked(id)}></i>;
        
    const cartIcon = <i onClick={()=> addCartItems(imgObj)} className={itemInCart ? "ri-shopping-cart-fill cart"
        : "ri-add-circle-line cart"}></i>;
    
        
        
        function handleHover(event) {
            if (event.type === 'mouseover') setHovered(true);
            else setHovered(false);
        }
        

        Image.propTypes = {
            className: PropTypes.string,
            imgObj: PropTypes.object,
        }
    
    return (
        <div onMouseOver={handleHover} onMouseLeave={handleHover} className={`${className} image-container`}>
            <img src={url} className="image-grid"/>
            {hovered && heartIcon}
            {hovered && cartIcon}
        </div>
    )
}


