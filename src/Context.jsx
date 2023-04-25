import React, {createContext, useState, useEffect} from 'react';




export const contextObj = createContext();

export function ContextProvider ({children}) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const photoUrl = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

    useEffect(()=> {
        fetch(photoUrl)
            .then(res=> res.json())
            .then(data=> setAllPhotos(data));
    },[])

    function toggleLiked(id) {
        setAllPhotos((prevState)=> {
            return prevState.map((item)=> {
                return item.id === id ? {...item, isFavorite: !item.isFavorite} : item;
            })
        })
    }

    function addCartItems(cartItem) {
        const alreadyInCart = cartItems.includes(cartItem);
        // if (alreadyInCart) setCartItems((prevState)=> {
        //     let itemsArray = [...prevState];
        //     itemsArray.forEach((item, index)=> {
        //         if (item.id === cartItem.id) itemsArray.splice(index, 1);
        //     })
        //     return itemsArray;
        // })
        if (alreadyInCart) setCartItems((prevState)=> prevState.filter((item)=> {
            return item.id !== cartItem.id
        }))
        else setCartItems((prevState)=> [...prevState, cartItem]);
    }

    return (
        <contextObj.Provider value={{allPhotos, toggleLiked, addCartItems, cartItems}}>
            {children}
        </contextObj.Provider>
    )
};
