import React, {createContext, useState, useEffect} from 'react';




export const contextObj = createContext();

export function ContextProvider ({children}) {
    const [allPhotos, setAllPhotos] = useState([]);
    const photoUrl = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

    useEffect(()=> {
        fetch(photoUrl)
            .then(res=> res.json())
            .then(data=> setAllPhotos(data));
    },[])

    return (
        <contextObj.Provider value={{allPhotos}}>
            {children}
        </contextObj.Provider>
    )
};
